import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../components/Firebase";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, deleteUser, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, signInWithRedirect,getRedirectResult} from 'firebase/auth';

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const authorization = getAuth();

    //function for create user account
    async function signup(email, password) {
        // const authorization=getAuth();
        const result = await createUserWithEmailAndPassword(authorization, email, password);
        sendEmailVerification(authorization.currentUser);
        return result;
    }

    //function for login
    function login(email, password) {
        // const authorization=getAuth();
        return signInWithEmailAndPassword(authorization, email, password);
    }

    //function for logout
    function logout() {
        // const authorization=getAuth();
        signOut(authorization)
    }

    //sign in with google.
    async function logInWithGoogle(){
        try{
            const provider=new GoogleAuthProvider();
            const result=await signInWithRedirect(authorization, provider);
            getRedirectResult(authorization);
            // console.log(result);
            return result;
        }catch(err){
            console.log(err);
        }
    }
    //check the state of user means it is logout ot login. when user login or logout then it is
    //call
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("Log in");
        } else {
            console.log("Log out");
        }
    });

    //update user details
    function update(name){
        updateProfile(authorization.currentUser, {
            displayName:name
        })
    }
    //delete user account.
    function deleteAccount(){
        deleteUser(authorization.currentUser);
    }
    function forgetPassword(email){
        sendPasswordResetEmail(authorization,email);
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])
    const value = {
        currentUser,
        signup,
        login,
        logout,
        update,
        deleteAccount,
        forgetPassword,
        logInWithGoogle
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}