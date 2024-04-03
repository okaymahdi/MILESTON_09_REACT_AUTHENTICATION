import { NavLink } from "react-router-dom";

import userDefaultPic from '../../../assets/user.png'

const Navbar = () => {
    /** nav menu */
    const navLinks = <>
        <li><NavLink className='font-normal text-lg no-underline text-[#706F6F]' to="/">Home</NavLink></li>
        <li><NavLink className='font-normal text-lg no-underline text-[#706F6F]' to="/about">About</NavLink></li>
        <li><NavLink className='font-normal text-lg no-underline text-[#706F6F]' to="/career">Career</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full mr-3">
                        <img alt="Tailwind CSS Navbar component" src={userDefaultPic} />
                    </div>
                </div>
                <NavLink>
                    <button className="btn">Login</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;