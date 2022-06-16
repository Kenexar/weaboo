import {useState} from "react";

fetch('http://127.0.0.1:8000/sql/get/something/[params]')
    .then(res => res.json())
    .then(out => {
        console.log(out)
}).catch(err => console.error(err));

let bcrypt = require('bcryptjs');

async function hashIt(password: string){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    function submitHandler(event: { preventDefault: () => any; }) {
        event.preventDefault()

        console.log(hashIt(name))
        // console.log(coggers)
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-base'>
            <div className='px-8 py-6 mt-4 text-left bg-secondary shadow-lg rounded'>
                <div className='inline flex justify-center'>
                    <img src="/WHITEsvg.svg" alt="Brand logo" />
                </div>

                <form onSubmit={submitHandler}>
                    <div className="mt-4">
                        <div>
                            <label className='block text-amber-50 text-center' htmlFor='username'>Username</label>
                            <input type="text" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} autoFocus
                                   className='w-full px-4 py-2 mt-2 text-amber-50 rounded-md focus:outline-none focus:ring-1 focus:ring-accent duration-200 input-field'/>
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="password" className='block text-amber-50 text-center'>Password</label>
                            <input type="password" placeholder='0x41414141' value={password} onChange={(e) => setPassword(e.target.value)}
                                    className='w-full px-4 py-2 mt-2 text-amber-50 rounded-md focus:outline-none focus:ring-1 focus:ring-accent duration-200 input-field' />
                        </div>
                        <div className='flex items-baseline justify-center'>
                            <button className='px-6 py-2 mt-4 text-amber-50 bg-button rounded-lg hover:bg-button-selected'>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;