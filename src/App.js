import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DataProvider, useData } from "./context/DataContext";
import _ from "lodash";

export default function App() {
  const Data = useData();
  const [blocksCreated, setBlocksCreatedState]=useState({})
  const [blocksMenu, setBlocksMenuState]=useState({})

  // useEffect(()=>{
  //   changeSprit('sprit1');
  //   // console.log('changed sprit', currentSprit)
  // }, [])


  const changeSprit = (sprit)=>{
      setBlocksCreatedState(state=>({...state, [sprit]:{}}));
      setBlocksMenuState(state=>({...state, [sprit]:{}}));
      Data.setCurrentSprit(sprit);
  }

  const getBlocksMenu=(blockId)=>{
          // if(blockId)
          //     return blocksMenu[currentSprit][blockId];
          console.log(blocksMenu)
          // return {blocksMenu, blocksCreated}
          return blocksMenu[Data.currentSprit];
      }

  const getBlocksCreated=(blockId)=>{
      if(blockId)
          return blocksCreated[Data.currentSprit][blockId];
      return blocksCreated[Data.currentSprit];
  }

  const setBlocksMenu=(block)=>{
    console.log(block)
      if(typeof block ==="object")
          // sessionStorage.setItem('blocksMenu', JSON.stringify(block))
          setBlocksMenuState(state=>({...state, [Data.currentSprit]: _.cloneDeep(block)}));
      else if(block)
          setBlocksMenuState(state=>({...state, [Data.currentSprit]: {...state[Data.currentSprit], [block.id]:block}}));
          
  }


  const setBlocksCreated=(block)=>{
      if(block)
          setBlocksCreatedState(state=>({...state, [Data.currentSprit]: {...state[Data.currentSprit], [block.id]:block}}));
  }

  const state={    
    changeSprit,
    getBlocksMenu,
    getBlocksCreated,
    setBlocksMenu,
    setBlocksCreated
}
  return (
    
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar state={state} /> <MidArea blocksMenu={blocksMenu} state={state} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
    
  );
}
