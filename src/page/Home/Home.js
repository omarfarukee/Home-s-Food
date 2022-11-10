import React from 'react';
// import pic1 from '../../image/pic1.jpg'
// import pic3 from '../../image/pic3.jpg'
// import pic3 from '../../image/pic3.jpg'
import pic5 from '../../image/pic5.jpg'
import pic6 from '../../image/pic6.jpg'
import pic8 from '../../image/pic8.jpg'
import HomeFoodCard from '../HomeFoodCard/HomeFoodCard';
import LimitedCard from './LimitedCard/LimitedCard';
import SectionOne from './SectionOne/SectionOne';
import ('./Home.css')
const Home = () => {
    return (
        <div>
            <div className="carousel w-full slides ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='back-img'>
                        <img src={pic5} className="w-full rounded-xl"/>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 top-40 left-24">
                        <div className=''>
                        <h1 className='lg:text-6xl text-t text-center font-bold text-white text-2xl'>
                            Fresh Food Fresh Life ...
                        </h1>
                        </div>
                      
                    </div>
                    <div className="absolute  transform -translate-y-1/2 top-1/3 left-24">
                        <p className='text-white text-p'>Fresh and feet equal healthy life <br /> So eat healthy foods , 100%  fresh and heathy foods I selected and gave </p>
                    </div>
                    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                        <button className="btn cursor-pointer btn-warning">get start</button>
                    </div> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className='back-img'>
                        <img src={pic6} className="w-full rounded-xl"  />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-40">
                        <h1 className='text-6xl text-t font-bold text-white'>
                        Fresh Food Fresh Life...
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                        <p className='text-white text-p'>Fresh and feet equal healthy life <br /> So eat healthy foods , 100%  fresh and heathy foods I selected and gave.</p>
                    </div>
                    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                        <button className="btn btn-outline btn-warning">get start</button>
                    </div> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className='back-img'>
                        <img src={pic8} className="w-full rounded-xl"  />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-40">
                        <h1 className='text-6xl font-bold text-white text-t'>
                        Fresh Food Fresh Life
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                        <p className='text-white text-p'>LFresh and feet equal healthy life <br /> So eat healthy foods , 100%  fresh and heathy foods I selected and gave</p>
                    </div>
                    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                      
                        <button className="btn btn-outline btn-warning">get start</button>
                    </div> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        {/* <HomeFoodCard></HomeFoodCard> */}
        <LimitedCard></LimitedCard>
        <SectionOne></SectionOne>
        </div>
    );
};

export default Home;