import React from 'react';
import { Link, useLoaderData } from 'react-router-dom'
const MoreDetails = () => {
    const details = useLoaderData()
   
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details.name}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreDetails;