import React, { } from "react";
import "../App.css";
import {
  binanceLogo,
  hamsterCoin,
} from "../images";
import Mine from "../icons/Mine";
import Friends from "../icons/Friends";
import Coins from "../icons/Coins";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl flex justify-around items-center z-50 rounded-3xl text-xs flex-col bubblegum-sans'>
      <div className='flex justify-around items-center z-50 rounded-3xl text-xs w-[90%] footer border-2'>
        <div className='text-center text-[#85827d] w-1/4 bg-[#1c1f24] m-1 p-2 rounded-2xl'>
          <Link to='/'>
            <img
              src={binanceLogo}
              alt='Exchange'
              className='w-8 h-8 mx-auto'
            />
            <p className='mt-1'>Premium</p>
          </Link>
        </div>
        <div className='text-center text-white w-1/4'>
          <Link to='/tasks'>
            <Mine className='w-8 h-8 mx-auto' />
            <p className='mt-1'>Tasks</p>
          </Link>
        </div>
      
        <div className='text-center text-white w-1/4'>
          <Link to='/friend'>
            <Coins className='w-8 h-8 mx-auto' />
            <p className='mt-1'>Invite</p>
          </Link>
        </div>
        <div className='text-center text-white w-1/4'>
          <Link to='/wallet'>
            <img
              src={hamsterCoin}
              alt='Airdrop'
              className='w-8 h-8 mx-auto'
            />
            <p className='mt-1'>Wallet</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
