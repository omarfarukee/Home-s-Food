import React from 'react';
import pic1 from '../.././../image/pngwing.com (5).png'
import pic2 from '../.././../image/pngwing.com (6).png'
import pic3 from '../.././../image/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
import pic4 from '../.././../image/getty_811400348_2000133320009280235_401847.jpg'
import ('../Home.css')
const SectionOne = () => {

    return (
        <div>
            <div className='mt-20'>
                <div className='flex justify-center mt-14'>
                    <div>
                        <h1 className='text-4xl'>Extra info</h1>
                    </div>
                </div>
                <div className='lg:flex justify-center items-center'>
                    <img className='lg:h-full' src={pic1} alt="" />
                    <div className=' w-96 text-center h-56 p-5 rounded-lg bg-green-700 sec-p'>
                        <img className="mask mask-circle h-20 relative bottom-16" src={pic3} alt='' />
                        <h1 className='text-white font-bold mt-4 relative bottom-16'>
                            "A diet rich in vegetables and fruits can lower blood pressure, reduce the risk of heart disease and stroke, prevent some types of cancer, lower risk of eye and digestive problems, and have a positive effect upon blood sugar, which can help keep appetite in check."
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center mt-7'>
                    
                </div>
                <div className='lg:flex justify-center items-center'>
                 
                    <div className=' w-96 text-center h-56 p-5 rounded-lg bg-green-700 sec-p'>
                        <img className="mask mask-circle h-20 relative bottom-16" src={pic4} alt='' />
                        <h1 className='text-white font-bold mt-4 relative bottom-16 '>
                            "A diet rich in vegetables and fruits can lower blood pressure, reduce the risk of heart disease and stroke, prevent some types of cancer, lower risk of eye and digestive problems, and have a positive effect upon blood sugar, which can help keep appetite in check."
                        </h1>
                    </div>
                       <img className='lg:h-96 md:h-96 sec-pic lg:ml-5' src={pic2} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default SectionOne;