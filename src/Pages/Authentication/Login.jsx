import "../../css/main.css";
import "./authentication.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context";

export const Login = () => {

    const [userDetails, setUserDetails] = useState({email: "", password: "", rememberMe: false})
    const [error, setError] = useState({isError: false, text: ""})
    const [showPasswordToggle, setShowPasswordToggle] = useState(true)
    const { login, testLogin } = useAuth();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setError({text:"", isError: false})
        }, 3000);

        return () => clearTimeout(timeoutId);
    },[error])

    const submitHandler = () => {

        if(!userDetails.email || !userDetails.password){
            setError({isError: true, text: "Please enter all the fields"})
        }
        else if(!userDetails.email.includes("@")){
            setError({isError: true, text: "Invalid email ID"})
        }
        else{
            login(userDetails);
            setUserDetails({email: "", password: "", rememberMe: false});
        }

    }

    return(
        <main className="main-login flex flex-justify-center flex-align-center mt-4 mb-4">
        <div className="form-login">
            {error.isError ? <p className="text-alert pdt-1">{error.text}</p> : null}
            <div className="flex flex-column flex-gap-1-5 mt-2 mr-4 mb-2 ml-4">
                <h3>Login</h3>

                <div className="flex flex-column">
                    <label className="text-sm font-semibold" htmlFor="email-id">Email address</label>
                    <input className="form-field" name="email-id" id="email-id" type="email" value={userDetails.email} placeholder="example@easymart.com" onChange={e => setUserDetails({...userDetails, email: e.target.value})} />
                </div>

                <div className="flex flex-column">
                    <label className="text-sm font-semibold" htmlFor="pwd">Password</label>
                    <div className="flex">
                        <input className="form-field pwd-box flex-grow-1 " type={showPasswordToggle ? "password": "text"} name="pwd" id="pwd" value={userDetails.password} placeholder="**********" onChange={e => setUserDetails({...userDetails, password: e.target.value})}/>
                        <button className="btn-password-hide-show btn-transparent" onClick={() => setShowPasswordToggle(!showPasswordToggle)}>
                            <span className="material-icons text-lg">{showPasswordToggle ? "visibility" : "visibility_off"}</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-justify-space-between flex-align-center">  
                    <label className="text-sm font-semibold flex flex-justify-center flex-align-center" htmlFor="terms&conditions">
                    <input className="profile-checkbox" type="checkbox" name="terms&conditions" id="t&c" checked={userDetails.rememberMe} onChange={() => setUserDetails({...userDetails, rememberMe:!userDetails.rememberMe})}/>
                    Remember me
                    </label>
                    <span className="forgot-password text-sm">Forgot your Password?</span>
                </div>
                <button className="btn-form-submit btn-solid btn-medium text-base" onClick={() => submitHandler()}>Login</button>
                <button className="btn-form-submit btn-solid btn-medium text-base" onClick={() => {testLogin()}}>Login with test credentials</button>

                <Link className="signup-login-switch-link text-sm font-semibold flex flex-justify-center flex-align-center" to="/signup">Create New Account <span className="material-icons">navigate_next</span></Link>
            </div>
        </div>
    </main>
    )
}