"use client"
import { useState } from "react";
import { ErrorsValidation, UserValidation } from "@/types";


export default function useValidation<T extends UserValidation>(
initialState: T, 
validation: (data: UserValidation) => ErrorsValidation  
){
  const [ values, setValues ] =  useState<T>(initialState)
  const [ errors, setErrors ] = useState<ErrorsValidation>({})
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errorsValidation = validation(values)
        setErrors(errorsValidation)
        
    }

    return{ user:values, errors, handleChange, onSubmit }
}