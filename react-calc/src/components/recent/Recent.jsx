import React from "react";
import { useSelector } from "react-redux";
const Recent = ()=>{
    const recent1 = useSelector((state)=>state.recent1);
    const recent2 = useSelector((state)=>state.recent2);
    return<>
       <div className="pt-3">
           <div className="title font-semibold text-center">
            Recent Calculations
           </div>
           <div className="title font-semibold fade1 text-center ">
            {recent1 === 0 ?"No Equation":recent1}
           </div>
           <div className="title font-semibold fade2 text-center">
           {recent2 === 0 ?"No Equation":recent2}
           </div>
       </div>
    </>
}
export default Recent;