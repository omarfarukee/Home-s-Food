import React from 'react';

const MapFoodCard = ({ card }) => {
    const { id, img, name, price, details } = card
    return (
        <div>
            <div className="card card-compact w-96  bg-black shadow-xl mb-3">
                <figure><img className='h-60 w-full' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details.slice(400)}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapFoodCard;