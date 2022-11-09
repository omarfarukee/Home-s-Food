import React, { useContext, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../ContextProvider/ContextProvider';
import('./MoreDetails.css')
const MoreDetails = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const details = useLoaderData()
    const {_id, start, price, name, img} = details
    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target
        const message = form.message.value
        const names = form.name.value
        const photoURL = form.photoURL.value
        const email = user?.email 
        const orders ={

            buyerName : names,
            serviceId : _id ,
            price,
            email,
            photoURL,
            message, 
            star : start,
            foodName : name ,
            userPhoto : user?.photoURL ? user.photoURL : null,
            img : img 
        }
       

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review successfully submit')
                form.reset()
            }
        })
        .catch(err => console.error(err))
    }


    const [please, setPlease] = useState('')
    const pleaseLogin = () =>{
     const   logs = 'Please login first To add review'
     setPlease(logs)
    }
    return (
        <div className=''>
            <div className='flex justify-center'>
                <div className="card  bg-base-100 shadow-xl border p-6 w-3/4 mb-5">
                    <figure><img className='rounded-xl' src={details.img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{details.name}</h2>
                        <p>{details.details}</p>
                        <div className="card-actions justify-end">
                            <Link to='/home'><button className="btn btn-primary">Back Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center font-bold'>
                <h1 className='mb-5 text-2xl more-h1'>'{user?.displayName}' Add your Review here</h1>
            </div>

    <div className='flex justify-center border lg:p-5 md:p-5 more-form'>

        <form onSubmit={handleReview}>
                <input name='name' type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-xs mb-3" required/> <br />
                <input name='photoURL' type="text" placeholder="Photo URL (Optional)" className="input input-bordered input-success w-full max-w-xs mb-3" /> <br />
                <input name='email' type="email" placeholder="email" className="input input-bordered input-success w-full max-w-xs mb-3" defaultValue={user?.email}/> <br />
                    <textarea name='message' className="textarea textarea-success lg:w-96 md:w-96 area-text" placeholder="Add your review" required></textarea> <br />
                    
                    {
                        user?.email ? <>
                        <button className='btn btn-success'>Submit</button>
                  </>:
                    <div>
                        <p className='mb-2'><Link to='/login' className='hover:text-green-500 border-b-2 text-blue-500'>{please} </Link></p>
                         <button onClick={pleaseLogin} className='btn btn-success'>Submit</button>
                        </div>
                   
                    }  
                </form> 
                
            </div>
        </div>
    );
};

export default MoreDetails;