import React, {useState, useEffect} from 'react';
import ShowAllReview from '../ShowAllReview/ShowAllReview';
import ('../../MoreDetails/MoreDetails.css')
const AllReviews = () => {
    const [all , setAll] = useState([])
    useEffect(() => {
        fetch('https://homes-food-server.vercel.app/review')
        .then(res => res.json())
        .then(data => setAll(data))
    }, [])
    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='text-2xl'>all reviews</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 p-7 lg:ml-7'>
                {
                  all.map(allReview => <ShowAllReview
                  key={allReview._id}
                  allReview={allReview}
                  ></ShowAllReview>)
                }
            </div>
        </div>
    );
};

export default AllReviews;