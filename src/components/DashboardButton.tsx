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
        document.getElementById(props.id1)?.style.setProperty('display', isPressed ?  "flex" : "none");
        document.getElementById(props.id2)?.style.setProperty('border-bottom-right-radius', isPressed ?  "0rem" : "0.5rem");
    }

    const style = "hover:bg-button-selected hover:duration-300 duration-100 p-3 bg-button -mt-2"

    return (
        <div className='select-none '>
            <button onClick={shoot} id={props.id2} className="drop-shadow-lg rounded-r-lg w-full h-10 bg-button text-white hover:bg-button-selected hover:duration-200 duration-100 mt-2" >
                <p className="text-left -mt-3 ml-2 absolute">{props.text}</p>

            </button>
            <ul id={props.id1} className='bg-20 mt-1.3 hidden flex-col'>
                <li className="list-item w-full ">
                    <div className={style}>
                        <p className="bg-status-online w-16 rounded-lg text-sm px-2 font-medium leading-6 whitespace-nowrap text-center">Online</p>
                        <p className='ml-2 text-white'>Minecraft Server-1</p>
                    </div>
                </li>
                <li className="list-item w-full ">
                    <div className={style}>
                        <p className="bg-status-online w-16 rounded-lg text-sm px-2 font-medium leading-6 whitespace-nowrap text-center">Online</p>
                        <p className='ml-2 text-white'>Minecraft Server-2</p>
                    </div>
                </li>  
                <li className="list-item w-full ">
                   <div className={style}>
                        <p className="bg-status-offline w-16 rounded-lg text-sm px-2 font-medium leading-6 whitespace-nowrap text-center">Offline</p>
                        <p className='ml-2 text-white'>Minecraft Server-3</p>
                    </div>
                </li>  
            </ul>
        </div>
    )
}

export default DashboardButton