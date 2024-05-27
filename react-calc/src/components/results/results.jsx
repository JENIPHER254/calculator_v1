import React from "react";
import { useSelector } from "react-redux";
const Results = () => {
  const test = useSelector((state) => state.result);
  return (
    <>
      <div className="justify-end items-end flex my-5 mx-1">
        <h1 className="text-4xl">{test}</h1>
      </div>
    </>
  );
};
export default Results;
