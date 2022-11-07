import React, {useState, useEffect} from 'react';
import MapFoodCard from './MapFoodCard/MapFoodCard';

const HomeFoodCard = () => {
    const [cards, setCards] = useState({})

    useEffect(() =>{
        fetch('Food.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
{/*             
            {
                cards.map(card => <MapFoodCard
                key={card.id}
                card={card}
                ></MapFoodCard>)
            } */}
        </div>
    );
};

export default HomeFoodCard;