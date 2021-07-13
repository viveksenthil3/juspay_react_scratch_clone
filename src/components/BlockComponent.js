import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getBlocksMenu, setBlocksMenu } from '../block_groups';
import { useData } from '../context/DataContext';
import Icon from "./Icon";
import $ from 'jquery'

let elem = [
{
    type: 'string',
    text: 'when'
},
{
    type: ' component',
    Component: Icon,
    props: {
        name:"flag",size:15,className:"text-green-600 mx-2"
    }
},
{
    type: 'string',
    text: 'clicked'
}
]


function BlockComponent({block, isFromMenu, draggingBlock, ...rest}) {
    const Data = useData();
    const [state, setState]=useState(block.state);
    const blockRef = useRef('')

    // useEffect(()=>{
    //     console.log(blockRef.current.style)
    // }, [blockRef.current.state])

    // useEffect(()=>{
    //     block.state=state;
    //     setBlocksMenu(block)
    // }, [state])

    const onDragStart =(e) => {
        // elements = elements.map((element)=>{
        //     if(element.type==='component')
        //         element.component = element.Component.name;
        //     return element;
        // })
        // console.log(getBlocksMenu())
        // let style = window.getComputedStyle(e.target);
        // // offset_data = (parseInt(style.getPropertyValue("left"),10) - e.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - e.clientY);

        if(!isFromMenu){
            $(e.target).addClass('dragging')
            // let img = new Image();
            // img.src='https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png';
            // img.style={
            //     display: 'none'
            // }
            // e.dataTransfer.setDragImage(img, 0, 0)
        }
        
        const rect = e.target.getBoundingClientRect()
        
        e.dataTransfer.setData("text", JSON.stringify({
            dragType: isFromMenu ? 'copy' : 'move',
            blockId: block.id,           
            offsetX:e.clientX-rect.left,
            offsetY:e.clientY-rect.top
            
        }))
    }

    

    return (
        <div 
            ref={blockRef}
            onDragStart={(e)=>onDragStart(e)}
            draggable={isFromMenu}
            onClick={(e)=>block.execute(state, Data.currentSprit)}
            style={block.style || {}}
            className={`block-${block.getHasTop() ? 'has' : 'notHas'}Top block-${block.getHasBottom() ? 'has' : 'notHas'}Bottom block flex flex-row whitespace-nowrap text-white px-2 py-2 my-5 max-w-min text-sm rounded cursor-pointer relative ${block.groupProperties.blockClasses} ${block.className || ''}`}
            >
            {block.parts.map((part, index)=>part.type==='string' ? `${part.text}` : <part.Component  key={index} state={state} setState={setState} {...part.props}/>)}
        </div>
    )
}

export default BlockComponent
