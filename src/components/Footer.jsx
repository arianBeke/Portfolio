import React from 'react'
import { Link} from 'react-router-dom';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w[1240px] mx-auto py-16 px-4 flex justify-center items-center text-gray-300 ">
        <div>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">ARIAN BEKE</h1>
                <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                <h6 className="font-medium text-gray-400 underline underline-offset-4 decoration-gray-400">Navigation</h6>
                <ul className="flex md:justify-between gap-6">
                    <li className="cursor-pointer py-2 text-sm hover:text-[#00df9a]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer py-2 text-sm hover:text-[#00df9a]">
                        <Link to="/AboutPage">About</Link>
                    </li>
                    <li className="cursor-pointer py-2 text-sm hover:text-[#00df9a]">
                        <Link to="/Skills">Skills</Link>
                    </li>
                    <li className="cursor-pointer py-2 text-sm hover:text-[#00df9a]">
                        <Link to="/ProjectsPage">Projects</Link>
                    </li>
                    <li className="cursor-pointer py-2 text-sm hover:text-[#00df9a]">
                        <Link to="/ContactPage">Contact</Link>
                    </li>
                </ul>
                </div>
                </div>
            <div className=" flex justify-between md:w-[75%] lg:w-[100%] my-6">
                <a href="https://www.instagram.com/arian.beke">
                    <FaInstagram className="hover:text-[#00df9a]" size={30} />
                </a>
                <a href="https://www.facebook.com/arian.beke">
                    <FaFacebookSquare className="hover:text-[#00df9a]" size={30} />
                </a>
                <a href="https://twitter.com/ArianBeke">
                    <FaTwitterSquare className="hover:text-[#00df9a]" size={30} />
                </a>
                <a href="https://github.com/arianBeke">
                    <FaGithubSquare className="hover:text-[#00df9a]" size={30} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer

