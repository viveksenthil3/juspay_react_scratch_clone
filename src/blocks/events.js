import { Block } from ".";
import {Events} from "../block_groups/events";
import Icon from "../components/Icon";
import Input from "../components/Input";

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

whenStartClicked.execute = (data)=>{
    console.log('whenStartClicked ', data);
}

Events.blocks.push(whenStartClicked)


// when spirit clicked block
const whenSpiritClicked = new Block([
    {
        type: 'string',
        text: 'when this sprite clicked'
    }
], false, true, Events.properties, {}) 

whenSpiritClicked.execute = (data)=>{
    console.log('whenSpiritClicked', data);
}

Events.blocks.push(whenSpiritClicked)

export default Events;