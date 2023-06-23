import React,{useState} from 'react';
import 'firebase/firestore';
import db from "../firebase-config";
import AddresIcon from '../images/icons8-location-50.png';
import PhoneIcon from '../images/icons8-phone-50.png';
import EmailIcon from '../images/icons8-email-48.png';
import NewsLetterIcon from '../images/icons8-email-50.png';
import FacebookIcon from '../images/icons8-fb-50.png';
import TwitterIcon from '../images/icons8-twitter-50.png';
import InstagramIcon from '../images/icons8-instagram-50.png';
import GithubIcon from '../images/icons8-github-50.png';


const Footer = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [emailSend, setEmailSend] = useState(false)
    const [emailPlaceholder, setEmailPlaceholder] = useState('Enter email address...');

    const handleEmailChange = (e) => {
      const enteredEmail = e.target.value;
      setEmail(enteredEmail);
    
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValid(emailRegex.test(enteredEmail));
    };

    const isSendEmail = async () => {

      const querySnapshot = await db
      .collection("UserEmail")
      .where("email", "==", email)
      .get();

        if(!querySnapshot.empty){
          setEmail("");
          setEmailPlaceholder("Already Exists");
          document.getElementById("emailAdd").style.border = "4px solid red";
    

        }else if(email ===""){
          
          setEmailPlaceholder("Email address is required");
          document.getElementById("emailAdd").style.border = "4px solid red";
        } else if(isValid) {

          db.collection("UserEmail").add({

            email: email
          })
         setEmailSend(true);
         setEmail("");
         document.getElementById("emailAdd").style.border = "";
         setEmailPlaceholder('Enter email address...');
         setTimeout(() => {
            setEmailSend(false)
         }, 2000)
        } else {
          setEmail("");
          setEmailPlaceholder('Invalid Email Address');
          document.getElementById("emailAdd").style.border = "4px solid red";
        }
      }

    return (
      <>
      <footer className="bg-orange-500 py-2">
        <div className="md:grid md:grid-cols-3">
          {/* First Grid */}
            <div className="p-5 border-r-2 border-orange-300">
                <div className="text-left flex font-bold homeSubscribe">
                    <div>Food <span className="text-white font-bold">Nouveau</span></div>
                </div>
                <div className="pt-2 text-white">
                  <ul className="flex gap-2">
                    <li className="border-r-2 border-black pr-1">Home</li>
                    <li className="border-r-2 border-black pr-1">Recipes</li>
                    <li className="border-r-2 border-black pr-1">Favorites</li>
                    <li className="pr-1">Add Recipes</li>             
                  </ul>
                </div>
              
                <div className=" text-left flex items-center mt-2">
                   
                      <input type="email" name="emailAddress" value={email} id='emailAdd' className="rounded-l-lg pl-2" size={30} onChange={handleEmailChange} placeholder={emailPlaceholder}/>
               
                 
                      <button onClick={isSendEmail}><img src={NewsLetterIcon} alt="News Letter Icon"  className="w-8 h-8 "/></button>
                    
                </div>
                <div className="text-left flex text-white mt-1">Copyright © 2023</div>
          </div>

          {/* Second Grid */}
          <div className=" p-5 border-r-2 border-orange-300 text-white">
             <div className="text-left flex "><img src={AddresIcon} alt="Address icon" className="w-8 h-8 mt-2 mr-2"/>444 S. Sakahan Ave <br/> Brgy Kalye, San Pedro, Nueva Ecija</div>
             <div className="text-left pt-2 flex"><img src={PhoneIcon} alt="Phone icon" className="w-8 h-8 mt-2 mr-2 "/><span className="pt-3">+1.555.555.5555</span></div>
             <div className="text-left pt-2 flex"><img src={EmailIcon} alt="Email add" className="w-8 h-8 mt-2 mr-2"/><span className='pt-3'>support@FoodNouveau.com</span></div>
          </div>
       
          {/* Third Grid */}
          <div className="p-5 text-white">
              <div className="text-left text-xl font-bold">About the company</div>
              <div className="text-left text-sm indent-6 pt-2 text-justify">We built this system to help other people to serve their delicious food to their loved ones and to be more efficient with their cooking skills. We provide a lot of recipes that can help you improve your knowledge about foods.</div>
              <div className='flex justify-center gap-4 pt-3'><img src={FacebookIcon} alt='Facebook Icon' className="w-8 h-8 mt-2 mr-2"/><img src={TwitterIcon} alt='Facebook Icon' className="w-8 h-8 mt-2 mr-2"/><img src={InstagramIcon} alt='Facebook Icon' className="w-8 h-8 mt-2 mr-2"/><img src={GithubIcon} alt='Facebook Icon' className="w-8 h-8 mt-2 mr-2"/></div>
          </div>
            {emailSend && (
            <div className='w-screen h-screen border bg-white/60 text-white modalHome'>
                <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded'>Email Sent</div>
            </div>
                
                )}
        </div>
     </footer>
      </>
    )
};
export default Footer;