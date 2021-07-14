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


function BlockComponent({block, isFromMenu, draggingBlock, isBlockRendered, ...rest}) {
    const Data = useData();
    const [state, setState]=useState(block.state);
    const blockRef = useRef('')

    // if(block===undefined || block.getHasTop == undefined || (isBlockRendered && isBlockRendered.current.includes(block.id))){
    //     console.log('it is undefined ', block)
    //     return <></>;
    // }

    // if(!isFromMenu){
    //     isBlockRendered.current.push(block.id)
    //     console.log(isBlockRendered)
    //     console.log(blocksCreated)
    //     console.log($(blockRef.current).attr('childid'))
    // }

    useEffect(()=>{
        // console.log(blockRef.current.style)
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

        Data.draggingRef.current=e.target;
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
        // console.log('entered')
        let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
        // console.log($(Data.draggingRef.current).attr('isfrommenu'))
        // $(elemBelow).hasClass('block-drop') &&
        if($(Data.draggingRef.current).attr('isfrommenu')!=='true' && $(Data.draggingRef.current).children('.block').hasClass('block-hasTop') && !$(e.target).hasClass('block-drop-active'))
            $(e.target).addClass('block-drop-active')
    }

    const onDragLeave=(e)=>{
        // console.log('left@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        $(e.target).removeClass('block-drop-active')
    }

    const onDragOver=(e)=>{
        e.preventDefault();

        
        // console.log($(Data.draggingRef.current))
        // && $(Data.draggingRef.current).hasClass('block-hasTop')
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

        if(data.dragType=='move'){
            parent.setChild(child)
            parentElem.attr('childid', data.blockId)
        }
        
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
        if(isFromMenu || ['INPUT', 'SELECT'].includes(e.target.tagName))
            return;

        // console.log(e.target.tagName==)
        block.execute({...state, blockId: block.id}, {id:Data.currentSprit, ref:Data.spritRef});
        let parent = $(blockRef.current);
        // parent.css({
        //     backgroundColor: 'red'
        // })

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
            isfrommenu={''+isFromMenu}
            onDragStart={(e)=>onDragStart(e)}
            draggable
            onClick={onClick}            
            onMouseDown={onMouseDown}
            style={block.style || {}}
            className={`dragableBox ${isFromMenu ? 'my-6' : 'my-4'}`}
            blockid={block.id}
            >
            <div blockid={block.id} className={`block-${block.getHasTop() ? 'has' : 'notHas'}Top block-${block.getHasBottom() ? 'has' : 'notHas'}Bottom block flex flex-row whitespace-nowrap  text-white px-2 py-2  max-w-min text-sm rounded cursor-pointe relative ${block.groupProperties.blockClasses} ${block.className || ''}`}>
                {block.parts.map((part, index)=>part.type==='string' ? <span key={index}>{part.text}</span> : <part.Component  key={index} state={state} setState={setState} {...part.props}/>)}
            </div>

            {block.getHasBottom() && <div
                blockid={block.id}
                onMouseOver={(e)=>{console.log(e.buttons)}}
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`w-full bg-gree-100 relative ${!isFromMenu && 'block-drop h-7'}`}
            >
                {/* {block.child ? <BlockComponent key={0} isBlockRendered={isBlockRendered} block={getBlocksCreated(Data.currentSprit, block.child.id)} /> : null} */}
            </div>}
        </div>
    )
}

export default BlockComponent
