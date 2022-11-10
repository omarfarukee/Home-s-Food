import React from 'react';
import img from '../../../image/7070.png'
import ('../Home.css')
const SectionTwo = () => {
    return (
        <div className='mb-10'>
            <div className='flex justify-center'>
                <h1 className='text-3xl'>Protein You daily needs</h1>
            </div>
            <div className='mt-5 flex justify-center p-5'>
                <div className=' p-5'>
                    <img className='lg:ml-20 lg:h-96 sec2-img' src={img} alt="" /> <br />
                    <h1 className=' font-bold'>Do you want to know a secret ? if you want to stay feet eat protein that %..</h1>
                </div>
                
            </div>
        </div>
    );
};

export default SectionTwo;