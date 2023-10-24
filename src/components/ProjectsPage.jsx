import React, { useEffect } from 'react';
import HTML from '../assets/html.png';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectsPage = () => {
    useEffect(() => {
        document.title = 'Projects';
    }, []);
    return (
        <>
        <Navbar />
        <div name='skills' className='w-full h-screen text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-[500px]'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#00df9a] '>Projects</p>
                <p className='py-4 font-medium'> These are some of my latest projects: </p>
            </div>
            <div className='w-full grid  grid-cols-2 sm:grid-cols-1 gap-8 text-center py-8'>
                <div className='shadow-md rounded-lg bg-gray-600/20  border-white/90 border-4  shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-3 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4 text-white'>HTML</p>
                </div>
            </div>
        </div>
        </div>
        <div className="mt-16"></div>
        <Footer />
        </>
    );
    };

    export default ProjectsPage;