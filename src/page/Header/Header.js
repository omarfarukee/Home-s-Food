import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import { FaUserAlt} from 'react-icons/fa'
import { AuthContext } from '../../ContextProvider/ContextProvider';
import pic from '../../image/pngwing.com (4).png'
import ('../Home/Home.css')
const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }
    const headItems = <>
        <li className='lg:pt-5'><Link to='/home'>Home</Link></li>
      { user?.email ? <li className='lg:pt-5'><Link to='/review'>My-review</Link></li>: <></> }
        <li className='lg:pt-5'><Link to='/blog'>Blog</Link></li>

{    user?.email ? <li className='lg:pt-5'><Link to='/add'>Add Item</Link></li> : <></>
}        
       

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
                    <Link to='/' className="btn btn-ghost mb-3"><img className='h-16 h-img' src={pic} alt="" /><span className='text-2xl font-bold h-food'> Home's Food </span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {headItems}
                    </ul>
                </div>
                <div className="navbar-end pt-3 pr-3">
                {
        user?.email ?<button  onClick={handleLogOut} className='btn btn-sm mr-1 bg-green-500 mt-1 log-out'>Log-out</button>:
        <Link to='/register'><button className='btn btn-sm mr-1 bg-green-500 mt-1 reg-btn'>Register</button></Link>
        }
        {
        user?.email ?<></>:
        <Link to='/login'><button className='btn btn-sm mr-1 bg-green-500 mt-1 log-btn'>Login</button></Link>
        }
                    {
                        user?.email ? <p><img className='h-10 mask mask-circle h-u-img w-9' title={user?.displayName} src={user.photoURL} alt="" /></p>:
                        <FaUserAlt></FaUserAlt>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;