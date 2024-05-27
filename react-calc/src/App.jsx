//import { useState } from 'react'

import "./App.css";
import Calc from "./components/calc/Calc";
import Recent from "./components/recent/Recent";
import Results from "./components/results/results";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="items-center justify-center h-100 flex py-8">
        <div className="w-4/5 grid md:grid-flow-col grid-flow-row gap-0 h-full text-white">
          <div className="left-side md:col-span-1 col-span-4 bg-blue2 rounded p-5">
            <Sidebar />
          </div>
          <div className="right-side col-span-4 flex items-center justify-center bg-blue1 rounded">
            <div className="cont">
              <Results />
              <Calc />
              <Recent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
