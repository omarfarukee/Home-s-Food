import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import TableReview from './TableReview/TableReview';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])

    return (
        <div>
            <h1>this my review {reviews.length}</h1>
            <div className="overflow-x-auto w-full p-7 border">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Food Item Name</th>
                            <th>Review</th>
                            <th>Customer name</th>
                            <th>Picture</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => <TableReview
                                key={review._id}
                                review={review}
                            ></TableReview>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;