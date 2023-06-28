"use client"
import Link from "next/link";
// import firebase from "@/firebase/firebase";
import { useState} from "react";
import useValidation from "@/hooks/useValidation";
import loginValidation from "@/services/validation/loginValidation";

const initialState = {
    email: '',
    password: '',
}
const Login = () => {
    const { values, handleChange, onSubmit } = useValidation(initialState, loginValidation);


    // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()

    //     if( email.trim() === '' || password.trim() === ''){
    //         setError('All fields are required')
    //         return
    //     }

    //     if(!er.test(email)){
    //         setError('Invalid email')
    //         return
    //     }

    //     setError(null)
        
    //     setUser({
    //         email: '',
    //         password: '',
    //     })
    // }

    return (
        <main className="minvh">
            <div className="user_form">
                <div className="form-container">
                    <h2 className="title-login">Log in</h2>
                    <form action="" onSubmit={onSubmit}>
                        <div className="form-field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your E-mail"
                            onChange={handleChange}
                            value={values.email}
                             />
                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your Password"
                            onChange={handleChange}
                            value={values.password}
                             />
                        </div>
                        <div className="form-field">
                            <input 
                            type="submit"
                            value='Log in'
                            className="btn btn-primary btn-block"
                             />
                        </div>
                    </form>
                    <Link href="/signup" className="account-link">
                        Sign up
                    </Link>
                    {/* {error && <p className="auth-error"> {error}</p>} */}
                </div>
            </div>
        </main>
      );
}
 
export default Login;