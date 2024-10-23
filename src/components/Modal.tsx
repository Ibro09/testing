import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Close modal on pressing Escape
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const closeModal = () => {
    navigate("/");
  };

  return (
    <div className='fixed bottom-0 flex justify-center items-end z-50'>
      <div className='bg-white w-full md:w-1/2 lg:w-1/3 rounded-t-lg p-6 animate-slide-up relative h-[70%]'>
        <button
          onClick={closeModal}
          className='text-red-500 hover:text-red-700 absolute top-4 right-4'>
          X
        </button>
        <h2 className='text-xl font-bold mb-4'>Modal Content</h2>
        <p className='text-gray-700'>This is a hardcoded modal content.</p>
      </div>
    </div>
  );
};

export default ModalPage;
