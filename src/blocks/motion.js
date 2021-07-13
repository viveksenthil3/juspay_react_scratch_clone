import { Block } from ".";
import {Motion} from "../block_groups/motion";
import Icon from "../components/Icon";
import Input from "../components/Input";

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
    console.log('moveSteps ', state.steps);
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
    console.log('turnClockwise', state.turns);
}

Motion.blocks.push(turnClockwise)

// const t = turnClockwise.clone()
// console.log(turnClockwise.getId())
// console.log(t.getId())

export default Motion;