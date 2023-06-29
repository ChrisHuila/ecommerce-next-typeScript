import { ErrorsValidationProduct , ValidationProduct } from "@/types";

export default function newProductValidation(product: ValidationProduct) {
    let errors: ErrorsValidationProduct  = {}

    if(product.name?.trim() === ''){
        errors.name = 'name is required'
    }

    if(!product.price){
        errors.price = "price is required"
    }

    if(!product.category){
        errors.category = "category is required"
    }

    if(!product.information){
        errors.information = "Add a description of your product"
    }

    if(!product.discount){
        errors.discount = "add a discount"
    }

    if(!product.warranty?.number){
        errors.number = "enter a number"
    }

    if(!product.warranty?.number){
        errors.date = "select date"
    }

    return errors;
}