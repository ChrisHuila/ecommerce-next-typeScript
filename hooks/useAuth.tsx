"use client"
import firebase from "@/firebase/firebase"
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useAuth() {
    const [ userauthed, setUserAuthed ] = useState< User | null >(null);

     useEffect(() => {
        const unsuscribe = onAuthStateChanged(firebase.auth, user => {
            if(user){
                setUserAuthed(user)
            }else{
                setUserAuthed(null)
            }
        })
        return () => unsuscribe(); 
    },[])

    return userauthed;

}