import { useState } from "react";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function submitHandler(event: { preventDefault: () => any; }) {
        event.preventDefault()
        alert('The name that was entered ' + name)
    }

    return (
        <div className='w-full max-w-xs bg-accent'>
            <h1 className='title'>Kenexar</h1>
            <form onSubmit={submitHandler} className='bg-secondary rounded px-8 pt-6 pb-8 mb-4'>
                <label htmlFor='username'>Username</label>
                <input type="text" name='username' value={name} onChange={(e) => setName(e.target.value)}/>

                <label htmlFor='username'>Password</label>
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </form>
        </div>
    )
}

export default Login;