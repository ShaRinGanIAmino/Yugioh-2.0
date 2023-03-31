import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { add, close } from '../assets';

function ConnectPopup(props) {
  const handleCloseClick = () => {
    props.onClose();
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center m-4">
      <div className="fixed inset-0 bg-black opacity-10"></div>
      <div className="bg-primary w-[95%]  ss:w-5/6 md:w-4/6 h-[90%] ss:h-4/5 sm:p-8 p-4 rounded-lg z-10 flex flex-col justify-center items-center border-solid border-2 border-secondary ">
        <div className=" w-full flex justify-end">
          <img
            src={close}
            alt="close"
            className="cursor-pointer "
            onClick={handleCloseClick}
          />
        </div>
        <div className="flex flex-col ss:flex-row items-center justify-center gap-2 ss:gap-8 m-2 sm:m-10">
          <img
            src={props.url}
            alt="Card"
            className=" w-[190px] md:w-[300px] sm:w-[200px] object-contain "
          />
          <div className=" mt-6 flex flex-col gap-2 ss:gap-5">
            <p className=" text-secondary font-poppins text-base md:text-xl">
              {props.name}
            </p>
            <p
              className={
                props.type.includes('Spell Card')
                  ? 'text-green-500'
                  : props.type.includes('Trap Card')
                  ? 'text-purple-500'
                  : 'text-red-500'
              }>
              {props.type}
            </p>
            <p className=" text-secondary text-xs sm:text-sm lg:text-base">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ConnectPopup;
