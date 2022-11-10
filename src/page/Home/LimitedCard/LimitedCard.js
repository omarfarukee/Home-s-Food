import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import MapFoodCard from '../../HomeFoodCard/MapFoodCard/MapFoodCard';

const LimitedCard = () => {

    const [cards, setCards] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/servicess')
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
      <div className='flex justify-center mt-5 mb-5'>
            <Link to='/services'><button className='btn btn-success hover:bg-green-400 hover:text-black'>See All</button></Link>  
      </div>
    </div>
    );
};

export default LimitedCard;