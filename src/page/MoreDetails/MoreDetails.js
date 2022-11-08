import React from 'react';
import { Link, useLoaderData } from 'react-router-dom'
const MoreDetails = () => {

    const details = useLoaderData()
   
    return (
        <div className='flex justify-center'>
            <div className="card  bg-base-100 shadow-xl border p-6 w-3/4">
                <figure><img className='rounded-xl' src={details.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details.name}</h2>
                    <p>{details.details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Back Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreDetails;