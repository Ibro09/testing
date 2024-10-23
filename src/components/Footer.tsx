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

const Footer: React.FC = ({}) => {
  return (
    <div className='fixed bottom-1 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl flex justify-around items-center z-50 rounded-3xl text-xs flex-col bubblegum-sans'>
      <div className='flex justify-around items-center z-50 rounded-3xl text-xs w-[100%] footer'>
        <div className='text-center w-1/4 m-1 p-1 text-[#2465CF]'>
          <Link to='/'>
            <img
              src={binanceLogo}
              alt='Exchange'
              className='w-8 h-8 mx-auto'
            />
            <p className='mt-1 text-[13px] '>Premium</p>
          </Link>
        </div>
        <div className='text-center w-1/4 text-[#]  p-1'>
          <Link to='/tasks'>
            <Mine className='w-8 h-8 mx-auto text-[#aaa]' />
            <p className='mt-1   text-[13px]'>Tasks</p>
          </Link>
        </div>

        <div className='text-center w-1/4 text-[#2465CF]  p-1'>
          <Link to='/friend'>
            <Coins className='w-8 h-8 mx-auto text-[#aaa]' />
            <p className='mt-1  text-[13px] '>Invite</p>
          </Link>
        </div>
        <div className='text-center w-1/4 text-[#2465CF]  p-1'>
          <Link to='/wallet'>
            <img
              src={hamsterCoin}
              alt='Airdrop'
              className='w-8 h-8 mx-auto'
            />
            <p className='mt-1 text-[13px]'>Wallet</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
