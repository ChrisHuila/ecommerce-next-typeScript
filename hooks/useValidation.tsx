"use client"
import { useEffect, useState } from "react";
import { ErrorsValidation, UserValidation } from "@/types";


export default function useValidation<T extends UserValidation>(
initialState: T, 
validation: (data: UserValidation) => ErrorsValidation,
acces: () => void  
){
  const [ values, setValues ] =  useState<T>(initialState)
  const [ errors, setErrors ] = useState<ErrorsValidation>({})
  const [ submitform, setSubmitForm ] = useState(false)
    
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
        setSubmitForm(true)
    }

    useEffect(()=>{
        const getConnection = () => {
            if(submitform){
                const noErrors = Object.keys(errors).length === 0;
                if(noErrors) acces();
                setSubmitForm(false)
            }
        }
        getConnection()
    },[submitform])

    return{ user:values, errors, handleChange, onSubmit }
}