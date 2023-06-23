import React from "react";
import { useState } from "react";
import "firebase/firestore";
import db from "../firebase-config";
import logoImg from "../logo-spoon.png";


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

  const [inValidEmailAdd, setInvalidEmailAdd] = useState(false);
  const [nullEmail, setNullEmail] = useState(false);
  const [alreadyExist, setAlreadyExist] = useState(false);

  const sendEmail = async () => {
    const querySnapshot = await db
      .collection("UserEmail")
      .where("email", "==", input)
      .get();

    if(!querySnapshot.empty){
      setAlreadyExist(true);
      setInvalidEmailAdd(false);
      setNullEmail(false);
    } else if (input === '') {
      setNullEmail(true);
      setInvalidEmailAdd(false);
      setAlreadyExist(false);
    } else if (isValid) {
      db.collection("UserEmail").add({
        email: input,
      });
      setEmailSend(true);
      setTimeout(() => {
        setOpenModal(false);
        setEmailSend(false);
      }, 2000);
      console.log("Submitted");
    } else {
      setInvalidEmailAdd(true);
      setNullEmail(false);
      setAlreadyExist(false);
    }
  }

  return (
    <div className='w-full h-full border bg-black/70 text-white modalHome'>
      {!emailSend && (
        <div className='2xl:w-[35%] xl:w-[38%] lg:w-[38%] w-[80%] h-68 bg-white/100 text-black modalHomeEmail drop-shadow-2xl rounded border border-black/90'>
          <div className='p-2 m-2 2xl:px-20 xl:px-20 lg:px-8 border border-black flex justify-between items-center bg-orange-500 text-black font-bold modalLogoName'>
            <img
              src={logoImg}
              alt='logo'
              className='w-[20%] 2xl:w-20 lg:w-20 xl:w-20 '
            />
            <div className=''>
              <p className='text-3xl'>
                {" "}
                Food <span className='text-white'>Nouveau</span>
              </p>
            </div>
            <img
              src={logoImg}
              alt='logo'
              className='w-[20%] 2xl:w-20 lg:w-20 xl:w-20'
            />
          </div>
          <h3 className='text-2xl mt-4 text-orange-500 font-bold'>
            Newsletter
          </h3>

          <div className='pt-5 px-6 text-center indent-4 2xl:text-lg text-sm  text-orange-600'>
            An email will be sent to you everyweek for more updates.
          </div>

          <div>
            <div className='pt-3'>
              <input
                type='email'
                placeholder='Enter email address... '
                className='border-2 border-orange-400 px-2 w-60 rounded text-black py-1 bg-orange-200 font-semibold '
                onChange={handleEmailChange}
                name='email'
                id='email'
              />
            </div>
            {inValidEmailAdd && (
              <span className='text-red-500'>--Invalid email address--</span>
            )}
            {nullEmail && (
              <span className='text-red-500'>
                --Please input email address--
              </span>
            )}
            {alreadyExist&&
              <span className='text-red-500'>--This email is already exist--</span>
            }
          </div>
          <div className='p-2 text-white mb-2 flex justify-center gap-4'>
            <button
              className=' p-1 px-3 mt-4 border-4 border-orange-600  text-orange-600 font-bold rounded-xl hover:bg-orange-600 hover:text-white '
              onClick={sendEmail}>
              Send
            </button>
            <button
              className='p-1 mt-4 border-4 border-orange-600 text-orange-600 font-bold rounded-xl hover:bg-orange-600 hover:text-white'
              onClick={() => {
                setOpenModal(false);
              }}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {emailSend && (
        <div className='flex justify-center items-center w-[60%] h-[80%] p-6 modalHomeSent'>
          <div className='2xl:w-[50%] 2xl:h-[25%] / xl:w-[50%] xl:h-[23%] / lg:w-[60%] lg:h-[23%] / border flex items-center justify-center z-10 bg-white border-4 border-orange-600 rounded-lg thankYouModal'>
            <div className='text-black '>
              <p className='2xl:text-5xl / xl:text-4xl / lg:text-3xl font-bold text-orange-600'>
                You're in!
              </p>
              <p className='text-base'>Thanks for becoming a subscriber!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
