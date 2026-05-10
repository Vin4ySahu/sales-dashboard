import React from "react";
import { FiZap } from "react-icons/fi";

const DabangProCard = () => {
  return (
    <div className="flex justify-center">
      <div className="w-44 mx-1 mt-4 rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 p-4 text-white shadow-lg ">
        <div className=" flex  justify-center ">
          <FiZap className="text-indigo-600   w-6 h-6 rounded-xl bg-white  my-2 " />
        </div>
        <p className="flex justify-center text-md font-semibold leading-snug mb-2">
          Dabang Pro
        </p>

        <p className="text-[10px]  flex justify-center">Get access to all </p>
        <p className="text-[10px] flex justify-center ">features on tetumbas</p>
        <div className="flex justify-center">
          <button className="w-28 bg-white text-indigo-600 text-xs font-bold py-2 rounded-lg hover:bg-indigo-50 transition-colors my-4">
            Get Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default DabangProCard;
