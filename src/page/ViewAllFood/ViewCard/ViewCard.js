import React from 'react';
import {Link} from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import '../../Home/Home.css'
const ViewCard = ({view}) => {
    const { _id, img, name, price, details } = view
    return (
        <div>
            <div className="card card-compact lg:w-96 md:w-96 v-card bg-black shadow-xl mb-3">
            <PhotoProvider>
      <PhotoView src={img}>
      <figure><img className='h-60 w-full' src={img} alt="" /></figure>
      </PhotoView>
    </PhotoProvider>
                
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details.slice(0, 200)}...</p>
                    <h1>BDT :{price}৳</h1>
                    <div className="card-actions justify-end">
                     <Link to={`/services/${_id}`}> <button  className="btn btn-primary">More Details</button></Link>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCard;