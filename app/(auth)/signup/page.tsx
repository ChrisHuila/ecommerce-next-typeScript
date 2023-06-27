import Link from "next/link";

const SignUp = () => {
    return (
         <main className="minvh">
            <div className="user_form">
                <div className="form-container">
                    <h2 className="title-login">Sign up</h2>
                    <form action="">
                        <div className="form-field">
                            <label htmlFor="user_name">Name</label>
                            <input 
                            type="text"
                            name="user_name"
                            id="user_name"
                            placeholder="Enter your name"
                             />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your E-mail"
                             />
                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your Password"
                             />
                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password"
                            name="confirm"
                            id="confirm"
                            placeholder="Confirm your Password"
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
                </div>
            </div>
        </main>
      );
}
 
export default SignUp;