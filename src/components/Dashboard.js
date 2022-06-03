import React, { useState } from 'react';
import NavBarComp from './NavBarComp';
import {useAuth} from '../contexts/AuthContext';
import {Link} from 'react-router-dom';
function Dashboard(){
    const {logout}=useAuth();
    const [error, setError]=useState();
    function handleEvent(e){
        e.preventDefault();

        try{
            setError("");
            logout();
        }catch(e){
            setError(e);
        }
    }
    return(

        <React.Fragment>
        <NavBarComp/>
        <button onClick={handleEvent}>logout</button>
        <i className="material-icons">cloud</i>
        <button><Link to='/account'>Account Details</Link></button>
        </React.Fragment>
    )
}

export default Dashboard;