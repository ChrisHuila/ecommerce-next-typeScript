"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import firebase from "@/firebase/firebase";
import useProductValidation from "@/hooks/useProductValidation";
import newProductValidation from "@/services/validation/newProductValidation";

const initialState = {
    name: '',
    price: 0,
    category: '',
    information: '',
    number_warranty: 0,
    date_warranty: 'month',
    discount: 0,
}

const NewProduct = () => {
    const [ image, setImage ] = useState< File | null >(null)

   const { product, errors, handleChange, onSubmit } =  useProductValidation(initialState,newProductValidation, addProduct)
   
   const [ errorauth, setErrorAuth ] = useState<string | null >(null)

    const router = useRouter() //allow navigation

    async function addProduct() {
      
    }
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
            setImage(e.target.files[0])
    }

    return(
        <main className="minvh">
            <h1 className="newproduct-title">New Product</h1>

            <form className="newproduct-form" onSubmit={onSubmit}>
                <fieldset>
                    <legend>General information </legend>
                    <div className="newproduct-field">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Product name"
                        onChange={handleChange}
                         />
                    </div>

                    <div className="newproduct-field">
                        <label htmlFor="name">Price</label>
                        <input 
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Product price dollar"
                        onChange={handleChange}
                         />
                    </div>
                    <div className="newproduct-field">
                        <label htmlFor="image">Image</label>
                        <input 
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleFile }
                         />
                    </div>

                    <div className="newproduct-field">
                        <label htmlFor="name">Category</label>
                        <input 
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Product category"
                        onChange={handleChange}
                         />
                    </div>

                    <div className="newproduct-field">
                        <label htmlFor="name">Discount</label>
                        <input 
                        type="number"
                        name="discount"
                        id="discount"
                        placeholder="percentage discount"
                        onChange={handleChange}
                         />
                    </div>

                    <div className="newproduct-field">
                        <label htmlFor="warranty">Warranty</label>
                        <input 
                        type="number"
                        name="number_warranty"
                        id="warranty"
                        placeholder="number"
                        onChange={handleChange}
                         />
                         <select name="date_warranty" value={product.date_warranty}>
                            <option value="day">Day</option>
                            <option value="month">Month</option>
                            <option value="year">Year</option>
                         </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Product features</legend>
                    <div className="newproduct-field">
                        <label htmlFor="information">Description</label>
                        <textarea 
                        name="information"
                        id="information"
                        onChange={handleChange}
                        value={product.information}
                        />
                    </div>    
                </fieldset>
                <input className="newproduct-submit" type="submit" value="Add Product" />
            </form>

        </main>
        
    )
}
 
export default NewProduct;