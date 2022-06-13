import React from 'react';

interface ButtonProps {
    text: string;
    id1: string;
    id2: string;
}

function DashboardButton(props: ButtonProps) {
    let isPressed = false;

    function shoot() {
        isPressed = isPressed ? false : true;
        console.log(isPressed)
        document.getElementById(props.id1)?.style.setProperty('display', isPressed ?  "contents" : "none");
        document.getElementById(props.id2)?.style.setProperty('border-bottom-right-radius', isPressed ?  "0rem" : "0.5rem");
    }

    const liStyle = "hover:bg-button-selected hover:duration-300 duration-500 p-1 py-2 bg-button flex transition "

    return (
        <div className='select-none'>
            <button onClick={shoot} id={props.id2} className="drop-shadow-lg rounded-r-lg w-full h-10 bg-button text-white hover:bg-button-selected hover:duration-200 duration-100 mt-2" >
                <p className="text-left -mt-3 ml-2 absolute">{props.text}</p>

            </button>
            <ul id={props.id1} className='grid-cols-1 bg-20 mt-1.3 hidden fixed '>
                <li className={liStyle}>
                    <p className="bg-status-online w-16 rounded-lg text-sm px-2 font-medium leading-6 whitespace-nowrap text-center">Online</p>
                    <p className='ml-2 text-white'>Minecraft Server-1</p>
                </li> 
                <li className={liStyle}>
                    <p className="bg-status-offline w-16 rounded-lg text-sm px-2 font-medium leading-6 whitespace-nowrap truncate text-center">Offline</p>
                    <p className='ml-2 text-white'>Minecraft Server-1</p>
                </li> 
            </ul>
        </div>
    )
}

export default DashboardButton