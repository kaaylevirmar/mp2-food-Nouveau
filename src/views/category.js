import React, { useEffect, useState } from "react";
import 'firebase/firestore';

import Closebutton from '../images/icons8-close-48.png';
import GreaterThan from '../images/icons8-greater-than-50.png';
import AddToFavoritesLocalStorage from "../components/AddToFavoritesLocalStorage";

const Category = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryStage, setCategoryStage] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);

  const [showInfo, setShowInfo] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);



  // const closePopup = () => {
  //   setShowInfo(false);
  //   setSelectedFood(null);
  // };

  const toggleCategoryFood = async (catStage) => {
    setShowInfo(!showInfo);
    setSelectedFood(catStage);
    setCategoryFoodUrl(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${catStage.idMeal}`)
  }

  const [categoryFoodUrl, setCategoryFoodUrl] = useState(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52959`);


 
  useEffect(() => {    
    fetch(categoryFoodUrl)
    .then(response => response.json())
    .then(data => {
      setCategoryInfo(data.meals);
    });
   
  },[categoryFoodUrl]);
  
  



const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCategoryStage(data.meals)
        });
      
  }, [url])

  return (
    <div className=" 2xl:w-52 2xl:h-40 sm:w-44 sm:h-32 w-32">
      <div className="text-center">
        <div className="bg-orange-200/60 rounded">
        <img onClick={()=> setIsOpen(true)} src={category.strCategoryThumb} alt="categories" className="rounded-lg border-2 border-black"/>
        </div>
        <div className="font-bold" onClick={()=> setIsOpen(true)}>{category.strCategory}</div>
      </div>

      {isOpen && 
        <div className="fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo">
          <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
          <div className="flex justify-between text-white my-1">
                      Category
                      <button
                        className='hover:bg-orange-100 rounded-full font-bold '
                        onClick={()=>{setIsOpen(false)}}>
                      <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
            </div>
          <div className="p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black">
            <div className="flex justify-center">
              <div className="text-center">
                <img src={category.strCategoryThumb} alt="categories" className="rounded-lg"/>
                <h1 className="text-4xl pb-5">{category.strCategory}</h1>
                
              </div>
              
            </div>
            <div className="flex justify-center">
            <hr className="w-[1000px] text-center"></hr>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-wrap mt-10 gap-10 justify-center border-8 bg-white border-double border-black w-[1050px] py-10">
                {categoryStage.map(catStage =>(
            
                  <div key={catStage.idMeal}>

                    <div className="h-80">

                      <div className="text-center flex flex-col justify-center w-52">
                        <img src={catStage.strMealThumb} alt="Modal images" className="rounded-lg border-2 border-black "/>

                        <div className="h-16 flex justify-center">
                          <p className="font-bold text-sm mb-2 self-center text-center">{catStage.strMeal}</p>
                        </div>
                      </div>
                    
                      <div>
                    <div className="justify-center flex" onClick={()=>toggleCategoryFood(catStage)}>
                      <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500">
                        <button className=" px-1 font-bold text-xs 2xl:text-sm ">Read More</button>
                        <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                      </div>
                    </div>
                  </div>
  
                    </div>
                    {showInfo && selectedFood === catStage && ( 
                      <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                        <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
                        <div className="flex justify-between text-white my-1">
                        Recipe Info
                        <button
                        className='hover:bg-orange-100 rounded-full font-bold '
                        onClick={()=>{setShowInfo(false)}}>
                        <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
                        </div>

                        {categoryInfo.map((categoryDiv) =>
                          <div key={categoryDiv.idMeal} className='p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black'>
                            <div className="flex">
                              <div className="w-8/12">
                                <h1 className="text-4xl">{categoryDiv.strMeal}</h1>
                              </div>
                              <div className="self-end ">
                              <AddToFavoritesLocalStorage data={categoryDiv}/>
                              </div>
                            </div>
                            <hr></hr>
                            <h3>
                              <strong>Ingredients:</strong>
                            </h3>

                            <div className="grid grid-cols-2">
                              <div className="pl-5">
                                <p><span className="font-medium">{categoryDiv.strIngredient1}</ span> - {categoryDiv.strMeasure1}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient2}</ span> - {categoryDiv.strMeasure2}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient3}</ span> - {categoryDiv.strMeasure3}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient4}</ span> - {categoryDiv.strMeasure4}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient5}</ span> - {categoryDiv.strMeasure5}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient6}</ span> - {categoryDiv.strMeasure6}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient7}</ span> - {categoryDiv.strMeasure7}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient8}</ span> - {categoryDiv.strMeasure8}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient9}</ span> - {categoryDiv.strMeasure9}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient10}  </span> - {categoryDiv.strMeasure10}</p>
                              </div >
                              <div>
                                <p><span className="font-medium">{categoryDiv.strIngredient11}</span> - {categoryDiv.strMeasure11}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient12}</span> - {categoryDiv.strMeasure12}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient13}</span> - {categoryDiv.strMeasure13}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient14}</span> - {categoryDiv.strMeasure14}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient15}</span> - {categoryDiv.strMeasure15}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient16}</span> - {categoryDiv.strMeasure16}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient17}</span> - {categoryDiv.strMeasure17}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient18}</span> - {categoryDiv.strMeasure18}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient19}</span> - {categoryDiv.strMeasure19}</p>
                                <p><span className="font-medium">{categoryDiv.strIngredient20}</span> - {categoryDiv.strMeasure20}</p>
                              </div>
                            </div>
                            <div>
                              <h3 className="pt-5">
                                <strong strong>Instructions:</strong>
                              </h3>
                              <p className="indent-10 text-justify px-5">{categoryDiv.strInstructions}</p>

                              <h3 className="pt-5">
                                <strong>Youtube:</strong>
                              </h3>
                              <a href={categoryDiv.strYoutube} target="_blank" rel="noreferrer"className="ml-5 hover:underline ">{categoryDiv.strYoutube}</a>

                              <h3 className="pt-5">
                              <strong>Source:</strong>
                              </h3>
                              <a href={categoryDiv.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{categoryDiv.strSource}</a>

                              <h3 className="pt-5">
                                <strong>Image:</strong>
                              </h3>
                              <img
                                className='w-80 h-80 ml-5 mt-3 rounded'
                                src={categoryDiv.strMealThumb}
                                alt="Food_Picture_Search"
                              />
                        
                            </div>
                          
                          </div>
                        )}
                      </div>
                      </div>
                    )}
                  </div>               
                ))}
              </div>
            </div>
          </div>
        
          
        </div>
        </div>
      }
    
    </div>
  )
      
}
export default Category;