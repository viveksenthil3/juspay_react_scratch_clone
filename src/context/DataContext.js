import React, { useCallback, useEffect, useRef, useState } from 'react'
import _ from 'lodash'

const DataContext = React.createContext({});

export const useData = ()=>{
    return React.useContext(DataContext);
}


export function DataProvider({children, ...props}){

    const [currentSprit, setCurrentSprit]=useState("sprit1")
    const [blocksCreated, setBlocksCreatedState]=useState({})
    const [blocksMenu, setBlocksMenuState]=useState({})
    const spritRef = useRef();

    // useEffect(()=>{
    //     changeSprit('sprit1');
    //     // console.log('changed sprit', currentSprit)
    // }, [])

    // useEffect(()=>{
        
    //     console.log('updated blocksMenu', blocksMenu)
    // })

    const changeSprit = (sprit)=>{
        setCurrentSprit(sprit);
        setBlocksCreatedState(state=>({...state, [sprit]:{}}));
        setBlocksMenuState(state=>({...state, [sprit]:{}}));
    }

    const getBlocksMenu=(blockId)=>{
            // if(blockId)
            //     return blocksMenu[currentSprit][blockId];
            console.log(blocksMenu)
            return {blocksMenu, blocksCreated}
            return blocksMenu[currentSprit];
        }

    const getBlocksCreated=(blockId)=>{
        if(blockId)
            return blocksCreated[currentSprit][blockId];
        return blocksCreated[currentSprit];
    }

    const setBlocksMenu=(block)=>{
        if(typeof block ==="object")
            // sessionStorage.setItem('blocksMenu', JSON.stringify(block))
            setBlocksMenuState(state=>({...state, [currentSprit]: {...state[currentSprit], ..._.cloneDeep(block)}}));
        else if(block)
            setBlocksMenuState(state=>({...state, [currentSprit]: {...state[currentSprit], [block.id]:block}}));
            
    }

    
    const setBlocksCreated=(block)=>{
        if(block)
            setBlocksCreatedState(state=>({...state, [currentSprit]: {...state[currentSprit], [block.id]:block}}));
    }

    const value={
        currentSprit,
        spritRef,
        setCurrentSprit,
        changeSprit,
        getBlocksMenu,
        getBlocksCreated,
        setBlocksMenu,
        setBlocksCreated
    }

    return (
        <DataContext.Provider value={value}>
            {currentSprit!="" && children}
        </DataContext.Provider>
    )
}
