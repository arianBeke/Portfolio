import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link} from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    };

   
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">ARIAN BEKE</h1>
        <ul className="hidden md:flex">
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
                <Link to="/">Home</Link>
            </li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
                <Link to="/AboutPage">About</Link>
            </li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
                <Link to="/Skills">Skills</Link>
            </li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
                <Link to="/ProjectsPage">Projects</Link>
            </li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
                <Link to="/ContactPage">Contact</Link>
            </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? "fixed left-0 top-0 w[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%] ease-in-out"}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">ARIAN BEKE</h1>

            <ul className="pt-4 uppercase">
                <li className="p-4 cursor-pointer border-b hover:text-[#00df9a] border-gray-600">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-4 border-b hover:text-[#00df9a] cursor-pointer border-gray-600">
                    <Link to="/AboutPage">About</Link>
                </li>
                <li className="p-4 border-b hover:text-[#00df9a] cursor-pointer border-gray-600">
                    <Link to="/Skills">Skills</Link>
                </li>
                <li className="p-4 border-b hover:text-[#00df9a] cursor-pointer border-gray-600">
                    <Link to="/ProjectsPage">Projects</Link>
                </li>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer'>
                    <Link to="/ContactPage">Contact</Link>
                </li>
            </ul>
        </div>  
    </div>
  )
}

export default Navbar
