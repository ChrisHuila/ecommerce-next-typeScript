"use client"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ErrorsValidationProduct, ErrorsTags, ValidationProduct, Tags } from "@/types";


export default function useProductValidation<T extends ValidationProduct>(
initialState: T,
tags: Array<Tags> ,
setTags: (tag: Array<Tags>) => void,
validation: (product: ValidationProduct, img: File | null, tags: Tags[]) => Promise<ErrorsValidationProduct>,
validationTags: (tags: Tags[], tag: string) => ErrorsTags,
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

        const withErrors = Object.keys(errorsValidation).length > 0;
        if(withErrors) return

        if(tags.length < 9){
            // TODO
            setTags([...tags, {tag: values.tag, id: uuidv4()}])
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