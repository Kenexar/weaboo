import { useState } from "react";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import config from "../config";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [key, setKey] = useState(`${config.GOOGLE_KEY}`)
    // setKey(`${process.env.GOOGLE_KEY}`);


    function submitHandler(event: { preventDefault: () => any; }) {
        event.preventDefault()
        alert('The name that was entered ' + name)
    }
    const gRes = (res: any) => {
        console.log(res)
    }


    function logout() {
        console.log('LOGGED OUT')
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-base'>
            <div className='px-8 py-6 mt-4 text-left bg-secondary shadow-lg rounded'>
                <div className='inline flex justify-center'>
                    <img src="/brand_t200.webp" alt="Brand logo" />
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
                        <div className='flex items-baseline justify-center border-t mt-4'>
                            <GoogleLogin clientId={config.GOOGLE_KEY}
                                         buttonText="Login"
                                         onSuccess={gRes}
                                         onFailure={gRes}
                                         cookiePolicy={'single_host_origin'} />
                            <GoogleLogout
                                clientId={config.GOOGLE_KEY}
                                buttonText="Logout"
                                onLogoutSuccess={logout}
                            >
                            </GoogleLogout>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;