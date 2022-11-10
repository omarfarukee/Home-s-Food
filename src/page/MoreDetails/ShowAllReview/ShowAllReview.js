import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../MoreDetails.css'
const ShowAllReview = ({allReview}) => {
    const {message,buyerName, photoURL, img,foodName,email , star} = allReview
    return (
        <div>
            <div className="card lg:w-96 md:w-96 all-card bg-black mb-5 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img}  alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{foodName}</h2>
                    <h1>{email}</h1>
                    <h1>reviewer: {buyerName}</h1>
                    <p>review : {message}</p>
                    <div className="card-actions">

                     <h1 className='flex justify-center'><FaStar className='mr-2 text-yellow-400 mt-1'></FaStar> {star}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAllReview;