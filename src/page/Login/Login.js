import React,{useState, useContext} from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ('./Login.css')
const Login = () => {
    const [error, setError] = useState('')

    const {login} = useContext(AuthContext)

    const location = useLocation();
     const from = location.state?.from?.pathname || '/'
     const navigate = useNavigate()
    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password)

        login(email, password)
        .then(result => {
            const user = result.user
            form.reset('')
            console.log(user)
            setError('')
             navigate(from, {replace : true})
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content login-container">
                  
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required/>
    
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;