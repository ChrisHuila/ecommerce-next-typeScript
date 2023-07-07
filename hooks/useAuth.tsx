"use client"
import firebase from "@/firebase/firebase"
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useAuth() {
    const [ userauthed, setUserAuthed ] = useState< User | null >(null);
    const [ isresolve, setIsResolve ] = useState(false)
    

     useEffect(() => {
        const unsuscribe = onAuthStateChanged(firebase.auth, user => {
            if(user){
                setUserAuthed(user)
            }else{
                setUserAuthed(null)
            }
            setIsResolve(true);
        })
        return () => unsuscribe(); 
    },[])

    return { user:userauthed, isresolve };

}