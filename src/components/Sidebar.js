import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import BlockComponent from "./BlockComponent";
import groups, { setBlocksMenu } from "../block_groups";
import { useData } from "../context/DataContext";
import _ from 'lodash'

export default function Sidebar({state}) {
  const Data = useData();
  let _blocksMenu={}

  useEffect(()=>{
    // state.setBlocksMenu(_.cloneDeep(blocksMenu));
    setBlocksMenu(Data.currentSprit, _blocksMenu);
  }, [Data.currentSprit])
  
  return (
    <div id='sidebar' className="w-70 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      {/* <button onClick={()=>{Data.changeSprit('vivek')}}>click me</button> */}
      {/* <div className="font-bold"> {"Events"} </div>
      <Block blockClasses='bg-yellow-500'/>
      <Block blockClasses='bg-blue-500'/>
      <div draggable className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Move 10 steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div> */}

      {groups.map((group, index)=>
      <div key={group.groupName}>
        <div className="font-bold"> {group.groupName} </div>
        {group.blocks.map((block, index)=>{
          _blocksMenu[block.id]=block;
        return <BlockComponent key={index} isFromMenu block={block} />})}
      </div>
      )}
    </div>
  )
}
