import { useState } from "react";
import { ErrorsValidation, UserValidation } from "@/types";


export default function useValidation<T extends UserValidation>(
    initialState: T, 
    validation: (data: UserValidation) => ErrorsValidation  
    ){
  const [ values, setValues ] =  useState<T>(initialState)
  const [ errorslogin, setErrorLogin ] = useState<ErrorsValidation>({})
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errorsValidation = validation(values)
        setErrorLogin(errorsValidation)
        
    }

    return{ values, handleChange, onSubmit }
}