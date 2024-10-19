import React, { useState, useEffect } from "react";
import "../App.css";

import { Wheel } from "react-custom-roulette";
import { FaPlus, FaTimes } from "react-icons/fa";

const Spin: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [data, setData] = useState([
    {
      image: {
        uri: "https://images.ctfassets.net/vhp9jnid12wf/1LpNg2HgsR92tSd6UFl49L/b6246fc291865f90fda6dc37ea553a07/game.png",
        landscape: true,
        sizeMultiplier: 0.75,
        offsetX: 0,
      },
      style: {},
      txt: "style1",
    },
    {
      option: "7-day free trial",
      txt: "style2",
    },
    {
      image: {
        uri: "https://images.ctfassets.net/vhp9jnid12wf/5JTVGwAj0qhtvfoyaigZP2/5de37d1887f91e8492a77b1745f2d563/boxing-gloves.png",
        landscape: true,
        sizeMultiplier: 0.75,
        offsetX: 0,
      },
      style: {
        //  height: 48,
      },
      txt: "style3",
    },
    {
      option: `1 month freeyyy`,
      txt: "style4",
    },
    {
      image: {
        uri: "https://images.ctfassets.net/vhp9jnid12wf/7h6RcUFyE0fsF932oglivQ/2e3550131d35015b51569f1d8f55501a/football-ticket.png",
        landscape: true,
        sizeMultiplier: 0.75,
        offsetX: 0,
      },
      style: {
        height: 48,
      },
      txt: "style5",
    },
    {
      option: "Next time!",
      txt: "style6",
    },
  ]);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [txt, setTxt] = useState("");
  const [showtxt, setShowTxt] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setShowTxt(false);
    setTxt("");
  };

  useEffect(() => {
    setTimeout(() => {
      setShowTxt(false)
    }, 7000);
  }, [showtxt]);
  return (
    <div className='bg-black flex justify-center items-center'>
      <div className='w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl bg-no-repeat bg-cover bg-center bubblegum-sans overflow-hidden'>
        <div className='wheel-container flex justify-center items-center flex-col'>
          <div className='flex w-full px-4 justify-center items-center pt-4 pb-7'>
            <div className='flex w-full '>
              <button className='main-button bubblegum-sans spin'>
                <div className='upper'>0 spin</div>
                <div className='lower'></div>
              </button>
              <button className='main-button bubblegum-sans copy'>
                <div className='upper gap-3'>
                  <FaPlus></FaPlus>
                </div>
                <div className='lower'></div>
              </button>
            </div>
            <div>
              <FaTimes size={20} />
            </div>
          </div>
          <p>{showtxt ? `${data[prizeNumber].txt}` : ""}</p>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            outerBorderColor={"#eecb08"}
            outerBorderWidth={20}
            innerBorderColor={"black"}
            radiusLineColor={"#eecb08"}
            radiusLineWidth={1}
            textColors={["#fff"]}
            fontSize={18}
            fontWeight={500}
            startingOptionIndex={prizeNumber}
            backgroundColors={[
              "#165FA9",
              "#239b63",
              "#F7A415",
              "#3F297E",
              "#BE1080",
              "#DC0836",
            ]}
            onStopSpinning={() => {
              setMustSpin(false);
              setShowTxt(true);
            }}
          />

          <button
            className='main-button bubblegum-sans mt-10'
            onClick={handleSpinClick}>
            <div className='upper'>Spin</div>
            <div className='lower'></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spin;
