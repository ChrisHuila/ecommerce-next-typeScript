"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import firebase from "@/firebase/firebase";
import useValidation from "@/hooks/useValidation";
import signupValidation from "@/services/validation/signupValidation";
import style from "@/app/(auth)/Auth.module.css";

const initialState = {
    user_name: '',
    email: '',
    password: '',
    confirm: ''
}

const SignUp = () => {
   const { user, errors, handleChange, onSubmit } =  useValidation(initialState,signupValidation, getSignUp)
   
   const [ errorauth, setErrorAuth ] = useState<string | null >(null)

    const router = useRouter() //allow navigation

    async function getSignUp() {
        try {
            await firebase.signup(user.user_name, user.email, user.password);
            router.push('/');
            setErrorAuth(null)

        } catch (error) {
            if (error instanceof Error) {
                setErrorAuth(error.message?.replace(/^Firebase: Error\s*/, '').replaceAll('-', ' '))
            }
        
        }        
    }

    return (
         <main className="minvh">
            <div className={style.user_form}>
                <div className={style.form_container}>
                    <h2 className={style.title_login}>Sign up</h2>
                    <form action="" onSubmit={onSubmit}>
                        <div className={style.form_field}>
                            <label htmlFor="user_name">Name</label>
                            <input 
                            type="text"
                            name="user_name"
                            id="user_name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            value={user.user_name}
                             />
                        </div>
                        {errors.user_name && <p className="auth-error"> {errors.user_name}</p>}

                        <div className={style.form_field}>
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your E-mail"
                            onChange={handleChange}
                            value={user.email}
                             />
                        </div>
                        {errors.email && <p className="auth-error"> {errors.email}</p>}

                        <div className={style.form_field}>
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your Password"
                            onChange={handleChange}
                            value={user.password}
                             />
                        </div>
                        {errors.password && <p className="auth-error"> {errors.password}</p>}

                        <div className={style.form_field}>
                            <label htmlFor="password">Confirm your Password</label>
                            <input 
                            type="password"
                            name="confirm"
                            id="confirm"
                            placeholder="Confirm your Password"
                            onChange={handleChange}
                            value={user.confirm}
                             />
                        </div>
                        {errors.confirm && <p className="auth-error"> {errors.confirm}</p>}
                        
                        <div className={style.form_field}>
                            <input 
                            type="submit"
                            value='Sign up'
                            className={`${style.btn} ${style.btn_primary} ${style.btn_block}`}
                             />
                        </div>
                    </form>
                    <Link href="/login" className={style.account_link}>
                        Log in
                    </Link>
                    {errorauth && <p className="auth-error"> {errorauth}</p>}
                </div>
            </div>
        </main>
      );
}
 
export default SignUp;