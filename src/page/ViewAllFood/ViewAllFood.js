import React,{useState, useEffect} from 'react';
import ViewCard from './ViewCard/ViewCard';

const ViewAllFood = () => {
    const [viewsAll, setViewsAll] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setViewsAll(data))
    },[])
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 p-4 ml-10'>
                    {
                        viewsAll.map(view => <ViewCard
                        key={view._id}
                        view={view}
                        ></ViewCard>)
                    }
            </div>
          
        </div>
    );
};

export default ViewAllFood;