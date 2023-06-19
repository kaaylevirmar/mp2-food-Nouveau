
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

  <div className=" flex bg-orange-300 pb-10 overflow-x-hidden" >
      <div className="justify-self-center ">
        
        <div className="text-center h-64">

          <div className=" flex mt-10 justify-center">
              <img src={logoImg} alt='This is a logo' className="logoImg"/>
              <div className=" max-md:text-sm max-md:flex max-md:flex-col p-4">
                <p className="welcomeFN">Welcome to <span className="logoFontFam">Food Nouveau</span></p>
                <p className="md:text-base font-semibold pt-10">We serve you a lot of recipe here at our website.</p>
                <p className="md:text-base font-semibold">We preferred also a lot of recipes around the world.</p>
                
              </div>
              <img src={logoImg} alt='This is a logo' className="logoImg"/>
          </div>  
          {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
        </div>
        <div className="w-screen flex justify-center">
          <hr className=" w-[1000px]"/>
        </div>
        <div className="flex justify-center">
          <div className="border-8 w-4/5 mt-10 bg-white/50 border-double border-black">
            <RandomRecipe/>
        
            <FeaturedRecipes/>

        
        
            <div className=" flex justify-center">
              <hr className="mt-4 w-[1200px]"/>
            </div>

            <h1 className="text-center text-3xl font-black sampleMenu mt-5">Categories</h1>
            <div className="flex justify-center flex-wrap gap-5 mt-10 pb-10">
              {categories.map(category => (
              <Category key={category.idCategory} category={category} />
             ))}
            </div>

        </div>
        </div>
      </div>
          
     
  </div>
)};

export default Home;
