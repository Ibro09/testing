import React, { useState, useEffect } from "react";
import "../App.css";
// import { FaPlus } from "react-icons/fa";
import { dollarCoin,  } from "../images";
import sonic from "../images/sonic.png";

import Footer from "../components/Footer";

const App: React.FC = () => {
  const levelNames = [
    "Bronze", // From 0 to 4999 coins
    "Silver", // From 5000 coins to 24,999 coins
    "Gold", // From 25,000 coins to 99,999 coins
    "Platinum", // From 100,000 coins to 999,999 coins
    "Diamond", // From 1,000,000 coins to 2,000,000 coins
    "Epic", // From 2,000,000 coins to 10,000,000 coins
    "Legendary", // From 10,000,000 coins to 50,000,000 coins
    "Master", // From 50,000,000 coins to 100,000,000 coins
    "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
    "Lord", // From 1,000,000,000 coins to ∞
  ];

  const levelMinPoints = [
    0, // Bronze
    5000, // Silver
    25000, // Gold
    100000, // Platinum
    1000000, // Diamond
    2000000, // Epic
    10000000, // Legendary
    50000000, // Master
    100000000, // GrandMaster
    1000000000, // Lord
  ];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(22749365);
  const [remPoints, setRemPoints] = useState(7000);
  const [name, setName] = useState("Web3ibrro");

  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    [],
  );
  const pointsToAdd = 11;
  const profitPerHour = 126420;

  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

  const calculateTimeLeft = (targetHour: number) => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(targetHour, 0, 0, 0);

    if (now.getUTCHours() >= targetHour) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}`;
  };

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft(0));
      setDailyCipherTimeLeft(calculateTimeLeft(19));
      setDailyComboTimeLeft(calculateTimeLeft(12));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
    setRemPoints(remPoints - pointsToAdd);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks(prevClicks => prevClicks.filter(click => click.id !== id));
  };

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints(prevPoints => prevPoints + pointsPerSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, [profitPerHour]);

  useEffect(() => {
    if (remPoints === 7000 || remPoints > 7000) {
      setRemPoints(7000);
    }
    const refillPoints = Math.floor(5);
    const interval = setInterval(() => {
      setRemPoints(prevPoints => prevPoints + refillPoints);
    }, 1000);
    if (remPoints === 7000 || remPoints > 7000) {
      setRemPoints(7000);
      return () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [remPoints]);

  return (
    <div className='flex justify-center overflow-y-hidden overflow-x-hidden'>
      <div className=' w-full text-white h-screen font-bold flex flex-col max-w-xl bubblegum-sans bg-cover bg-center px-4 bg overflow-hidden'>
        <div className='mt-3'>
          <div className='flex justify-between '>
            <div className='flex items-center bg-white border-2  max-w-[300px] w-[60%] rounded-full border'>
              <img
                src={dollarCoin}
                alt=''
                className='w-8 h-8 z-[2]'
              />
              <div className='py-1   align-start w-full px-7 -ml-5'>
                <p className='font-normal text-[16px] text-[#2465CF] '>
                  {name}
                </p>
              </div>
            </div>
            <div className='flex items-center bg-white rounded-full border-2 max-w-[300px] w-[100px] justify-between border'>
              <img
                src={dollarCoin}
                alt=''
                className='w-8 h-8 z-[2] -ml-3'
              />
              <p className='font-normal text-[16px] text-[#2465CF] '>4</p>
              <img
                src={dollarCoin}
                alt=''
                className='w-8 h-8 z-[2] -mr-3'
              />
            </div>
          </div>
          <div className='mt-3 w-full'>
            <div className=' w-full flex items-center justify-center'>
              <img
                src={dollarCoin}
                alt='Dollar Coin'
                className='w-10 h-10'
              />
              <p className='text-[30px] font-bold tx-shadow'>
                {points.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className=' flex items-center justify-center fixed bottom-20 pb-6 fixed w-auto left-0 right-0 '>
          <div
            className='w-[250px] flex items-center justify-center'
            onClick={handleCardClick}>
            <img
              src={sonic}
              alt=''
              style={{ width: "230px" }}
            />
          </div>
        </div>
        <div className='flex items-center gap-2 fixed bottom-20 pb-5'>
          <img
            src={dollarCoin}
            alt=''
            className='w-7 h-7'
          />
          <div className='flex'>
            <p className='text-[#2465CF] font-normal'>{remPoints}</p>
            <p className='text-[#2465CF] font-normal'>/7000</p>
          </div>
        </div>
        <Footer />

        <div className='cards  fixed top-[calc(45%-4rem)]'>
          <div className='card p-1 rounded-[10px] px-4 flex items-center justify-center flex-col mb-2 border'>
            <img
              src={dollarCoin}
              alt=''
              className='w-7 h-7'
            />
            <p className='text-[#2465CF] font-normal text-[16px] '>lvl 1</p>
          </div>
          <div className='card p-1 rounded-[10px] px-4 flex items-center justify-center flex-col mb-2 border'>
            <img
              src={dollarCoin}
              alt=''
              className='w-7 h-7'
            />
            <p className='text-[#2465CF] font-normal text-[16px] '>Spin</p>
          </div>
          <div className='card p-1 rounded-[10px] px-4 flex items-center justify-center flex-col border'>
            <img
              src={dollarCoin}
              alt=''
              className='w-7 h-7'
            />
            <p className='text-[#2465CF] font-normal text-[15px] '>Boost</p>
          </div>
        </div>
        {clicks.map(click => (
          <div
            key={click.id}
            className='absolute text-5xl font-bold opacity-0 text-white pointer-events-none'
            style={{
              top: `${click.y - 42}px`,
              left: `${click.x - 28}px`,
              animation: `float 1s ease-out`,
            }}
            onAnimationEnd={() => handleAnimationEnd(click.id)}>
            {pointsToAdd}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

//  <div className='w-full flex flex-row justify-between items-center mt-5 px-6 z-[4]'>
//           <div className='flex justify-center items-center w-[70vw]'>
//             <div
//               className='flex h-7 rounded-xl w-full text-xl -ml-5 btn-upper justify-center items-center'
//               style={{
//                 alignItems: "center",
//               }}>
//               <img
//                 src={dollarCoin}
//                 alt='Dollar Coin'
//                 className='w-7 h-7 mx-auto zindex -ml-0 '
//               />
//               <div className='items-start justify-center w-[70%]  '>
//                 <div className='flex flex-col w-full justify-center px-2 '>
//                   <p className='font-normal text-[16px] tracking-wider'>
//                     {points.toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className=''>
//             <div className='flex w-[30vw] '>
//               <div className='flex items-center rounded-full  max-w-64  justify-between btn-upper  w-full gap-3'>
//                 <img
//                   src={binanceLogo}
//                   alt='Exchange'
//                   className='w-7 h-7'
//                 />
//                 <p className='text-[16px] tracking-widest'>4</p>
//                 <div className='bg-[#aaa] rounded-full p-2'>
//                   {/* <FaPlus size={10} /> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=' flex items-center space-x-2 border-2 '>
//           <img
//             src={dollarCoin}
//             alt='Dollar Coin'
//             className='w-10 h-10'
//           />
//           <p className='text-[30px] font-bold'>{points.toLocaleString()}</p>
//         </div>
//         <div className='flex-grow mt-4'>
//           <div className='rounded-t-[46px] w-full'>
//             <div className='px-4  flex justify-center'></div>

//             <div className='px-4 mt-4 flex justify-center'>
//               <div
//                 className='w-[250px] h-[250px] p-4 rounded-full '
//                 onClick={handleCardClick}>
//                 <div className='w-full h-full rounded-full '>
//                   <img
//                     src={sonic}
//                     alt='Main Character'
//                     style={{ width: "200px" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl flex justify-around items-center z-50 rounded-3xl text-xs flex-col bubblegum-sans'>
//           <div className='px-4 z-10 w-[100%] mb-4'>
//             <div className='flex items-center justify-between space-x-4 mt-1'>
//               <div className='flex items-center w-[70%]'>
//                 <div className='w-auto  py-4 px-6 rounded-full zindex btn-upper text-white'>
//                   <div className='flex items-center flex-col'>
//                     <div className='text-[20px] font-bold'>{points} </div>
//                     <div className='text-l font-bold'>
//                       /{levelMinPoints[levelIndex]}
//                     </div>
//                   </div>
//                 </div>
//                 <div className='flex items-center mt-1 border-2 border-[white] rounded-full w-[100%] -ml-2.5 '>
//                   <div className='w-[70%] h-5 bg-[blue]/[0.6] rounded-full z-0 btn'>
//                     <div
//                       className='h-2 rounded-full'
//                       style={{ width: `${calculateProgress()}%` }}></div>
//                   </div>
//                 </div>
//               </div>
//               <div className='flex items-center w-auto border-[white]  rounded-xl px-6 py-2 max-w-64 flex-col btn-upper text-white'>
//                 <div className='text-xl font-bold'>{remPoints}</div>
//                 <div className='text-l font-bold'>/7000</div>
//               </div>
//             </div>
//           </div>
//         </div>

//  <div className=' flex w-full justify-center items-center  px-4 mt-5 z-[4]'>

//    <div className='flex justify-center items-center p-1 btn-upper rounded-full gap-3 px-4'>
//      <div className='flex items-center justify-center'>
//        <img
//          src={dollarCoin}
//          alt='Dollar Coin'
//          className='w-5 h-5 mx-auto zindex -ml-0 '
//        />
//        <p className='px-2 text-[16px] font-normal'>Boosters</p>
//      </div>
//      <div className='flex  items-center'>
//        <img
//          src={dollarCoin}
//          alt='Dollar Coin'
//          className='w-5 h-5 mx-auto zindex  '
//        />
//        <p className='px-2 text-[16px] font-normal'>Boosters</p>
//      </div>
//      <div className='flex  items-center'>
//        <img
//          src={dollarCoin}
//          alt='Dollar Coin'
//          className='w-5 h-5 mx-auto zindex '
//        />
//        <p className='px-2 text-[16px] font-normal'>Boosters</p>
//      </div>
//    </div>
//  </div>;
