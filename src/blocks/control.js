import { Block } from ".";
import {Motion} from "../block_groups/motion";
import Icon from "../components/Icon";
import Input from "../components/Input";
import $ from 'jquery'
import { getRotationDegrees, sleep } from "../util";
import { Control } from "../block_groups/control";


// wait s secs
const waitSSecs = new Block([
    {
        type: 'string',
        text: 'wait'
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
        text: 'seconds'
    }
], true, true, Control.properties, {secs: 0}) 

waitSSecs.execute = (state, sprit)=>{
    // console.log()
    sleep(1000*state.secs);

}

Control.blocks.push(waitSSecs)


// delete clone
const deleteClone = new Block([
    {
        type: 'string',
        text: 'delete this clone'
    }
], true, false, Control.properties, {secs: 0}) 

deleteClone.execute = (state, sprit)=>{
    // console.log()
    $(sprit.ref.current).hide()

}

Control.blocks.push(deleteClone)

export default Control;