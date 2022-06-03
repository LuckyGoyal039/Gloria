import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
// import { confirmPasswordReset } from 'firebase/auth';
import NavBarComp from './NavBarComp';

export default function Signup() {
    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords Must be same")
        }
        try {
            setError("");
            setLoading(true);
            const user=await signup(emailRef.current.value, passwordRef.current.value)
            console.log(user);
            navigate("/");
            userRef.current.value="";
            emailRef.current.value="";
            passwordRef.current.value="";
            passwordConfirmRef.current.value="";
        } catch (e) {
            setError(e);
            passwordRef.current.value="";
            passwordConfirmRef.current.value="";
        }
        setLoading(false);
    }
    return (
        <React.Fragment>
            {/* <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert varient="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter Email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Enter Password" required />
                        </Form.Group>
                        <Form.Group id="password-confirm" className="mb-3">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">SignUp</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/login'>Login</Link>
            </div> */}
            {error && <Alert varient="danger">{error}</Alert>}
            <div className="App">
                <NavBarComp />
                <div className='fill-window'>

                    <div className="background">
                        <div className="my-form">

                            <p id="login-text">Register</p>
                            <form onSubmit={handleSubmit}>
                                <br />
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
                                    <input type="password" class="form__field" name="name" id="name" required ref={passwordRef} />
                                </div>
                                <br/>
                                <div className="input-container">
                                    <label for="name" class="form__label">Confirm Password</label>
                                    <br />
                                    <input type="password" class="form__field" name="name" id="name" required ref={passwordConfirmRef} />
                                </div>
                                <p id="forgot-password">Forgot Password?</p>
                                <div className="button-container">
                                    <input type="submit" value="SignUp" disabled={loading} />
                                </div>
                            </form>
                            <br />
                            <p>Already have an account <Link to='/login'>Sign In</Link></p>
                            {/* <span>
                                <a class="facebook">
                                    F
                                </a>
                                <a class="twitter">
                                    T
                                </a>
                                <a class="googleplus">
                                    G
                                </a>
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}