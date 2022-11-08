import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';

const Review = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <form>
                 <textarea className="textarea textarea-success" placeholder="Add your review"></textarea>
            </form>
        </div>
    );
};

export default Review;