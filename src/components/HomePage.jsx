import React, { useEffect } from 'react';
import Navbar from './Navbar'
import Hero from './Hero'
import Analytics from './Analytics'
import Footer from './Footer'



export default function HomePage() {
  useEffect(() => {
    document.title = 'Home'; // Replace 'New Title Here' with your desired title
  }, []);

  return (
    <>
      <Navbar /> 
      <Hero />
      <Analytics />
      <Footer />
    </>
  )
}


