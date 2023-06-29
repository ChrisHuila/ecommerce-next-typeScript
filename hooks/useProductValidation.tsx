"use client"
import { useEffect, useState } from "react";
import { ErrorsValidationProduct, ValidationProduct } from "@/types";


export default function useProductValidation<T extends ValidationProduct>(
initialState: T, 
validation: (product: ValidationProduct, img: File | null) => Promise<ErrorsValidationProduct>,
acces: () => void  
){
    const [ values, setValues ] =  useState<T>(initialState)
    const [ image, setImage ] = useState< File | null >(null)
    const [ errors, setErrors ] = useState<ErrorsValidationProduct>({})
    const [ submitform, setSubmitForm ] = useState(false)
    
  const handleChange = (e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        setImage(e.target.files[0]);
    }
    
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errorsValidation = await validation(values, image)
        setErrors(errorsValidation)
        setSubmitForm(true)
    }

    useEffect(()=>{
        const getConnection = () => {
            if(submitform){
                const noErrors = Object.keys(errors).length === 0;
                if(noErrors) {
                    acces();
                    // setValues(initialState)
                }
                setSubmitForm(false)
            }
        }
        getConnection()
    },[submitform])

    return{ product:values, errors, handleChange, handleFile, onSubmit }
}