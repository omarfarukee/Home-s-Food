import React from 'react';
import pic1 from '../../image/pic1.jpg'
import pic3 from '../../image/pic3.jpg'
import pic4 from '../../image/pexels-rajesh-tp-1600711.jpg'
import HomeFoodCard from '../HomeFoodCard/HomeFoodCard';
import ('./Home.css')
const Home = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='back-img'>
                        <img src={pic1} className="w-full rounded-xl"/>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 top-40 left-24">
                        <div className=''>
                        <h1 className='text-6xl text-center font-bold text-white'>
                                good for health
                        </h1>
                        </div>
                      
                    </div>
                    <div className="absolute  transform -translate-y-1/2 top-1/3 left-24">
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nemo voluptatem quam quas sint, vel iusto consequuntur culpa maxime sapiente voluptatibus.</p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                        <button className="btn cursor-pointer btn-warning">get start</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className='back-img'>
                        <img src={pic4} className="w-full rounded-xl"  />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-40">
                        <h1 className='text-6xl font-bold text-white'>
                        good food for you
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nemo voluptatem quam quas sint, vel iusto consequuntur culpa maxime sapiente voluptatibus.</p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                        <button className="btn btn-outline btn-warning">get start</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className='back-img'>
                        <img src={pic3} className="w-full rounded-xl"  />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-40">
                        <h1 className='text-6xl font-bold text-white'>
                            the best
                            ever you need
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nemo voluptatem quam quas sint, vel iusto consequuntur culpa maxime sapiente voluptatibus.</p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                      
                        <button className="btn btn-outline btn-warning">get start</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        <HomeFoodCard></HomeFoodCard>
        </div>
    );
};

export default Home;