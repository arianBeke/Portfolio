import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Arian from '../assets/Arian.png'
import Footer from './Footer';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About'; 
  }, []);

  return (
    <>
    <Navbar />
    <div name='about' className='w-full pt-56 h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-14'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00df9a]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Nice to meet you! My name is <span className="text-[#00df9a]">Arian Beke</span>.</p>
            </div>
            <div className="mt-2">
              <p>Im a <span className="text-[#00df9a]">16 year old</span> boy from Norway who loves web development. 
              Im currently studing IT at <span className="text-[#00df9a]">Elvebakken Highschool</span> and my dream is
              to become a successful <span className="text-[#00df9a]">web</span> and <span className="text-[#00df9a]">app</span> developer.</p>  
            </div>
          </div>
          <img className="w-[500px] mx-auto mt-6" src={Arian} alt="/"/>
      </div>
    </div>
    <div className="mt-48">
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;