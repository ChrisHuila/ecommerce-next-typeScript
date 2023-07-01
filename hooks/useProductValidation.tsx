"use client"
import { useEffect, useState } from "react";
import { ErrorsValidationProduct, ErrorsTags, ValidationProduct } from "@/types";


export default function useProductValidation<T extends ValidationProduct>(
initialState: T,
tags: Array<string> ,
setTags: (tag: string[]) => void,
validation: (product: ValidationProduct, img: File | null, tags: string[]) => Promise<ErrorsValidationProduct>,
validationTags: (tags: string[], tag: string) => ErrorsTags,
addProduct: () => void  
){
    const [ values, setValues ] =  useState<T>(initialState)
    const [ image, setImage ] = useState< File | null >(null)
    const [ errors, setErrors ] = useState<ErrorsValidationProduct>({})
    const [ errortags, setErrorTags ] = useState< ErrorsTags >({})
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
    
    const onClickTag = () => {
        if(!values.tag) {
            setErrorTags({
                tags: 'enter at least one tag'               
            })
            setTimeout(() =>{
                setErrorTags({})
            }, 3000)
            return
        } 
        const errorsValidation = validationTags(tags, values.tag )
        setErrorTags(errorsValidation)

        setTimeout(() =>{
                setErrorTags({})
        }, 3000)

        if(tags.length < 9){
            setTags([...tags, values.tag])
            setValues({
                ...values,
                ['tag']: ''
            })
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errorsValidation = await validation(values, image, tags)
        setErrors(errorsValidation)
        setSubmitForm(true)
    }

    useEffect(()=>{
        const getConnection = () => {
            if(submitform){
                const noErrors = Object.keys(errors).length === 0;
                if(noErrors) {
                    addProduct();
                    setValues(initialState)
                }
                setSubmitForm(false)
            }
        }
        getConnection()
    },[submitform])

    return{ product:values, image, errors, errortags, handleChange, handleFile, onSubmit, onClickTag }
}