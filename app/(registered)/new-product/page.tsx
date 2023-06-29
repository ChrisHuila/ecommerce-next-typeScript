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
    date_warranty: '',
    discount: 0,
}

const NewProduct = () => {
   const { product, errors, handleChange, onSubmit } =  useProductValidation(initialState,newProductValidation, addProduct)
   
   const [ errorauth, setErrorAuth ] = useState<string | null >(null)

    const router = useRouter() //allow navigation

    async function addProduct() {
      
    }
    return(
        <main className="minvh">
            <h1 className="newproduct-title">New Product</h1>

            <form className="newproduct-form">
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
                         <select name="date_warranty" >
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
                        >

                        </textarea>
                    </div>    
                </fieldset>
                 <input className="newproduct-submit" type="submit" value="Add Product" />
            </form>

        </main>
        
    )
    // return (
    //      <main className="minvh">
    //         <div className="user_form">
    //             <div className="form-container">
    //                 <h2 className="title-login">Sign up</h2>
    //                 <form action="" onSubmit={onSubmit}>
    //                     <div className="form-field">
    //                         <label htmlFor="user_name">Name</label>
    //                         <input 
    //                         type="text"
    //                         name="user_name"
    //                         id="user_name"
    //                         placeholder="Enter your name"
    //                         onChange={handleChange}
    //                         value={user.user_name}
    //                          />
    //                     </div>
    //                     {errors.user_name && <p className="auth-error"> {errors.user_name}</p>}

    //                     <div className="form-field">
    //                         <label htmlFor="email">E-mail</label>
    //                         <input 
    //                         type="email"
    //                         name="email"
    //                         id="email"
    //                         placeholder="Enter your E-mail"
    //                         onChange={handleChange}
    //                         value={user.email}
    //                          />
    //                     </div>
    //                     {errors.email && <p className="auth-error"> {errors.email}</p>}

    //                     <div className="form-field">
    //                         <label htmlFor="password">Password</label>
    //                         <input 
    //                         type="password"
    //                         name="password"
    //                         id="password"
    //                         placeholder="Enter your Password"
    //                         onChange={handleChange}
    //                         value={user.password}
    //                          />
    //                     </div>
    //                     {errors.password && <p className="auth-error"> {errors.password}</p>}

    //                     <div className="form-field">
    //                         <label htmlFor="password">Confirm your Password</label>
    //                         <input 
    //                         type="password"
    //                         name="confirm"
    //                         id="confirm"
    //                         placeholder="Confirm your Password"
    //                         onChange={handleChange}
    //                         value={user.confirm}
    //                          />
    //                     </div>
    //                     {errors.confirm && <p className="auth-error"> {errors.confirm}</p>}
                        
    //                     <div className="form-field">
    //                         <input 
    //                         type="submit"
    //                         value='Sign up'
    //                         className="btn btn-primary btn-block"
    //                          />
    //                     </div>
    //                 </form>
    //                 <Link href="/login" className="account-link">
    //                     Log in
    //                 </Link>
    //                 {errorauth && <p className="auth-error"> {errorauth}</p>}
    //             </div>
    //         </div>
    //     </main>
    //   );
}
 
export default NewProduct;