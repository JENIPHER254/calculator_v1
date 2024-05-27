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
      <div className="items-center justify-center h-100 flex">
        <div className="w-3/4 p-5 grid grid-flow-col gap-2">
          <div className="left-side col-span-1">
            <Sidebar />
          </div>
          <div className="right-side col-span-4">
            <Results/>
            <Calc/>
            <Recent/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
