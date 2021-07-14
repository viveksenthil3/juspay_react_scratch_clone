import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DataProvider, useData } from "./context/DataContext";
import _ from "lodash";

export default function App() {
  const Data = useData();
  const [isDemoVisible, setIsDemoVisible]=useState(true)
  

  
  return (
    
    <div className="bg-blue-100 pt-6 font-sans ">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar  /> <MidArea  />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
      {isDemoVisible && <div onClick={()=>{setIsDemoVisible(false)}} className="bg-gray-500 z-50 bg-opacity-50 w-screen top-0 left-0 h-screen flex justify-center items-center fixed">
        <h1 className="absolute text-shadow text-6xl font-bold top-10 z-50">Project Demo</h1>
        <div className="bg-white  ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fWz1MHR93So" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>}
    </div>
    
  );
}
// text-shadow: 5px 5px 30px black;
