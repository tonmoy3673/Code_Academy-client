import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

const auth=getAuth(app);
 export const context=createContext();
const AuthContext = ({children}) => {
    
    const [user,setUser]=useState({});
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{

        return signInWithEmailAndPassword(auth,email,password);
    }
    

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile);

    }
    const logOut=()=>{
        return signOut(auth);
    }

    const logInWithGoogle=(GoogleAuthProvider)=>{
        return signInWithPopup(auth,GoogleAuthProvider);
    }

   

    const authInfo={user,createUser,signIn,logOut,logInWithGoogle,updateUserProfile}

    return (
        <div>
            <context.Provider value={authInfo}>
                {children}
            </context.Provider>
        </div>
    );
};

export default AuthContext;