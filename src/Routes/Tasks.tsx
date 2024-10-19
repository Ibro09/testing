import React, { useState, useEffect } from "react";
import "../App.css";
// import { FaCopy, FaUserFriends } from "react-icons/fa";
// import { TiUserAdd } from "react-icons/ti";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import { FaPlus } from "react-icons/fa";
import {
  binanceLogo,

  dollarCoin,

} from "../images";

import Footer from "../components/Footer";
const Friends: React.FC = () => {
  const [tasks, setTasks] = useState(1);
    const [points, setPoints] = useState(22749365);
  return (
    <div
      className='flex justify-center'
      style={{ scrollbarWidth: "none", scrollbarColor: "red" }}>
      <div className=' w-full text-white font-bold flex flex-col max-w-xl border-2 bubblegum-sans px-5 items-center min-h-[100vh] otherbg'>
        {/* Put the heading with coin here */}
        <div className='w-full flex flex-row justify-between items-center mt-5 px-6 mb-20'>
          <div className='flex justify-center items-center w-[50vw]'>
            <div
              className='flex h-7 rounded-xl w-full text-xl -ml-5 btn-upper justify-center items-center  '
              style={{
                alignItems: "center",
              }}>
              <img
                src={dollarCoin}
                alt='Dollar Coin'
                className='w-7 h-7 mx-auto zindex -ml-0 '
              />
              <div className='items-start justify-center w-full  '>
                <div className='flex flex-col w-full justify-center px-2 '>
                  <p className='font-normal text-[16px] tracking-wider'>
                    {points}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='flex w-[30vw] '>
              <div className='flex items-center rounded-full  max-w-64  justify-between  w-full gap-3 btn-upper'>
                <img
                  src={binanceLogo}
                  alt='Exchange'
                  className='w-7 h-7'
                />
                <p className='text-[16px] tracking-widest'>4</p>
                <div className='bg-[#aaa] rounded-full p-2'>
                  {/* <FaPlus size={10} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full items-center'>
          <h5 className='font-normal text-[30px] mb-2 text-center'>Special</h5>
          {tasks > 0 ? (
            <div className='w-full'>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className='font-normal'>no tasks Available,come back later</p>
          )}
        </div>

        <div className='w-full items-center'>
          <h5 className='font-normal text-[30px] mb-2 text-center'>
            Daily Tasks
          </h5>
          {tasks > 0 ? (
            <div className='w-full'>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className='font-normal'>no tasks Available,come back later</p>
          )}
        </div>
        <div className='w-full items-center mb-[200px]'>
          <h5 className='font-normal text-[30px] mb-2 text-center'>
            Social Tasks
          </h5>
          {tasks > 0 ? (
            <div className='w-full'>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-item w-full px-4 py-2 mb-2 rounded-[10px]'>
                {/* use glass morphism for these */}
                <div className='item items-center'>
                  {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
                  <div className='txt font-normal'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        {/* <AiOutlineUserAdd size={20} /> */}
                        <div className='txt font-normal px-4 '>
                          <p className='text-[17px] max-w-100'>Follow Sonic</p>
                          <p className='text-[#ddd] text-[14px] '>+750</p>
                        </div>
                      </div>
                      {/* <button className='main-button bubblegum-sans w-[100px]'>
                      <div className='upper'>verify</div>
                      <div className='lower'></div>
                    </button> */}
                      <button className='main-button bubblegum-sans w-[100px]'>
                        <div className='upper btn-upper'>Go</div>
                        <div className='lower btn-lower'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className='font-normal'>no tasks Available,come back later</p>
          )}
        </div>
      </div>
      <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl flex justify-around items-center z-50 rounded-3xl text-xs flex-col bubblegum-sans'>
        <Footer />
      </div>
    </div>
  );
};

export default Friends;
