import { v4 as uuidv4 } from 'uuid';
import { blocksCreated, blocksMenu, getBlocksCreated } from '../block_groups';

export class Block{
    constructor(parts, hasTop, hasBottom, groupProperties, state){
        this.id=uuidv4()
        this.parts=parts;
        this.hasTop=hasTop;
        this.hasBottom=hasBottom;
        this.groupProperties=groupProperties;
        this.child=null
        this.state={...state}
    }

    init(state, sprit){
        // add event listeners
        console.log('init')
    }


    clone(){
        // const copy = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        // copy.id = uuidv4();
        let copy = new Block(this.parts, this.hasTop, this.hasBottom, this.groupProperties, this.state);
        copy.child=this.child;
        copy.execute=this.execute
        copy.init=this.init
        return copy;
    }

    next(sprit){
        const child = getBlocksCreated(sprit, this.id)
        // console.log('next', child, sprit, this.id, blocksCreated, blocksMenu)
        if(child)
            child.execute()
    }

    getChild(){
        return this.child;
    }

    setChild(child){
        // console.log('child ', child)
        this.child=child;
    }

    getId(){
        return this.id;
    }

    getParts(){
        return this.parts;
    }

    getGroupProperties(){
        return this.groupProperties;
    }

    getHasTop(){
        return this.hasTop;
    }

    getHasBottom(){
        return this.hasBottom;
    }

    execute(state, sprit){
        console.log('executed');
        this.next()
    }
}