import { useState } from "react";
import { Errors, Values } from "@/services/validation/loginValidation";

export default function useValidation<T>(
    initialState: T, 
    validation: (data: Values) => Errors  
    ){
  const [ values, setValues ] =  useState<T>(initialState)
  const [ errorslogin, setErrorLogin ] = useState<Errors>({})
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errorsValidation = validation(values as Values)
        setErrorLogin(errorsValidation)
    }

    return{ values, handleChange, onSubmit }
}