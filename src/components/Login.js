import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link ,useNavigate } from 'react-router-dom';
import NavBarComp from './NavBarComp'
import '../style/LoginDemo.css';
// import {Button} from '@mui/icons-material';
import "../App.css";
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, logInWithGoogle } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            emailRef.current.value="";
            passwordRef.current.value="";
            navigate('/');
        }catch (e) {
            setError("Incorrect email or password");
            passwordRef.current.value="";
        }
        setLoading(false);
    }
    async function googlelogin(e){
        e.preventDefault();

        try{
            const result=await logInWithGoogle();
            console.log(result);
        }catch(error){
            console.log(error);
        }
    }
    return (
        <React.Fragment>
                {error && <Alert varient="danger">{error}</Alert>}
            <div className="App">
                <NavBarComp />
                <div className='fill-window'>

                    <div className="background">
                        <div className="my-form">

                            <p id="login-text">Sign In</p>
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <label for="name" class="form__label">
                                        Email
                                    </label>
                                    <br />
                                    <input type="input" class="form__field" name="name" id="name" required ref={emailRef} />
                                </div>
                                <br />
                                <div className="input-container">
                                    <label for="name" class="form__label">Password</label>
                                    <br />
                                    <input type="password" class="form__field" name="name" id="name" required ref={passwordRef}/>
                                </div>
                                <p id="forgot-password">Forgot Password?</p>
                                <div className="button-container">
                                    <input type="submit" value="Login" disabled={loading}/>
                                </div>
                            </form>
                            <br />
                            <p>Continue With...</p>
                            <span style={{display:"block"}}>
                                {/* <a href="javascript:void(0)" class="facebook">
                                    F
                                </a>
                                <a href="javascript:void(0)" class="twitter">
                                    T
                                </a> */}
                                <button onClick={googlelogin}>G</button>
                                <button onClick={googlelogin}>F</button>
                                <button onClick={googlelogin}>Git</button>
                                {/* // <Button variant="contained">Hello World</Button> */}
                            </span>
                            <br/>
                            <p>Create a new Account? <Link to='/signup'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}