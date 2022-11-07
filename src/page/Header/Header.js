import React from 'react';
import {Link} from 'react-router-dom'
import pic from '../../image/pngwing.com (4).png'
const Header = () => {
    const headItems = <>
        <li className='lg:pt-5'><Link to='/home'>Home</Link></li>
        {/* {
      user?.email ? <p className='pt-8 pl-2'>{user.email}</p>:<p className='pt-8 pl-2'>user not login</p>} */}

    </>
    return (
        <div className=''>
            <div className="navbar bg-base-300 text-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-52">
                            {headItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost mb-3"><img className='h-16 ' src={pic} alt="" /><span className='text-2xl font-bold'> Home's Food </span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {headItems}
                    </ul>
                </div>
                <div className="navbar-end pt-5">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;