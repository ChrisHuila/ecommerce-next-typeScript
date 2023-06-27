"use client"
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
    const [ user, setUser ] = useState({
        user_name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const [ error, setError ] = useState<string | null>(null)

    const { user_name, email, password, confirm } = user;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(user_name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === ''){
            setError('All fields are required')
            return
        }

        if(!er.test(email)){
            setError('Invalid email')
            return
        }

        if(password.trim().length < 6 && confirm.trim().length < 6 ){
            setError( "The password must have at least six characters" )
            return
        }

        if(password !== confirm){
            setError( "The password doesn't match" )
            return
        }
        setError(null)

        setUser({
            user_name: '',
            email: '',
            password: '',
            confirm: ''
        })
    }

    return (
         <main className="minvh">
            <div className="user_form">
                <div className="form-container">
                    <h2 className="title-login">Sign up</h2>
                    <form action="" onSubmit={onSubmit}>
                        <div className="form-field">
                            <label htmlFor="user_name">Name</label>
                            <input 
                            type="text"
                            name="user_name"
                            id="user_name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            value={user_name}
                             />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your E-mail"
                            onChange={handleChange}
                            value={email}
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
                            value={password}
                             />
                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Confirm your Password</label>
                            <input 
                            type="password"
                            name="confirm"
                            id="confirm"
                            placeholder="Confirm your Password"
                            onChange={handleChange}
                            value={confirm}
                             />
                        </div>
                        <div className="form-field">
                            <input 
                            type="submit"
                            value='Sign up'
                            className="btn btn-primary btn-block"
                             />
                        </div>
                    </form>
                    <Link href="/login" className="account-link">
                        Log in
                    </Link>
                    {error && <p className="auth-error"> {error}</p>}
                </div>
            </div>
        </main>
      );
}
 
export default SignUp;