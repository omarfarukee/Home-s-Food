import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const TableReview = ({ review }) => {
    const {buyerName, img , star, message, foodName,serviceId ,photoURL,userPhoto, _id} = review
    const [itemReview ,setItemReview] =useState({})
    useEffect(() =>{

        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setItemReview(data))
    }, [serviceId])
    const handleDelete = _id =>{
            const proceed = window.confirm('Are you sure, want to delete this review?')
            if(proceed){
                fetch( `http://localhost:5000/review/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            }
    }
    return (
 
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className=" rounded w-12 h-12 ">
                                {itemReview?.img &&  <img className='' src={itemReview.img} alt="" />}
                                
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{foodName}</div>
                        </div>
                    </div>
                </td>
                <td>
                   {message}
                </td>
                <td>{buyerName}</td>
                <img className="mask mask-hexagon-2 h-16 mt-1" alt='' src={photoURL} />
                <th>
                    <button className="btn btn-ghost btn-xs"><FaStar></FaStar> {star}</button>
                </th>
            </tr>

    );
};

export default TableReview;