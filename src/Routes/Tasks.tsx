import React, { useState, useEffect } from "react";
import "../App.css";

import Footer from "../components/Footer";
import Back from "../components/Back";

import bg from '../images/sunbg.png'

const Friends: React.FC = () => {
  const [tasks, setTasks] = useState(1);
  return (
    <div
      className='flex justify-center h-screen max-h-screen'
      style={{ scrollbarWidth: "none", scrollbarColor: "red" }}>
      <div className='w-full bg-black text-white min-h-screen h-full font-bold flex flex-col max-w-xl bg-no-repeat bg-cover bg-center bubblegum-sans px-5 items-center'>
        <Back />
        <div className=' fixed top-0 bottom-0 left-0 right-0 z-0 items-center'>
          <img
            src={bg}
            alt=''
            className="w-full h-full"
          />
        </div>
        <div className='w-full items-center zindex'>
          <h5 className='text-[40px] mb-2 text-center tx-shadow mt-6'>
            Special
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
            </div>
          ) : (
            <p className='font-normal'>no tasks Available,come back later</p>
          )}
        </div>

        <div className='w-full items-center zindex'>
          <h5 className=' text-[30px] mb-2 text-center tx-shadow'>
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
        <div className='w-full items-center mb-[200px] zindex'>
          <h5 className=' text-[30px] mb-2 text-center tx-shadow'>
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
      <Footer />
    </div>
  );
};

export default Friends;
