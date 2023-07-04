"use client"
import { useState, useRef, useEffect } from "react";

export default function useSearch() {
   const [ search, setSearch ] = useState('');
   const [ error, setError ] = useState< string | null>(null);

   const isfirtInput= useRef(true);

   useEffect(() => {

     if(isfirtInput.current){
        isfirtInput.current = search === '';
        return
     }

     if(search === ''){
        setError('Type your Search'); 
        return
     }

    setError(null);

   }, [search])

   return{search, setSearch, error}
}