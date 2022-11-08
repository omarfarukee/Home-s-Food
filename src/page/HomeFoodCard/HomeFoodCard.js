import React, {useState, useEffect} from 'react';
import MapFoodCard from './MapFoodCard/MapFoodCard';
import {Link} from 'react-router-dom'
const HomeFoodCard = () => {
    const [cards, setCards] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 p-4 ml-10'>
                  {
                cards.map(card => <MapFoodCard
                key={card._id}
                card={card}
                ></MapFoodCard>)
            }
            </div>
          <div className='flex justify-center mt-5 mb-5'>
                <Link to='/foods'><button className='btn btn-success'>See All</button></Link>  
          </div>
        </div>
    );
};

export default HomeFoodCard;