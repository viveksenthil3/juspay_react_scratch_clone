import { Block } from ".";
import {Looks} from "../block_groups/looks";
import Icon from "../components/Icon";
import Input from "../components/Input";
import $ from 'jquery'
import { getRotationDegrees, sleep } from "../util";



// say message for s secs
const sayMssageForSSecs = new Block([
    {
        type: 'string',
        text: 'say'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "text", size: 15, className: "text-black mx-2 rounded-full w-20 max-w-min px-1", stateVar: 'message'
        }
    },
    {
        type: 'string',
        text: 'for'
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
], true, true, Looks.properties, {secs: 0, message: 'Message'}) 

sayMssageForSSecs.execute = (state, sprit)=>{
    $('.sayMessage').html(state.message);
    $('.sayMessage').addClass('sayMessageVisible')
    setTimeout(() => {
        $('.sayMessage').removeClass('sayMessageVisible')
    }, 1000*parseInt(state.secs));
    

}

Looks.blocks.push(sayMssageForSSecs)


// say message 
const sayMssage = new Block([
    {
        type: 'string',
        text: 'say'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "text", size: 15, className: "text-black mx-2 rounded-full w-20 max-w-min px-1", stateVar: 'message'
        }
    }
], true, true, Looks.properties, {message: 'Message'}) 

sayMssage.execute = (state, sprit)=>{
    $('.sayMessage').html(state.message);
    $('.sayMessage').addClass('sayMessageVisible')
        

}

Looks.blocks.push(sayMssage)


// think message for s secs
const thinkMssageForSSecs = new Block([
    {
        type: 'string',
        text: 'think'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "text", size: 15, className: "text-black mx-2 rounded-full w-20 max-w-min px-1", stateVar: 'message'
        }
    },
    {
        type: 'string',
        text: 'for'
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
], true, true, Looks.properties, {secs: 0, message: 'Message'}) 

thinkMssageForSSecs.execute = (state, sprit)=>{
    $('.sayMessage').html(state.message);
    $('.sayMessage').addClass('sayMessageVisible')
    setTimeout(() => {
        $('.sayMessage').removeClass('sayMessageVisible')
    }, 1000*parseInt(state.secs));
    

}

Looks.blocks.push(thinkMssageForSSecs)


// think message 
const thinkMssage = new Block([
    {
        type: 'string',
        text: 'think'
    },
    {
        type: 'component',
       Component: Input,
        props: {
            type: "text", size: 15, className: "text-black mx-2 rounded-full w-20 max-w-min px-1", stateVar: 'message'
        }
    }
], true, true, Looks.properties, {message: 'Message'}) 

thinkMssage.execute = (state, sprit)=>{
    $('.sayMessage').html(state.message);
    $('.sayMessage').addClass('sayMessageVisible')
        

}

Looks.blocks.push(thinkMssage)



export default Looks;