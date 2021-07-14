import  Motion from "../blocks/motion";
import  Events  from "../blocks/events";

// let currentSprit=''
export let blocksMenu={}
export let blocksCreated={}

export const getBlocksMenu = (currentSprit, blockId)=>{
    // console.log(currentSprit)
    if(blockId)
        return blocksMenu[currentSprit][blockId];
    return blocksMenu[currentSprit];
}

export const setBlocksMenu = (currentSprit, blocks={})=>{
    blocksMenu={...blocksMenu, [currentSprit]:{...blocksMenu[currentSprit], ...blocks}};
}

export const getBlocksCreated = (currentSprit, blockId)=>{
    // console.log(' getBlocksCreated ', currentSprit, blockId)
    if(blockId)
        return blocksCreated[currentSprit][blockId];
    return blocksCreated[currentSprit]
}

export const setBlocksCreated = (currentSprit, block)=>{
    blocksCreated={...blocksCreated, [currentSprit]:{...blocksCreated[currentSprit], [block.id]:block}};
}

const groups = [Events, Motion];

// groups.forEach(group=>group.blocks.forEach(block=>block.execute('vivek')))

export default groups;