import { ErrorsValidationProduct , ValidationProduct } from "@/types";

export default function newProductValidation(product: ValidationProduct) {
    let errors: ErrorsValidationProduct  = {}

    if(product.name?.trim() === ''){
        errors.name = 'name is required'
    }

    if(!product.price){
        errors.price = "price is required"
    }else if (product.price <= 0){
        errors.price = "invalid price"
    }

    if(!product.category){
        errors.category = "category is required"
    }

    if(product.information?.trim() === ''){
        errors.information = "Add a description of your product"
    }

    if(typeof product.discount !== "number" || product.discount < 0){
        errors.discount = "invalid discount"
    }

    if(typeof product.number_warranty !== "number" || product.number_warranty < 0){
        errors.number_warranty = "invalid warranty"
    }


    return errors;
}