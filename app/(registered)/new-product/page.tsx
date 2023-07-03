"use client"
import { useState } from "react";
import firebase from "@/firebase/firebase";
import useProductValidation from "@/hooks/useProductValidation";
import DownArrowIcon from "@/components/icons/dowarrow-icon";
import CurrentTags from "./CurrentTags";
import { v4 as uuidv4 } from 'uuid';
import { Tags } from "@/types";
import newProductValidation, { validationTags } from "@/services/validation/newProductValidation";

const initialState = {
    name: '',
    price: '',
    category: '',
    information: '',
    number_warranty: '0',
    date_warranty: 'month',
    discount: '0',
    tag:''
}

const NewProduct = () => {

    const [ errorauth, setErrorAuth ] = useState<string | null >(null)
    const [ successprod, setSuccessProd ] = useState(false)
    const [ tags, setTags ] = useState<Array<Tags>>([])
    const [ showtags, setShowTags ] = useState(false)

    const { product, image, errors, errortags, handleChange, handleFile, onSubmit, onClickTag } =  useProductValidation(initialState, tags, setTags, newProductValidation, validationTags, addProduct)

    const { name, price, category, information, number_warranty, date_warranty, discount, tag } = product;

    async function addProduct() {
     
        if(!image) return;
        
        const tagsProduct = tags.map(tag => tag.tag); 
        setTags([]);

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
                discount: Number(discount),
                tags: tagsProduct
            }

            // Add to the database
            firebase.collect(product, "products");
            
            setSuccessProd(true);
            
            setTimeout(() => {
                setSuccessProd(false);

            },5000)

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
                    
                    <div className="newproduct-field">
                        <label htmlFor="tags">Tags</label>
                        <div className="newproduct-field_warranty">
                            <div className="tags-container">
                                <input 
                                type="text"
                                name="tag"
                                id="tag"
                                placeholder="Enter Tags max 9"
                                onChange={handleChange}
                                value={tag}
                                />
                                <button 
                                type="button" 
                                onClick={onClickTag}
                                >&#43;</button>
                            </div>
                            <ul className="current-tags">
                                <li>
                                    <p className="current-tags-p" onClick={() => 
                                        {if(tags.length > 0) setShowTags(!showtags)}
                                        }>
                                        Current Tags <span> <DownArrowIcon /></span>
                                    </p>
                                    
                                    <CurrentTags
                                    tags={tags}
                                    showtags={showtags}
                                    settags={setTags}
                                    setShowTags={setShowTags}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    {errortags.tags && <p className="auth-error"> {errortags.tags}</p>}
                    {errors.tags && <p className="auth-error"> {errors.tags}</p>}
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
                {successprod && <p className="notification-added success-product"> Sended</p>}
            </form>
        </main>
        
    )
}
 
export default NewProduct;