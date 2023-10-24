import React from 'react'
import Laptop from '../assets/laptop.jpg'
import { Link} from 'react-router-dom';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
            <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold">PROJECTS</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Some Of My Past Work</h1>
                <p className="">
                    My past work has consisted of a lot of different projects. I have worked with HTML, CSS, JS, React, Python and more. 
                </p>
                <Link to="/ProjectsPage">
                  <button className="w-[200px] my-6 mx-auto md:mx-x py-3 font-medium h-[50px] bg-[#00df9a] text-black rounded-md hover:bg-gray-700  hover:text-[#00df9a] ">Read</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Analytics