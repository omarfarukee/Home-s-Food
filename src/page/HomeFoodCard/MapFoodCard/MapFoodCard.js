import React from 'react';
import {Link} from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaBars, FaPen } from 'react-icons/fa';
const MapFoodCard = ({ card }) => {
    const { _id, img, name, price, details } = card
    return (
        <div>
                 
            <div className="card card-compact lg:w-96 md:w-96 card-Food bg-black shadow-xl mb-3">
            <PhotoProvider>
      <PhotoView src={img}>
      <figure><img className='h-60 w-full' src={img} alt="" /></figure>
      </PhotoView>
    </PhotoProvider>
                
                <div className="card-body">
                    <h2 className="card-title font-bold text-green-600">{name}</h2>
                    <p>{details.slice(0,100)}...</p>
                    <h1 className='text-2xl'>BDT : {price}৳</h1>
                    <div className="card-actions justify-end">
                     <Link to={`/services/${_id}`}><button className="btn btn-primary bg-green-400 border-none"><FaPen></FaPen> More Details</button></Link>   
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MapFoodCard;