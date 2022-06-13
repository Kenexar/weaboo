import { useState } from "react";

function Login() {
    const [name, setName] = useState("");

    function submitHandler(event: { preventDefault: () => any; }) {
        event.preventDefault()
        alert('The name that was enterd ' + name)
    }

    return (
        <div>
            <h1>Hello :)</h1>
            <form onSubmit={submitHandler}>
                <label>
                    Username
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
            </form>
        </div>
    )
}

export default Login;