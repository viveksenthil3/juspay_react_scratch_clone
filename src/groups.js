import Motion from "./blocks/motion";
import Icon from "./components/Icon";
import Input from "./components/Input";

const groups = {
    Events: {
        blockClasses: 'bg-yellow-500',
        blocks: [[
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
        ],
        [
            {
                type: 'string',
                text: 'when this sprite clicked'
            }
        ]]
    },
    Motion: {
        blockClasses: 'bg-blue-500',
        blocks: [[
            {
                type: 'string',
                text: 'move'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            },
            {
                type: 'string',
                text: 'steps'
            }
        ],
        [
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
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            },
            {
                type: 'string',
                text: 'degrees'
            }
        ],
        [
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
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            },
            {
                type: 'string',
                text: 'degrees'
            }
        ],
        [
            {
                type: 'string',
                text: 'go to x:'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
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
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            }
        ],
        [
            {
                type: 'string',
                text: 'glide'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
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
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
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
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            }
        ],
        [
            {
                type: 'string',
                text: 'point in direction'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            }
        ],
        [
            {
                type: 'string',
                text: 'change x by'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            }
        ],
        [
            {
                type: 'string',
                text: 'set x to'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            }
        ],
        [
            {
                type: 'string',
                text: 'change y by'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            }
        ],
        [
            {
                type: 'string',
                text: 'set y to'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            }
        ],
        [
            {
                type: 'string',
                text: 'if on edge, bounce'
            }
        ]]
    },
    Control: {
        blockClasses: 'bg-yellow-400',
        blocks: [[
            {
                type: 'string',
                text: 'wait'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            },
            {
                type: 'string',
                text: 'seconds'
            }
        ],
        [
            {
                type: 'string',
                text: 'wait until'
            }
        ],
        [
            {
                type: 'string',
                text: 'when i start as a clone'
            }
        ],
        [
            {
                type: 'string',
                text: 'delete this clone'
            }
        ]]
    },
    Looks: {
        blockClasses: 'bg-purple-500',
        blocks: [[
            {
                type: 'string',
                text: 'say'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "text", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
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
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            },
            {
                type: 'string',
                text: 'seconds'
            }
        ],
        [
            {
                type: 'string',
                text: 'say'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "text", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            }
        ],
        [
            {
                type: 'string',
                text: 'think'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "text", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
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
                    type: "number", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            },
            {
                type: 'string',
                text: 'seconds'
            }
        ],
        [
            {
                type: 'string',
                text: 'think'
            },
            {
                type: 'component',
               Component: Input,
                props: {
                    type: "text", size: 15, className: "text-black mx-2 rounded-full w-10 max-w-min px-1"
                }
            }
        ]]
    }

}

Motion.blocks.forEach(block=>block.execute('vivek'))
console.log(Motion.blocks)

export default groups;