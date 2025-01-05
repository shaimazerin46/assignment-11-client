import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from '../../Firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    const registerWithEmailPassword = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const registerWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)

    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (displayName,photoURL)=>{
        const currentUser = auth.currentUser;
        if(currentUser){
            return updateProfile(auth.currentUser,{displayName,photoURL})
        }
        
    }

    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe
    },[])
   
    const authInfo = {
        registerWithEmailPassword,
        registerWithGoogle,
        updateUser,
        user,
        logout,
        login
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;