import React from 'react'
import { useState } from 'react';
import 'firebase/firestore';
import db from "../firebase-config";

const Modal = ({ setOpenModal }) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [emailSend, setEmailSend] = useState(false);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setInput(enteredEmail);

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(enteredEmail));
  };
  
  
  const sendEmail = () => {
    if (input === '') {
      console.log('Email is required');
    } else if (isValid) {
         db.collection("UserEmail").add({

        email: input
      })
      setEmailSend(true);
      setTimeout(() => {
       setOpenModal(false)
      }, 2000)
      console.log('Submitted');
    } else {
      alert('Invalid Email');
    }
   

 
  }

  return (
    <div className='w-screen h-screen border bg-white/60 text-white modalHome'>
      {!emailSend &&
      <div className='w-96 h-68 bg-orange-500/90 p-6 modalHomeEmail drop-shadow-2xl rounded'>
        <h3 className='text-2xl'>Subscribe to our newsletter</h3>
        <div className='pt-5 text-justify indent-4 text-xl'>
          
          An email will be send to you everyweek for updates.
        </div>
        
        <div className='pt-3'>
          
          <label className='pr-2'>Email address:</label>
          <input
              type='email'
              placeholder='Email'
              className='border-2 border-black px-2 rounded text-black'
              onChange={handleEmailChange}
              name='email'
              id='email'
              />
        
        </div>

        <div className='p-2'>
          <button className='mr-20 p-2 mt-4 border border-black rounded-lg bg-black/90 hover:bg-white hover:text-black ' onClick={sendEmail}>
              Subscribe
          </button>
          <button className='p-2 mt-4 border border-black rounded-lg bg-black/90 hover:bg-white hover:text-black' onClick={() => {
          setOpenModal(false);
          }}>
            Cancel
          </button>
        </div>
      </div>}
    {emailSend &&
       
      <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded'>
        <div>Email Sent</div>
      </div>}
      
    </div>
  );
};

export default Modal;
