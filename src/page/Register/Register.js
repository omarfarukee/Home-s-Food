import React, { useContext, useState } from 'react';
import {FaGoogle} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import  ('./Register.css')
const Register = () => {
    const [error, setError] =useState('')
    const {register,updateUserProfile, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = (event) =>{

        event.preventDefault() 
        const form = event.target
        const name= form.name.value 
        const photoURL = form.photoURL.value
        const email = form.email.value 
        const password = form.password.value 
        console.log( name, email, password, photoURL)
        register(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            setError('')
            handleProfile(name, photoURL)
            form.reset('')
            // navigate('/')
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
      }
      const handleProfile = (name, photoURL) =>{
        const profile ={
            displayName : name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }
    const handleGoogle = () =>{
        signInWithGoogle()
        .then(result => {
          const user = result.user
          console.log(user)
        //   navigate('/')
        })     
        .catch(error =>{
          console.error(error)
        })
     }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content reg-container">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Enter Photo-URL" className="input input-bordered" />
                            </div>
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
                                <label className="label">
                                    <a href="" className="label-text-alt link link-hover">Already have account?</a>
                                </label>
                                <p>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div  className="form-control  w-10/12 btn-google">
                             <button onClick={handleGoogle} className="btn btn-primary"><FaGoogle></FaGoogle> Sign Up With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;