import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link} from 'react-router-dom';



function Hero() {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
            <p className='text-[#00df9a] text-3xl font-bold p-2'>
            Welcome!
            </p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">With<span className="text-[#00df9a]"> 1</span> year of experience</h1>
            <div className="flex justify-center items-center p-3">
                <TypeAnimation
                    className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4"
                    sequence={[
                        'Im able todo fast and effective work for HTML.',
                        2000,
                        'Im able todo fast and effective work for CSS.',
                        2000,
                        'Im able todo fast and effective work for JS.',
                        2000,
                        'Im able todo fast and effective work for React.',
                        2000,
                        'Im able todo fast and effective work for Python.',
                        2000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </div>
            <div className='p-10'>
                <Link to="/AboutPage">
                    <button className="w-[200px] h-[50px] bg-[#00df9a] text-black rounded-md hover:bg-gray-700  hover:text-[#00df9a] ">Get Started</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero