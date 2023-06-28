"use client"
import Link from "next/link";
// import firebase from "@/firebase/firebase";
import useValidation from "@/hooks/useValidation";
import loginValidation from "@/services/validation/loginValidation";

const initialState = {
    email: '',
    password: '',
}
const Login = () => {
    const { user, errors, handleChange, onSubmit } = useValidation(initialState, loginValidation);
 
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
                            value={user.email}
                             />
                        </div>
                        {errors.email && <p className="auth-error"> {errors.email}</p>}

                        <div className="form-field">
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