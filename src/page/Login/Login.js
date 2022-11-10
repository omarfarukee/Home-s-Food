import React,{useState, useContext} from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUserAltSlash, FaUserCircle, FaUserClock } from 'react-icons/fa';
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
             navigate(from,{replace : true})
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
                        <div className='flex justify-center pt-5'>
                             <h1 className='text-3xl text-green-500 font-bold'>Login..</h1>
                        </div>
                        
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
                                <button className="btn btn-primary bg-green-400 border-none hover:bg-gray-400"><FaUserClock className='mr-2'></FaUserClock> Login</button>
                                <p className='mt-2 lg:ml-14 new'>New in here? <Link className='text-blue-700 hover:text-blue-900' to='/register'>Register now</Link></p>
                            </div>
                            <p className='text-red-500 ml-5'>{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;