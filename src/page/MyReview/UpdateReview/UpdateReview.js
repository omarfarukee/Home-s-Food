import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const update = useLoaderData()
     const [text, setText] = useState(update)

    const handleUpdate = e =>{
        e.preventDefault();
        fetch(`http://localhost:5000/review/${update._id}`, {

            method : 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(text)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    const handleChange = event =>{
        const field = event.target.name
        const value = event.target.value
        const  newText = {...text}
        newText[field] = value
        setText(newText)
    
    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                
                <img className="mask mask-circle" src={update.userPhoto} alt=''/>
                <h1>update review {update.buyerName}</h1>
            </div>
            
            <form onSubmit={handleUpdate} className='flex justify-center mt-4 mb-4'>
                    {/* <textarea onChange={handleChange} name='message' className="textarea textarea-success w-96" placeholder="" defaultValue={update.message}></textarea> <br /> */}
                    <input onChange={handleChange}  defaultValue={update.message}   type="text" name='name'  className="input input-bordered input-success w-full max-w-xs" />
                    <button className='btn btn-success'>Update Review</button>
               
             </form>
        </div>
    );
};

export default UpdateReview;