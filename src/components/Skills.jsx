import React, { useEffect } from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import Python from '../assets/python.png';
import Svelte from '../assets/svelte.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Skills = () => {
    useEffect(() => {
        document.title = 'Skills';
    }, []);
    return (
        <>
        <Navbar />
        <div name='skills' className='w-full mt-32 h-screen text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#00df9a] '>Skills</p>
                <p className='py-4 font-medium'> These are the technologies I've worked with: </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-8'>
                <div className='shadow-md rounded-lg bg-gray-600/20  border-white/90 border-4  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-3 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4 text-white'>HTML</p>
                </div>
                <div className='shadow-md  rounded-lg  bg-gray-600/20  border-white/90 border-4 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-3 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4 text-white'>CSS</p>
                </div>
                <div className='shadow-md  rounded-lg  bg-gray-600/20  border-white/90 border-4  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-3 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4 text-white'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md  rounded-lg  bg-gray-600/20  border-white/90 border-4  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-3 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4 text-white'>REACT</p>
                </div>
                <div className='shadow-md  rounded-lg  bg-gray-600/20  border-white/90 border-4  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-3 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4 text-white'>TAILWIND</p>
                </div>
                <div className='shadow-md  rounded-lg  bg-gray-600/20 border-white/90 border-4  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-3 mx-auto' src={Svelte} alt="HTML icon" />
                    <p className='my-4 text-white'>SVELTE</p>
                </div>
                <div className='shadow-md  rounded-lg  bg-gray-600/20 border-white/90 border-4  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-3 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4 text-white'>GITHUB</p>
                </div>
                <div className='shadow-md  rounded-lg  bg-gray-600/20 border-white/90 border-4  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-3 mx-auto' src={Python} alt="HTML icon" />
                    <p className='my-4 text-white'>PYTHON</p>
                </div>
            </div>
        </div>
        </div>
        <div className="mt-16"></div>
        <Footer />
        </>
    );
    };

    export default Skills;