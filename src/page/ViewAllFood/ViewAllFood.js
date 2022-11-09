import React,{useState, useEffect} from 'react';
import ViewCard from './ViewCard/ViewCard';
import ('../Home/Home.css')
const ViewAllFood = () => {
    const [viewsAll, setViewsAll] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setViewsAll(data))
    },[])
    return (
        <div>
            <div className='grid lg:grid-cols-3 border viewFood md:grid-cols-2 p-4 lg:ml-10 md:ml-10'>
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