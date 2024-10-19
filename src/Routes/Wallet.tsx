import React, { useState, useEffect } from "react";
import "../App.css";
// import { FaCopy, FaUserFriends } from "react-icons/fa";
// import { AiOutlineUserAdd } from "react-icons/ai";

const Wallet: React.FC = () => {
  const [referrals, setReferrals] = useState(1);
  return (
    <div className=' flex justify-center'>
      <div className='w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl border-2 bg-no-repeat bg-cover bg-center bubblegum-sans px-5 items-center'>
        {/* <img src="" alt="" /> sonic logo   */}
        <h5 className='text-[40px] tb'>Invite Wallet</h5>
        <h5 className='mb-5 text-center text-[14px]'>
          You and your friend would recieve bonuses for invitation
        </h5>
        <div className='bg-[#4960b2] w-full px-6 py-4 mb-5 rounded-[10px]'>
          {/* use glass morphism for these */}
          <div className='item'>
            {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
            <div className='txt font-normal px-4 mb-4'>
              <p className='text-[17px]'>Share referral link</p>
              <p className='text-[#ddd] text-[14px] -mt-2'>
                +750 points for you and your friend
              </p>
            </div>
            <div className='txt font-normal px-4 mb-4'>
              <p className='text-[17px]'>Invite a friend with premium</p>
              <p className='text-[#ddd] text-[14px] -mt-2'>
                +1000 points for you and your friend
              </p>
            </div>
            <div className='flex items-center'>
              <button className='main-button bubblegum-sans'>
                <div className='upper'>Invite</div>
                <div className='lower'></div>
              </button>
              <div className='main-button copy ml-1'>
                <div className='upper'>
                  {/* <FaCopy /> */}
                </div>
                <div className='lower'></div>
              </div>
            </div>
          </div>
        </div>

        <h5 className='text-left font-normal self-start mb-2'>
          List Of Your Wallet ({referrals})
        </h5>
        <div className='bg-item w-full px-6 py-4 mb-5 rounded-[10px]'>
          {/* use glass morphism for these */}

          {referrals > 0 ? (
            <div className='item'>
              {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
              <div className='txt font-normal mb-'>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    {/* <AiOutlineUserAdd size={20} /> */}
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    {/* <AiOutlineUserAdd size={20} />{" "} */}
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    {/* <AiOutlineUserAdd size={20} />{" "} */}
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
              </div>
            </div>
          ) : (
            <p className='font-normal'>You have not referred any user</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
