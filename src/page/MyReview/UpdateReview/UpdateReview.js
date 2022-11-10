import React, { useState,useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../ContextProvider/ContextProvider';
import ('../../MoreDetails/MoreDetails.css')
const UpdateReview = () => {
    const {user} = useContext(AuthContext)
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
        <div className=' update-r'>

            <div className='flex justify-center items-center relative top-20'>
                
                <img className="mask mask-circle" src={update.userPhoto} alt=''/>
              
            </div>
            <div className='flex justify-center relative top-20'>
                <h1>User owner: <span className='font-bold text-green-300'>{user?.displayName}</span> </h1>
            </div>
              
            <div className='flex justify-center '>
                  <form onSubmit={handleUpdate} className=' bg-transparent rounded-xl mt-4 mb-4 border lg:w-96 h-96 p-3 pt-28 text-center'>
                    <h1 className='mb-4 font-bold text-green-500'>'{update.buyerName}' Your review</h1>
                    {/* <textarea onChange={handleChange} name='message' className="textarea textarea-success w-96" placeholder="" defaultValue={update.message}></textarea> <br /> */}
                    {/* <input onChange={handleChange}  defaultValue={update.message} type="text" name='name'  className="input input-bordered input-success w-full max-w-xs" /> <br /> */}
                    <textarea onChange={handleChange}  defaultValue={update.message} type="text" name='name'  className="textarea textarea-success w-full items-center" placeholder="Bio"></textarea> <br />
                    <button className='btn btn-success mt-2'>Update Review</button>
               
             </form>
            </div>
          
        </div>
    );
};

export default UpdateReview;