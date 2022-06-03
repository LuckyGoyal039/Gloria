import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {Button} from 'react-bootstrap';

function Account(){
    const userNameRef=useRef();
    const emailRef=useRef();
    const {currentUser, update, deleteAccount, forgetPassword}=useAuth();
    const [userName, setUserName]=useState(currentUser.displayName);
    function fun1(){
        try{
            update(userNameRef.current.value);
            console.log(currentUser);
        }catch(e){
            console.log(e);
        }
    }
    function fun2(){
        const message="All the data are permanently deleted\nAre you shure you want to delete account";
        if(window.confirm(message)==true){
            deleteAccount();
        }
    }
    function fun3(){
        forgetPassword(emailRef.current.value);
    }
    useEffect(()=>{
        console.log("call");
    },[setUserName])
    return(
        <>
        <input type="text" placeholder={currentUser.displayName} ref={userNameRef}/>
        {/* <Button onClick={()=>{setUserName(userNameRef.current.value); fun1();}}>change name</Button> */}
        <a onClick={()=>{setUserName(userNameRef.current.value); fun1();}}>change name</a>
        <Link to='/'>Home</Link>
        <button onClick={fun2}><Link to='/'>Delete account</Link></button>
        <div>{userName}</div>
        {/* <div>{currentUser.emailVerified}</div> */}
        <input type="email" ref={emailRef}/>
        <button onClick={fun3}>Forget Password</button>
        </>
    )
}
export default Account;