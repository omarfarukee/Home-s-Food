import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import TableReview from './TableReview/TableReview';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    
    useEffect(() => {     
            document.title = 'My review'

        fetch(`https://homes-food-server.vercel.app/review?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('homesFood-Token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, want to delete this review?')
        if(proceed){
            fetch( `https://homes-food-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    // alert('Deleted review successfully')
                    toast.success("Deleted Successfully", {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    const remaining = reviews.filter(rev => rev._id !== id)
                    setReviews(remaining)
                }
            })
        }
}
// const handleUpdate = id =>{
//     fetch( `https://homes-food-server.vercel.app/review/${id}`, {

//         method : 'PATCH',
//         headers: {
//             'content-type': "application/json"
//         },
//         body: JSON.stringify({message : 'approved'})
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }
    return (
        <div>
            <div className='flex justify-center text-2xl mt-2 font-bold'>
                 <h1 >My reviews: {reviews.length}</h1>
            </div>
           
            { reviews.length === 0 ? <div className='text-3xl flex justify-center mb-3'><h1>No review were added</h1></div>
             :
            <div className="overflow-x-auto w-full lg:p-10 mb-3 grid lg:grid-cols-3 md:grid-cols-2">

                        {
                            reviews.map(review => <TableReview
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                // handleUpdate={handleUpdate}
                            ></TableReview>)
                        }
            </div>}
        </div>
    );
};

export default MyReview;