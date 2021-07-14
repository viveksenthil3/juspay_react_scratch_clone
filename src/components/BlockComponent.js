import React, { useCallback, useEffect, useRef, useState } from 'react'
import { blocksCreated, blocksMenu, getBlocksCreated, getBlocksMenu, setBlocksCreated, setBlocksMenu } from '../block_groups';
import { useData } from '../context/DataContext';
import Icon from "./Icon";
import $ from 'jquery'
import { v4 as uuidv4 } from 'uuid';

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

    useEffect(()=>{
        console.log(blockRef.current.style)
    }, [blockRef.current.state])

    useEffect(()=>{
        if(!isFromMenu){
            // console.log('init in');
            block.init({...state, blockId: block.id}, {id:Data.currentSprit, ref:Data.spritRef})
        }
    }, [])

    // useEffect(()=>{
    //     block.state=state;
    //     if(isFromMenu)
    //         setBlocksMenu(Data.currentSprit, block)
    //     else
    //         setBlocksCreated(Data.currentSprit, block)
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
            let img = new Image();
            img.src='https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png';
            img.style={
                display: 'none'
            }
            e.dataTransfer.setDragImage(img, 0, 0)
        }
        
        const rect = e.target.getBoundingClientRect()
        
        e.dataTransfer.setData("text", JSON.stringify({
            dragType: isFromMenu ? 'copy' : 'move',
            blockId: isFromMenu ? uuidv4() : block.id,   
            origId: block.id,        
            offsetX:e.clientX-rect.left,
            offsetY:e.clientY-rect.top
            
        }))
    }

    const onMouseDown = (e)=>{
        // console.log(e.target.tagName);
        // if($(e.target).hasClass('.dragableBox')){
        //     $(e.target).addClass('dragging');
        // }
        // else
        //     $(e.target).closest('.dragableBox').addClass('dragging');
    }

    const onDragEnter=(e)=>{
        console.log('entered')
    }

    const onDragLeave=(e)=>{
        console.log('left@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        $('.block-drop').removeClass('block-drop-active')
    }

    const onDragOver=(e)=>{
        e.preventDefault();

        let elemBelow = document.elementFromPoint(e.clientX, e.clientY-10);
        if($(elemBelow).hasClass('block-drop')  && !$(elemBelow).hasClass('block-drop-active'))
            $(elemBelow).addClass('block-drop-active')
        console.log($(e.target))
        // && $(e.target).hasClass('block-hasTop')
    }

    const onDrop=(e)=>{
        $('.dragging').removeClass('dragging')
        const data = JSON.parse(e.dataTransfer.getData('text'))

        // console.log(data)
        // console.log($('.dragableBox').filter(`[blockid='${data.blockId}']`).attr('blockid'))

        const dragableBox = $('.dragableBox').filter(`[blockid='${data.blockId}']`);
        const blockDrop = $('.block-drop-active').first()
        const parentElem = blockDrop.closest('.dragableBox')
        const parent = getBlocksCreated(Data.currentSprit, parentElem.attr('blockid'))
        const child = getBlocksCreated(Data.currentSprit, dragableBox.attr('blockid'))
        
        dragableBox.css({
            top:0,
            left:0,
            margin: 0
        })

        parent.setChild(child)
        parentElem.attr('childid', data.blockId)
        
        setBlocksCreated(Data.currentSprit, parent)
        // console.log('hivevveev', typeof parent)
        // const temp = getBlocksCreated(Data.currentSprit, parent.id)
        // console.log(temp)
        // console.log(temp.child)
        // console.log(blocksMenu, blocksCreated)
        // temp.execute(state, Data.currentSprit)

        blockDrop.append(dragableBox);
        $('.block-drop-active').removeClass('block-drop-active')
    }

    const onClick = function(e){
        if(isFromMenu)
            return;

        block.execute({...state, blockId: block.id}, {id:Data.currentSprit, ref:Data.spritRef});
        let parent = $(blockRef.current);
        parent.css({
            backgroundColor: 'red'
        })

        // console.log('parent' ,parent)

        if(!parent.hasClass('dragableBox')){
            // console.log('in')
            parent = parent.filter('div').filter(`[blockid]`)
        }
        // console.log(parent, parent.attr('blockid'), parent.attr('childid'))

        let child = $('.dragableBox').filter(`[blockid='${parent.attr('childid')}']`);
        // console.log(child)
        child.trigger('click')
    }
    

    return (
        <div 
            ref={blockRef}
            onDragStart={(e)=>onDragStart(e)}
            draggable
            onClick={onClick}            
            onMouseDown={onMouseDown}
            style={block.style || {}}
            className={`dragableBox my-4`}
            blockid={block.id}
            >
            <div blockid={block.id} className={`block-${block.getHasTop() ? 'has' : 'notHas'}Top block-${block.getHasBottom() ? 'has' : 'notHas'}Bottom block flex flex-row whitespace-nowrap  text-white px-2 py-2  max-w-min text-sm  cursor-pointe relative ${block.groupProperties.blockClasses} ${block.className || ''}`}>
                {block.parts.map((part, index)=>part.type==='string' ? <span key={index}>{part.text}</span> : <part.Component  key={index} state={state} setState={setState} {...part.props}/>)}
            </div>

            <div
                blockid={block.id}
                onMouseOver={(e)=>{console.log(e.buttons)}}
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`h-7 w-full bg-green-100 relative ${!isFromMenu && 'block-drop'}`}
            >

            </div>
        </div>
    )
}

export default BlockComponent
