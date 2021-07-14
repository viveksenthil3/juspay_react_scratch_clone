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
