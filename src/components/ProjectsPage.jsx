import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import epsilon from '../assets/Epsilon.png';


const projects = [
    {
      name: 'Epsilon',
      type: 'Web Project, made with HTML, CSS and JavaScript.',
      imageUrl: epsilon,
    },
  ]

const ProjectsPage = () => {
    useEffect(() => {
        document.title = 'Projects';
    }, []);
    return (
        <>
        <Navbar />
        <div name='skills' className='w-full h-screen text-gray-300'>
        {/* Container */}
        <div className=' mt-32 max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-[500px]'>
            <div className=" mt-28">
                <p className='text-4xl font-bold inline border-b-4 border-[#00df9a] '>Projects</p>
                <p className='py-4 font-medium'> These are some of my latest projects: </p>
            </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projects.map((projects) => (
            <li key={projects.name}>
              <img className=" w-full ring-2 ring-[#00df9a] rounded-2xl object-cover" src={projects.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#00df9a]">{projects.name}</h3>
              <p className="text-base leading-7 text-gray-300">{projects.type}</p>
              <button className=" duration-300 mt-4 w-[300px] h-[50px] bg-[#00df9a] text-black rounded-md hover:bg-gray-700  hover:text-[#00df9a] ">Get Hub</button>
            </li>
          ))}
        </ul>
        </div>
        </div>
        <div className="mt-16"></div>
        <Footer />
        </>
    );
    };

    export default ProjectsPage;