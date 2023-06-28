import { ErrorsValidation, UserValidation } from "@/types";



export default function signupValidation(user: UserValidation) {
     let errors:ErrorsValidation  = {}

    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    
    if(user.user_name?.trim() === '' ){
        errors.user_name= 'Name is required'
    }

    if(!user.email){
    errors.email = "Email is required";
    }else if (!er.test(user.email)){
    errors.email= 'invalid Email'
    }

    if(!user.password){
    errors.password = 'Password is required'
    }else if( user.password.length < 6 ){
    errors.password = "The password must have at least six characters";
    }
    
    if(!user.confirm){
        errors.confirm = 'Password is required'
    }else if(user.password !== user.confirm){
        errors.confirm = "The password doesn't match"
    }

    return errors;
}