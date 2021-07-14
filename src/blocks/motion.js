import { Block } from ".";
import {Motion} from "../block_groups/motion";
import Icon from "../components/Icon";
import Input from "../components/Input";
import $ from 'jquery'
import { getRotationDegrees } from "../util";

// move n steps block
const moveSteps = new Block([
    {
        type: 'string',
        text: 'move'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar:'steps'
        }
    },
    {
        type: 'string',
        text: 'steps'
    }
], true, true, Motion.properties, {steps: 0}) 

moveSteps.execute = (state, sprit)=>{
    if(state.steps==0)
        return ;

    // console.log('moveSteps ', state.steps);
    // $(`#${sprit}`).
    const spritElem = $(sprit.ref.current)
    const deg = getRotationDegrees(spritElem)
    
    let top =Math.round(Math.sin(deg))*20+parseInt(state.steps);
    let left =Math.round(Math.cos(deg))*20+parseInt(state.steps);

    // console.log(deg, top, left)

    spritElem.animate({
        top: `+=${top}px`,
        left: `+=${left}px`
    }, 500)

}

Motion.blocks.push(moveSteps)


//turn clockwise block
const turnClockwise = new Block([
    {
        type: 'string',
        text: 'turn'
    },
    {
        type: 'component',
       Component: Icon,
        props: {
            name: "redo", size: 15, className: "text-white mx-2"
        }
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar: 'turns'
        }
    },
    {
        type: 'string',
        text: 'degrees'
    }
], true, true, Motion.properties, {turns: 0}) 

turnClockwise.execute = (state, sprit)=>{
    // console.log('turnClockwise', state.turns);
    
    const spritElem = $(sprit.ref.current)
    let deg = (getRotationDegrees(spritElem)+parseInt(state.turns));
    deg = deg>180 ? deg-360 : deg;
    spritElem.attr('deg', deg)
    spritElem.animate(
        { deg: deg },
        {
          duration: 500,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });}})
}

Motion.blocks.push(turnClockwise)



//turn anti clockwise block
const turnAntiClockwise = new Block([
    {
        type: 'string',
        text: 'turn'
    },
    {
        type: 'component',
       Component: Icon,
        props: {
            name: "undo", size: 15, className: "text-white mx-2"
        }
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar: 'turns'
        }
    },
    {
        type: 'string',
        text: 'degrees'
    }
], true, true, Motion.properties, {turns: 0}) 

turnAntiClockwise.execute = (state, sprit)=>{
    // console.log('turnClockwise', state.turns);
    
    const spritElem = $(sprit.ref.current)
    let deg = (getRotationDegrees(spritElem)-parseInt(state.turns));
    deg = deg<0 ? deg+360 : deg;

    spritElem.attr('deg', deg)
    spritElem.animate(
        { deg: deg },
        {
          duration: 500,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });}})
}

Motion.blocks.push(turnAntiClockwise)



// move to x y
const moveToXY = new Block([
    {
        type: 'string',
        text: 'go to x:'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar: 'x'
        }
    },
    {
        type: 'string',
        text: 'y:'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar: 'y'
        }
    }
], true, true, Motion.properties, {x: 0, y:0}) 

moveToXY.execute = (state, sprit)=>{
    // if(state.steps==0)
    //     return ;

    // console.log('moveSteps ', state.steps);
    // $(`#${sprit}`).
    const spritElem = $(sprit.ref.current)    

    spritElem.animate({
        top: `${state.y}px`,
        left: `${state.x}px`
    }, 500)

}

Motion.blocks.push(moveToXY)



// glide to x y for s secs
const glideTtoXYForSSecs = new Block([
    {
        type: 'string',
        text: 'glide'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar: 'secs'
        }
    },
    {
        type: 'string',
        text: 'secs to x:'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar: 'x'
        }
    },
    {
        type: 'string',
        text: 'y:'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar: 'y'
        }
    }
], true, true, Motion.properties, {x: 0, y:0, secs: 0}) 

glideTtoXYForSSecs.execute = (state, sprit)=>{
    // if(state.steps==0)
    //     return ;

    // console.log('moveSteps ', state.steps);
    // $(`#${sprit}`).
    const spritElem = $(sprit.ref.current)    

    spritElem.animate({
        top: `${state.y}px`,
        left: `${state.x}px`
    }, 1000*parseInt(state.secs))

}

Motion.blocks.push(glideTtoXYForSSecs)


//point in x direction
const pointInX = new Block([
    {
        type: 'string',
        text: 'point in direction'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar: 'turns'
        }
    }
], true, true, Motion.properties, {turns: 0}) 

pointInX.execute = (state, sprit)=>{
    // console.log('turnClockwise', state.turns);
    
    const spritElem = $(sprit.ref.current)
    let deg = (getRotationDegrees(spritElem)+parseInt(state.turns));
    deg = deg>180 ? deg-360 : deg;
    spritElem.attr('deg', deg)
    spritElem.animate(
        { deg: deg },
        {
          duration: 500,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });}})
}

Motion.blocks.push(pointInX)


// change x by
const changeXBy = new Block([
    {
        type: 'string',
        text: 'change x by'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar:'x'
        }
    }
], true, true, Motion.properties, {x: 0}) 

changeXBy.execute = (state, sprit)=>{
    // if(state.steps==0)
    //     return ;

    // console.log('moveSteps ', state.steps);
    // $(`#${sprit}`).
    const spritElem = $(sprit.ref.current)    

    spritElem.animate({        
        left: `+=${state.x}px`
    }, 500)

}

Motion.blocks.push(changeXBy)


// change x to
const changeXTo = new Block([
    {
        type: 'string',
        text: 'change x to'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar:'x'
        }
    }
], true, true, Motion.properties, {x: 0}) 

changeXTo.execute = (state, sprit)=>{
    // if(state.steps==0)
    //     return ;

    // console.log('moveSteps ', state.steps);
    // $(`#${sprit}`).
    const spritElem = $(sprit.ref.current)    

    spritElem.animate({        
        left: `${state.x}px`
    }, 500)

}

Motion.blocks.push(changeXTo)


// change y by
const changeYBy = new Block([
    {
        type: 'string',
        text: 'change y by'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar:'y'
        }
    }
], true, true, Motion.properties, {x: 0}) 

changeYBy.execute = (state, sprit)=>{
    // if(state.steps==0)
    //     return ;

    // console.log('moveSteps ', state.steps);
    // $(`#${sprit}`).
    const spritElem = $(sprit.ref.current)    

    spritElem.animate({        
        top: `+=${state.y}px`
    }, 500)

}

Motion.blocks.push(changeYBy)


// change y to
const changeYTo = new Block([
    {
        type: 'string',
        text: 'change y to'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1", stateVar:'y'
        }
    }
], true, true, Motion.properties, {x: 0}) 

changeYTo.execute = (state, sprit)=>{
    // if(state.steps==0)
    //     return ;

    // console.log('moveSteps ', state.steps);
    // $(`#${sprit}`).
    const spritElem = $(sprit.ref.current)    

    spritElem.animate({        
        top: `${state.y}px`
    }, 500)

}

Motion.blocks.push(changeYTo)


// [
//     {
//         type: 'string',
//         text: 'if on edge, bounce'
//     }
// ]


// const t = turnClockwise.clone()
// console.log(turnClockwise.getId())
// console.log(t.getId())

export default Motion;