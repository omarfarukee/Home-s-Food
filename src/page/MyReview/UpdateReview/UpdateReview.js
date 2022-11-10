import React, { useState,useContext , useEffect} from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../ContextProvider/ContextProvider';
import ('../../MoreDetails/MoreDetails.css')
const UpdateReview = () => {
    useEffect(() =>{
        document.title = 'Update Review'
     }, [])
    const {user} = useContext(AuthContext)
    
    const newReview = useLoaderData()

    const [review, setReview] = useState(newReview)

    const handleUpdateUser = e => {

            e.preventDefault()
            fetch(`https://homes-food-server.vercel.app/review/${newReview._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    alert('user updated')
                    console.log(data);
                }
                
            })
    }

    const handleChange = event =>{
        const message = event.target.value
        const newReview = {...review}
        newReview.message = message 
        setReview(newReview)
    }

    return (
        <div className=' update-r'>

            <div className='flex justify-center items-center relative top-20'>
                
                <img className="mask mask-circle" src={user?.photoURL} alt=''/>
              
            </div>
            <div className='flex justify-center relative top-20'>
                <h1>User owner: <span className='font-bold text-green-300'>{user?.displayName}</span> </h1>
            </div>
              
            <div className='flex justify-center '>
                  <form onSubmit={handleUpdateUser}  className=' bg-transparent rounded-xl mt-4 mb-4 border lg:w-96 h-96 p-3 pt-28 text-center'>
                    <h1 className='mb-4 font-bold text-green-500'>'' Your review</h1>
                    <textarea onChange={handleChange} defaultValue={newReview.message} type="text" name='message'  className="textarea textarea-success w-full items-center" placeholder="Bio"></textarea> <br />
                    <button className='btn btn-success mt-2'>Update Review</button>
               
             </form>
            </div>
          
        </div>
    );
};

export default UpdateReview;