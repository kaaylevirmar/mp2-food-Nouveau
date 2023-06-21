
import React,{useEffect, useState} from "react";
import logoImg from "../logo-spoon.png";
import RandomRecipe from "./homeRandomRecipe";
import Category from "./category";
import Modal from "./homeModal";
import FeaturedRecipes from "./FeaturedRecipes";


const Home = () => {
  const [openModal, setOpenModal] = useState(true);
  const [categories, getFoodCategory] = useState([]);
  


 
  useEffect(() => {

    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((data) => getFoodCategory(data.categories));
  }, []);
  
  return (

  <div className=" flex bg-orange-200/60 pb-10 overflow-x-hidden" >
      <div className="justify-self-center w-full">
        
        <div className="text-center">

          <div className=" flex mt-10 justify-center">
              <img src={logoImg} alt='This is a logo' className="h-28 w-28 md:w-40 md:h-40 2xl:h-52 2xl:w-52"/>
              <div className="p-4">
                <p className="text-sm md:text-base 2xl:text-5xl min-[360]:text-[8px] ">Welcome to <span className="logoFontFam">Food <span className="text-orange-500">Nouveau</span></span></p>
                <p className="md:text-sm text-xs font-semibold pt-10">We serve you a lot of recipe here at our website.</p>
                <p className="md:text-sm text-xs font-semibold">We preferred also a lot of recipes around the world.</p>
                
              </div>
              <img src={logoImg} alt='This is a logo' className="h-28 w-28 md:w-40 md:h-40 2xl:h-52 2xl:w-52"/>

              
          </div>  
          <div className="w-full flex justify-center mt-4">
          <hr className="w-[70%]" ></hr>
        </div>
          {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="flex flex-wrap md:gap-10 min-[360px]:gap-5 2xl:gap-20 w-screen 2xl:w-4/5 border-8 md:w-11/12 justify-center bg-white border-double border-black min-[360px]:mb-10">
            <RandomRecipe/>
        
            <FeaturedRecipes/>

        

           
            <div className="">
              <div className=" flex justify-center w-full mt-2">
                <hr className=" w-[80%]"/>
              </div>
              <h1 className="text-center 2xl:text-4xl md:text-2xl text-xl font-black mt-5 md:mt-5 2xl:mt-5 sampleMenu">Categories</h1>
              <div className="flex justify-center flex-wrap gap-5 mt-10 pb-10">
                {categories.map(category => (
                  <Category key={category.idCategory} category={category} />
                ))}
              </div>
            </div>
        </div>
        </div>
      </div>
          
     
  </div>
)}

export default Home;
