import React from 'react';
import {Link} from 'react-router-dom'
const ViewCard = ({view}) => {
    const { id, img, name, price, details } = view
    return (
        <div>
            <div className="card card-compact w-96  bg-black shadow-xl mb-3">
                <figure><img className='h-60 w-full' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details.slice(400)}...</p>
                    <h1>BDT :{price}</h1>
                    <div className="card-actions justify-end">
                     <Link to={`/viewAllFood/${id}`}> <button  className="btn btn-primary">More Details</button></Link>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCard;