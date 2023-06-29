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

    if(!product.discount){
        errors.discount = "add a discount"
    }else if (product.discount < 0){
        errors.discount = "invalid discount"
    }

    if(!product.number_warranty){
        errors.number_warranty = "enter a number"
    }else if (product.number_warranty < 0) {
        errors.number_warranty = "invalid warranty"
    }

    if(!product.date_warranty){
        errors.date_warranty = "select date"
    }

    return errors;
}