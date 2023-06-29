import { ErrorsValidationProduct , ValidationProduct } from "@/types";

export default function newProductValidation(product: ValidationProduct) {
    let errors: ErrorsValidationProduct  = {}

    if(product.name?.trim() === ''){
        errors.name = 'name is required'
    }

    if(product.price?.trim() === ''){
        errors.price = "price is required"
    }

    if(product.category?.trim() === ''){
        errors.category = "category is required"
    }

    if(product.information?.trim() === ''){
        errors.information = "Add a description of your product"
    }

    if(product.discount?.trim() === '' ){
        errors.discount = "invalid discount"
    }

    if( product.number_warranty.trim() === '' ){
        errors.number_warranty = "invalid warranty"
    }


    return errors;
}