import React, { useState, useEffect } from "react";
import "./App.css";
import Hamster from "./icons/Hamster";
import { FaPlus  } from "react-icons/fa6";
import {
  binanceLogo,
  dailyCipher,
  dailyCombo,
  dailyReward,
  dollarCoin,
  hamsterCoin,
  mainCharacter,
} from "./images";
import Info from "./icons/Info";
import Settings from "./icons/Settings";
import Mine from "./icons/Mine";
import Friends from "./icons/Friends";
import Coins from "./icons/Coins";
import sonic from './images/sonic.png'

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
    setRemPoints(remPoints-pointsToAdd)
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

  const formatProfitPerHour = (profit: number) => {
    if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
    if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
    if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  };

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints(prevPoints => prevPoints + pointsPerSecond);
    }, 1000);
     
    return () => clearInterval(interval);
  }, [profitPerHour]);


  useEffect(() => {
     if (remPoints === 7000 || remPoints > 7000){
         setRemPoints(7000)
     }
    const refillPoints = Math.floor(5);
    const interval = setInterval(() => {
      setRemPoints(prevPoints => prevPoints + refillPoints)
    }, 1000);
     if (remPoints === 7000 || remPoints > 7000){
         setRemPoints(7000)
       return () => clearInterval(interval);
     }
    return () => clearInterval(interval);
  }, [remPoints]);

  return (
    <div className='bg-black flex justify-center'>
      <div className='w-full text-white h-screen font-bold flex flex-col max-w-xl border-2  bg-no-repeat bg-cover bg-center bg'>
        
        <div className='w-[100%] flex flex-row justify-between items-center mt-5'>
          <div className='flex justify-center items-center mt-2 px-4 w-[60%]'>
            <img
              src={dollarCoin}
              alt='Dollar Coin'
              className='w-12 h-12 mx-auto ml-10 zindex -ml-0 '
            />
            
            <div
              className='flex h-10 rounded-full bg-[red] w-full text-xl -ml-5 btn'
              style={{
                paddingLeft: "30px",
                alignItems: "center",

              }}>
                
              <div className='px-4'>
          <div className='flex items-center space-x-2 flex-col'>
            <div>
              <p className='text-sm'>Nikandr (CEO)</p>
            </div>
        <p  className='text-sm'>{points}</p>
          </div>
        </div>
              
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='flex w-full '>
              <div className='flex items-center rounded-full  max-w-64 btn justify-between  w-full'>
                <img
                  src={binanceLogo}
                  alt='Exchange'
                  className='w-10 h-10'
                />
                 <p className='text-sm'>
                      {formatProfitPerHour(profitPerHour)}
                    </p>
                <div className="bg-[#aab] rounded-full p-2">
                <FaPlus size={30}/>
                    </div>
  
              </div>
            </div>
          </div>
        </div> 
        <div className=" flex w-[100%] justify-center items-center  px-4 mt-5">
          <div className="flex justify-center items-center p-2 btn rounded-full gap-4">
    <div className="flex items-center justify-center">
          <img
              src={dollarCoin}
              alt='Dollar Coin'
              className='w-8 h-8 mx-auto zindex -ml-0 '
            />
            <p className="px-2 text-sm font-normal">Boosters</p>
        </div>
    <div className="flex  items-center">
          <img
              src={dollarCoin}
              alt='Dollar Coin'
              className='w-8 h-8 mx-auto zindex  '
            />
            <p className="px-2 text-sm font-normal">Boosters</p>
        </div>
    <div className="flex  items-center">
          <img
              src={dollarCoin}
              alt='Dollar Coin'
              className='w-8 h-8 mx-auto zindex '
            />
            <p className="px-2 text-sm font-normal">Boosters</p>
        </div>
          </div>
    
      </div>


       <div className="flex-grow mt-4">
          <div className="rounded-t-[46px] w-full">
            <div className="px-4  flex justify-center">
              <div className="px-4 py-2 flex items-center space-x-2">
                <img src={dollarCoin} alt="Dollar Coin" className="w-10 h-10" />
                <p className="text-4xl text-[#010357] font-bold">{points.toLocaleString()}</p>
              </div>
            </div>

            <div className="px-4 mt-4 flex justify-center">
              <div
                className="w-80 h-80 p-4 rounded-full circle-outer"
                onClick={handleCardClick}
              >
                <div className="w-full h-full rounded-full circle-inner">
                  <img src={sonic} alt="Main Character" style={{width:'200px'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     



      <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl flex justify-around items-center z-50 rounded-3xl text-xs flex-col'>
        <div className='px-4 z-10 w-[100%] mb-4'>
          <div className='flex items-center justify-between space-x-4 mt-1'>
            <div className='flex items-center w-[70%]'>
              <div className='w-auto btn py-4 px-6 rounded-full zindex'>
                <div className='flex items-center flex-col'>
                  <div className='text-xl font-bold'>{points} </div>
                  <div className='text-l font-bold'>
                    /{levelMinPoints[levelIndex]}
                  </div>
                </div>
              </div>
              <div className='flex items-center mt-1 border-2 border-[white] rounded-full w-[100%] -ml-2.5'>
                <div className='w-[70%] h-5 bg-[blue]/[0.6] rounded-full z-0 btn'>
                  <div
                    className='h-2 rounded-full'
                    style={{ width: `${calculateProgress()}%` }}></div>
                </div>
              </div>
            </div>

            <div className='flex items-center w-auto border-[white]  rounded-full px-6 py-2 bg-[blue]/[0.6] max-w-64 flex-col btn'>
              <div className='text-xl font-bold'>{remPoints}</div>
              <div className='text-l font-bold'>/7000</div>
            </div>
          </div>
        </div>
        <div className=' bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs w-[100%]'>
          <div className='text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl'>
            <img
              src={binanceLogo}
              alt='Exchange'
              className='w-8 h-8 mx-auto'
            />
            <p className='mt-1'>Premium</p>
          </div>
          <div className='text-center text-[#85827d] w-1/5'>
            <Mine className='w-8 h-8 mx-auto' />
            <p className='mt-1'>Shop</p>
          </div>
          <div className='text-center text-[#85827d] w-1/5'>
            <Friends className='w-8 h-8 mx-auto' />
            <p className='mt-1'>Earn</p>
          </div>
          <div className='text-center text-[#85827d] w-1/5'>
            <Coins className='w-8 h-8 mx-auto' />
            <p className='mt-1'>Invite</p>
          </div>
          <div className='text-center text-[#85827d] w-1/5'>
            <img
              src={hamsterCoin}
              alt='Airdrop'
              className='w-8 h-8 mx-auto'
            />
            <p className='mt-1'>Wallet</p>
          </div>
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
  );
};

export default App;


