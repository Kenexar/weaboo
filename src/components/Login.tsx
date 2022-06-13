import { useState } from "react";


function Login() {
    const [name, setName] = useState("");

    function submitHandler(event: { preventDefault: () => any; }) {
        event.preventDefault()
        alert('The name that was entered ' + name)
    }

    return (
        <div>
            <h1>Hello :)</h1>
            <h2 className="text-center text-3xl italic md:not-italic lg:text-red-500 sm:text-green-700">Test</h2>
            <form onSubmit={submitHandler}>
                <label>
                    Username
                        <input className="default:" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
            </form>
        </div>
    )
}

export default Login;