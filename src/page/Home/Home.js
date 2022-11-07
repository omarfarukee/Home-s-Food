import React from 'react';
import pic1 from '../../image/pic1.jpg'
import pic3 from '../../image/pic3.jpg'
import pic4 from '../../image/pexels-rajesh-tp-1600711.jpg'
import ('./Home.css')
const Home = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='back-img'>
                        <img src={pic1} className="w-full rounded-xl"/>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                        <h1 className='text-6xl font-bold text-white'>
                        your <br/>
                         good<br/>
                          food
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nemo voluptatem quam quas sint, vel iusto consequuntur culpa maxime sapiente voluptatibus.</p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
                        <button className="btn btn-outline btn-success mr-5">Success</button>
                        <button className="btn btn-outline btn-warning">Warning</button>
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
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                        <h1 className='text-6xl font-bold text-white'>
                            The Genius Card <br />
                            your best friend
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nemo voluptatem quam quas sint, vel iusto consequuntur culpa maxime sapiente voluptatibus.</p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
                        <button className="btn btn-outline btn-success mr-5">Success</button>
                        <button className="btn btn-outline btn-warning">Warning</button>
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
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                        <h1 className='text-6xl font-bold text-white'>
                            the best <br />
                            ever ypu need
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nemo voluptatem quam quas sint, vel iusto consequuntur culpa maxime sapiente voluptatibus.</p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
                        <button className="btn btn-outline btn-success mr-5">Success</button>
                        <button className="btn btn-outline btn-warning">Warning</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;