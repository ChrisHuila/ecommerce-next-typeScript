import { ErrorsValidationProduct, ErrorsTags, ValidationProduct } from "@/types";

export default async function  newProductValidation(product: ValidationProduct, image: File | null, tags: string[]) {
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

    if(!image){
        errors.img = "image is required"
    }else if(!image.type.includes('image/')){
        errors.img = "invalid image"
    }else{
        const img = new Image()
        let objectUrl = URL.createObjectURL(image)
        img.src = objectUrl;
        
        const loadingImg = new Promise (resolve => {
            img.onload = () => {
               if(img.width > 640 || img.height > 640 ){
                errors.img = "The image should be no more than 640 x 640 pixels in size"
               }

                URL.revokeObjectURL(objectUrl)
                resolve(true)
            }
        })
        await loadingImg;
    }

    if(tags.length === 0){
        errors.tags = 'enter at least one tag';
    }

    return errors;
}

export function validationTags(tags: string[], tag: string) {
    let errors:ErrorsTags = {}
    
    if(tag.trim() === ""){
        errors.tags = 'enter at least one tag';
    }

    if(tags.length > 9){
        errors.tags = 'mmaximum tags is 9'
    }

    if (tags.includes(tag)) {
        errors.tags = 'You have already added these tags'
    }
    return errors;
}