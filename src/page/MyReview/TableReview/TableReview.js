import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ('../../MoreDetails/MoreDetails.css')
const TableReview = ({ review, handleDelete }) => {
    const {buyerName, img , star, email, message, foodName,serviceId ,photoURL, userPhoto, _id} = review
    const [itemReview ,setItemReview] =useState({})

    useEffect(() =>{

        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setItemReview(data))
    }, [serviceId])

    return (
 
        <div>
            <div className="card card-compact lg:w-96 md:w-96 table-card  bg-black shadow-xl mb-3">
                <figure>{itemReview?.img &&  <img className='h-60 w-full' src={itemReview.img} alt="" />}</figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="card-title">Items :{foodName}</h2>
                            
                        </div>
                        <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className='btn btn-error'>Delete review</button>
                        <ToastContainer position="top-center"
                        autoClose={1000}
                       hideProgressBar={false}
                          newestOnTop={false}
                            closeOnClick
                              rtl={false}
                      pauseOnFocusLoss
                       draggable
                        pauseOnHover
                          theme="light" />
                        </div>
                    </div>
                    <p>{email}</p>
                    <p>Your review :</p>
                    <div className='border h-52 rounded p-2 overflow-scroll'>
                   <p className=''> {message}</p><br /> 
                    </div>
                    <Link to={`/update/${_id}`}><button className="btn btn-sm mt-2">Edit Review</button></Link>
                    <p className='mt-11  flex items-center'> Rating: <span className='flex ml-2 items-center'><FaStar className='text-yellow-500'></FaStar>{star}<img className="mask mask-circle h-11 ml-14" src={photoURL} alt='' /><h1>{buyerName}</h1></span></p> 
                    
                    
                </div>
            </div>
        </div> 

    );
};

export default TableReview;