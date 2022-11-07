import React, {useState, useEffect} from 'react';
import MapFoodCard from './MapFoodCard/MapFoodCard';

const HomeFoodCard = () => {
    const [cards, setCards] = useState([])

    useEffect(() =>{
        fetch('Food.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 p-4 ml-10'>
                  {
                cards.map(card => <MapFoodCard
                key={card.id}
                card={card}
                ></MapFoodCard>)
            }
            </div>
          
        </div>
    );
};

export default HomeFoodCard;