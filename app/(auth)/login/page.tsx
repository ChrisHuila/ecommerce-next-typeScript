"use client"
import Link from "next/link";
import { useState} from "react";

const Login = () => {

    const [ user, setUser] = useState({
        email: '',
        password: '',
    });
    const [ error, setError ] = useState<string | null>(null)

    const { email, password } = user;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if( email.trim() === '' || password.trim() === ''){
            setError('All fields are required')
            return
        }

        if(!er.test(email)){
            setError('Invalid email')
            return
        }

        setError(null)

        setUser({
            email: '',
            password: '',
        })
    }

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
                    {error && <p className="auth-error"> {error}</p>}
                </div>
            </div>
        </main>
      );
}
 
export default Login;