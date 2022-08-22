import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../util/firebase';
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
} 
from 'firebase/auth'

const AuthContext = createContext()
export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signOut() {
        return auth.signOut();
    }

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function getUser() {
        return auth.currentUser
    }

    function isLoggedIn() {
        if (auth.currentUser) {return true} else {return false}
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })
    
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        getUser,
        login,
        signOut,
        signup,
        isLoggedIn
      }

    return (
        <AuthContext.Provider  value={value}>
            {!loading && children}
        </AuthContext.Provider >
  )
}
