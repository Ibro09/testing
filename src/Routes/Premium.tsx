import React, { useState, useEffect } from "react";
import "../App.css";
// import { FaCopy, FaUserFriends } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
// import { AiOutlineUserAdd } from "react-icons/ai";
import Footer from "../components/Footer";
import Back from "../components/Back";
import copy from "../icons/copy.png";
import friends from "../icons/friends.png";

const Friends: React.FC = () => {
  const [referrals, setReferrals] = useState(1);
  return (
    <div className=' flex justify-center'>
      <div className='w-full bg-black text-white min-h-screen h-full font-bold flex flex-col max-w-xl bg-no-repeat bg-cover bg-center bubblegum-sans px-5 items-center bg'>
        <Back />
        {/* <img src="" alt="" /> sonic logo   */}
        <h5 className='text-[30px] tb tx-shadow mt-6 text-center'>
          Get access to sonic premium
        </h5>
        <h5 className='mb-5 text-center text-[17px] text-[#2465CF] bg-white p-4 py-2 rounded-full border'>
          430,343 users has premium
        </h5>
        <div className='bg-item w-full px-4 py-4 mb-5 rounded-[10px] '>
          {/* use glass morphism for these */}
          <div className='item'>
            <div className='txt font-normal px-2 mb-4 flex items-center gap-2'>
              <img
                src={friends}
                alt=''
                className='w-7 h-7'
              />
              <div>
                <p className='text-[#ddd] text-[16px] -mt-2 '>
                  +750 points for you and your friend Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, nobis!
                </p>
              </div>
            </div>
            <div className='txt font-normal px-2 mb-4 flex items-center gap-2'>
              <img
                src={friends}
                alt=''
                className='w-7 h-7'
              />
              <div>
                <p className='text-[#ddd] text-[16px] -mt-2 '>
                  +750 points for you and your friend Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, nobis!
                </p>
              </div>
            </div>
            <div className='txt font-normal px-2 mb-4 flex items-center gap-2'>
              <img
                src={friends}
                alt=''
                className='w-7 h-7'
              />
              <div>
                <p className='text-[#ddd] text-[16px] -mt-2 '>
                  +750 points for you and your friend Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, nobis!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center flex-col gap-3 w-full'>
          <button className='border bubblegum-sans tx-shadow text-[white] w-full p-2 text-[16px] font-normal rounded-full'>
            <div className=''>Buy for ton</div>
          </button>
          <button className='main-button bubblegum-sans w-full text-[16px] font-normal mb-[100px]'>
            <div className='upper btn-upper'>Buy for 500 star</div>
            <div className='lower  btn-lower'></div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Friends;
