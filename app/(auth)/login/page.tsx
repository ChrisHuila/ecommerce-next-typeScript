"use client"
import Link from "next/link";
import { useState} from "react";


const Login = () => {
    return (
        <main className="minvh">
            <div className="user_form">
                <div className="form-container">
                    <h2 className="title-login">Log in</h2>
                    <form action="">
                        <div className="form-field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="text"
                            name="email"
                            id="email"
                            placeholder="your E-mail"
                             />
                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder="your Password"
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
                </div>
            </div>
        </main>
      );
}
 
export default Login;