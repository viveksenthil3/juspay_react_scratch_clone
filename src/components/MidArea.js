import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { blocksMenu, getBlocksCreated, getBlocksMenu, setBlocksCreated } from "../block_groups";
import { useData } from "../context/DataContext";
import $ from 'jquery'
import BlockComponent from "./BlockComponent";
import Icon from "./Icon";
import Input from "./Input";

// const getComponent = (componentName)=>{
//   switch (componentName) {
//     case 'Icon':
//       return Icon
//       break;

//     case 'Input':
//       return Input
//       break;
  
//     default:
//       return <div></div>
//       break;
//   }
// }

export default function MidArea({state}) {
  const Data = useData();
  const [blocks, setBlocks] = useState([])
  const draggingBlock = useRef()
  let lastX,lastY, maxX, maxY, minX, minY;

  const onDrop = (e) => {
    

    $('.dragging').removeClass('dragging')
    const data = JSON.parse(e.dataTransfer.getData('text'))
    
    if(data.dragType=='copy'){
      
      let block = getBlocksMenu(Data.currentSprit, data.blockId)
      block = block.clone();

      // const rect = e.target.getBoundingClientRect()
      
      block.style={
        top: e.clientY-data.offsetY-12,
        left: e.clientX-data.offsetX+25,
        position: 'absolute'
      }

      setBlocksCreated(Data.currentSprit, block);
      
      setBlocks(blocks=>([...blocks, block.id]))
    }
        
  }

  useEffect(()=>{
    // const midArea = document.getElementById('midArea').getBoundingClientRect()
    // maxX=midArea.right;
    // maxY=midArea.bottom;
    // minY=midArea.top;

    // const sidebar = document.getElementById('sidebar').getBoundingClientRect()
    // minX=sidebar.left;
  }, [])

  // useEffect(()=>{
  //   console.log(Data.currentSprit);
  // }, [Data.currentSprit])

  const onDragEnter = (e) => {
    
  }

  const onDragOver = (e)=>{
    e.preventDefault();   
    
  }

  
  
    
  function moved(event) {
    // console.log('in')
    
      var distX = event.clientX - lastX;
      var distY = event.clientY - lastY;

      
      var offset = $('.dragging').offset()

      if(!offset){
        $(event.target).off("mousemove", moved);
        return
      }
      
      var targetX = offset.left + distX+0;
      var targetY = offset.top + distY-20;

      // console.log(maxX)
      // console.log(Math.min(maxX, Math.max(minX, targetX)), Math.min(maxY, Math.max(minY, targetY)) )
      
      $('.dragging').css({
        left: Math.min(maxX, Math.max(minX, targetX)) + "px",
        top: Math.min(maxY, Math.max(minY, targetY)) + "px"
      })
      
      
      lastX = event.clientX;
      lastY = event.clientY;
  }

  const onMouseDown= (event)=>{
    $(event.target).addClass('dragging')
    // console.log('hi 1')
    
    //   console.log('hi 2')
      lastX = event.clientX;
      lastY = event.clientY;

      const midArea = document.getElementById('midArea').getBoundingClientRect()
      // console.log(midArea)
      maxX=midArea.right-midArea.left;
      maxY=midArea.bottom;
      minY=midArea.top;

      const sidebar = document.getElementById('sidebar').getBoundingClientRect()
      minX=sidebar.left;


      $(event.target).on("mousemove", moved);
      // event.preventDefault(); // Prevent selection
    }

  const onMouseUp = (event)=>{
    $('.dragging').removeClass('dragging')
    $(event.target).off("mousemove", moved);
  }

  return (
  <div
   id="midArea"
   className="flex-1 h-full overflow-auto"
   onDrop={onDrop}
   onDragOver={onDragOver}
   onDragEnter={onDragEnter}
   onMouseDown={onMouseDown}
   onMouseUp={onMouseUp}
   >
     {/* <div id="midArea"></div> */}
    {/* {Object.entries(blocks).map((id, block)=><BlockComponent key={id} block={block} />)} */}
    {blocks.map((blockId, index)=><BlockComponent key={index} block={getBlocksCreated(Data.currentSprit, blockId)} />)}
  </div>)
}
