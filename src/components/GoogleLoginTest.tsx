import { useState } from "react";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import config from "../config";

function Test() {
    const gRes = (res: any) => {
        console.log(res)
    }

    const logout = () => {
        console.log('LOGGED OUT')
    }

    return (
        <>
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
        </>
    )
}

export default Test;