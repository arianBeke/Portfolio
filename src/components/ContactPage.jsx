import React, { useEffect, useRef } from 'react'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ct55m5j', 'template_hzo7pam', form.current, '_IIrUMrBB8zFIgQK7') 
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message successfully sent!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Message failed to send.');
        }
      );
  };

  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <>
      <Navbar />
      <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00df9a] text-gray-300'>Contact</p>
            <p className='text-gray-400 py-4'>Submit the form below or send me an email: <span className="text-[#00df9a]">arianbeke2@gmail.com</span></p>
            <p className='text-gray-400'>Phonenumber: <span className="text-[#00df9a]">+47 977 25 120</span></p>
          </div>
          <input className='bg-gray-700 p-2 text-white' type="text" placeholder='Name' name='from_name' />
          <input className='my-4 p-2 bg-gray-700 text-white' type="email" placeholder='Email' name='email_id' />
          <textarea className='bg-gray-700 p-2 text-white' name="message" rows="10" placeholder='Message'></textarea>
          <button type="submit" value="Send" className='text-black font-medium rounded-md bg-[#00df9a] hover:bg-gray-700 hover:text-[#00df9a] px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
        <ToastContainer /> {/* Add the ToastContainer component */}
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
