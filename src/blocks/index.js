import { v4 as uuidv4 } from 'uuid';

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


    clone(){
        const copy = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        copy.id = uuidv4();
        return copy;
    }

    next(){
        if(this.child)
            this.child.execute()
    }

    getChild(){
        return this.child;
    }

    setChild(child){
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
    }
}