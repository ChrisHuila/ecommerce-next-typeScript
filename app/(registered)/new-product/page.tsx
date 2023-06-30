"use client"
import Link from "next/link";
import { useState } from "react";
// import { useRouter } from 'next/navigation'
import firebase from "@/firebase/firebase";
import useProductValidation from "@/hooks/useProductValidation";
import newProductValidation from "@/services/validation/newProductValidation";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    name: '',
    price: '',
    category: '',
    information: '',
    number_warranty: '0',
    date_warranty: 'month',
    discount: '0',
}

const NewProduct = () => {

   const { product, image, errors, handleChange, handleFile, onSubmit } =  useProductValidation(initialState,newProductValidation, addProduct)
   
   const { name, price, category, information, number_warranty, date_warranty, discount } = product;

   const [ errorauth, setErrorAuth ] = useState<string | null >(null)

    // const router = useRouter() //allow navigation

    async function addProduct() {
     
        if(!image) return;
                
        try {
            const urlImage = await firebase.uploadImage(image, `productsImg/${image.name}` + uuidv4());
        
            // build product's object
            const product = {
                name,
                price,
                image: urlImage,
                category,
                date: Date.now(),
                information,
                warranty: {
                    Number: Number(number_warranty),
                    date: date_warranty
                },
                discount: Number(discount)
            }

            // Add to the database
            firebase.collect(product, "products");
        } catch (error) {
               if (error instanceof Error) {
                setErrorAuth(error.message?.replace(/^Firebase: Error\s*/, '').replaceAll('-', ' '))
            }
        }
      
        
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
                        value={name}
                         />
                    </div>
                     {errors.name && <p className="auth-error"> {errors.name}</p>}

                    <div className="newproduct-field">
                        <label htmlFor="name">Price</label>
                        <input 
                        type="number"
                        name="price"
                        id="price"
                        min='0'
                        placeholder="Product price dollar"
                        onChange={handleChange}
                        value={price}
                         />
                    </div>
                     {errors.price && <p className="auth-error"> {errors.price}</p>}
                     
                    <div className="newproduct-field">
                        <label htmlFor="image">Image</label>
                        <input 
                        type="file"
                        accept="image/*" 
                        name="image"
                        id="image"
                        onChange={handleFile }
                         />
                    </div>
                    {errors.img && <p className="auth-error"> {errors.img}</p>}
                     
                    <div className="newproduct-field">
                        <label htmlFor="name">Category</label>
                        <input 
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Product category"
                        onChange={handleChange}
                        value={category}
                         />
                    </div>
                    {errors.category && <p className="auth-error"> {errors.category}</p>}

                    <div className="newproduct-field">
                        <label htmlFor="name">Discount</label>
                        <input 
                        type="number"
                        name="discount"
                        id="discount"
                        min='0'
                        max="100"
                        placeholder="percentage discount"
                        onChange={handleChange}
                        value={discount}
                         />
                    </div>
                    {errors.discount && <p className="auth-error"> {errors.discount}</p>}

                    <div className="newproduct-field">
                        <label htmlFor="warranty">Warranty</label>
                        <div className="newproduct-field_warranty">
                            <input 
                            type="number"
                            name="number_warranty"
                            id="warranty"
                            placeholder="number"
                            onChange={handleChange}
                            value={number_warranty}
                            />
                            <select 
                            name="date_warranty" 
                            value={product.date_warranty}
                            onChange={handleChange}
                            >
                                <option value="day">Day</option>
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                            </select>
                        </div>
                    </div>
                    {errors.number_warranty && <p className="auth-error"> {errors.number_warranty}</p>}

                </fieldset>
                <fieldset>
                    <legend>Product features</legend>
                    <div className="newproduct-field">
                        <label htmlFor="information">Description</label>
                        <textarea 
                        name="information"
                        id="information"
                        onChange={handleChange}
                        value={information}
                        />
                    </div> 
                    {errors.information && <p className="auth-error"> {errors.information}</p>}

                </fieldset>
                <input className="newproduct-submit" type="submit" value="Add Product" />
                {errorauth && <p className="auth-error"> {errorauth}</p>}

            </form>
        </main>
        
    )
}
 
export default NewProduct;