import React from "react";
import {
  FaDollarSign,
  FaHouse,
  FaTemperatureThreeQuarters,
} from "react-icons/fa6";
import { FiActivity, FiBarChart, FiWatch } from "react-icons/fi";
const Sidebar = () => {
  return (
    <>
      <div className="">
        <div className="title ">
          <h1 className="font-semibold text-3xl text-center my-5">
            Calculated
          </h1>
        </div>

        <div className="selection">
          <div className="title">
            <p className="text-center">Select your Calculator</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="buttons w-3/4 grid grid-cols-2 gap-4 pt-3">
              <button className="bg-blue4 active p-8 text-2xl rounded btn-hover items-center justify-center flex">
                123
              </button>
              <button className="bg-blue4  p-8 text-2xl rounded btn-hover items-center justify-center flex">
                <FaHouse />
              </button>
              <button className="bg-blue4 p-8 text-2xl  rounded btn-hover items-center justify-center flex">
                <FaDollarSign />
              </button>
              <button className="bg-blue4  p-8 text-2xl rounded btn-hover items-center justify-center flex">
                <FaTemperatureThreeQuarters />
              </button>
              <button className="bg-blue4  p-8 text-2xl rounded btn-hover items-center justify-center flex">
                <FiBarChart />
              </button>
              <button className="bg-blue4 p-8 text-2xl rounded btn-hover items-center justify-center flex">
                <FiActivity />
              </button>
              <button className="bg-blue4  p-8 text-2xl rounded btn-hover items-center justify-center flex">
                <FiWatch />
              </button>
              <button className="bg-blue4 p-8  text-2xl rounded btn-hover items-center justify-center flex">
                <FiActivity />
              </button>
            </div>
          </div>
          <div className="text-center mt-5 colo4 font-semibold ">
            Need some Help? <br />
            Check out my
            <a href="http://" target="_blank" rel="noopener noreferrer">
              GITHUB...
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
