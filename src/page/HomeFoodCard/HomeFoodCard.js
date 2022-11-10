import React, {useState, useEffect} from 'react';
import MapFoodCard from './MapFoodCard/MapFoodCard';
import {Link} from 'react-router-dom'
import ('../Home/Home.css')
const HomeFoodCard = () => {
    const [cards, setCards] = useState([])

    useEffect(() =>{
        fetch('https://homes-food-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 p-4 lg:ml-10'>
                  {
                cards.map(card => <MapFoodCard
                key={card._id}
                card={card}
                ></MapFoodCard>)
            }
            </div>
        </div>
    );
};

export default HomeFoodCard;