import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = (props = {}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const { children } = props || {};

    const createNewUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const LogIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const GoogleLogIn = () => {
        return signInWithPopup(auth, provider)
    }
    const LogOut = () => {
        return signOut(auth)
    }
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    const updatePass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          
                setUser(currentUser);
                setLoading(false)
            

        })
        return () => { unSubscribe };
    }, [])
    const authInfo = {
        createNewUser,
        LogIn,
        GoogleLogIn,
        LogOut,
        updateUser,
        updatePass,
        user,
        setUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;