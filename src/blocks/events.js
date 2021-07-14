import { Block } from ".";
import {Events} from "../block_groups/events";
import Icon from "../components/Icon";
import Input from "../components/Input";
import $ from 'jquery'

// when start clicked block
const whenStartClicked = new Block([
    {
        type: 'string',
        text: 'when'
    },
    {
        type: 'component',
       Component: Icon,
        props: {
            name: "flag", size: 15, className: "text-green-600 mx-2"
        }
    },
    {
        type: 'string',
        text: 'clicked'
    }
], false, true, Events.properties, {}) 

whenStartClicked.execute = (state, sprit)=>{
    console.log('whenStartClicked ', state);
}

whenStartClicked.init = (state, sprit)=>{
    // console.log(document.getElementById(sprit))
    $('.flag').on('click', function(e){
        // console.log('sprit clicked')
        $('.dragableBox').filter(`[blockid='${state.blockId}']`).trigger('click')
    })
}

Events.blocks.push(whenStartClicked)


// when spirit clicked block
const whenSpiritClicked = new Block([
    {
        type: 'string',
        text: 'when this sprite clicked'
    }
], false, true, Events.properties, {}) 


whenSpiritClicked.execute = (state, sprit)=>{
    console.log('whenSpiritClicked', state);
}

whenSpiritClicked.init = (state, sprit)=>{
    // console.log(document.getElementById(sprit))
    sprit.ref.current.addEventListener('click', function(e){
        // console.log('sprit clicked')
        $('.dragableBox').filter(`[blockid='${state.blockId}']`).trigger('click')
    })
}

Events.blocks.push(whenSpiritClicked)

export default Events;