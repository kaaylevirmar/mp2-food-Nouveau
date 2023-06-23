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
        <div className="fixed bg-slate-950/50 w-full h-full rounded drop-shadow-lg randomInfo">
          <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
          <div className="flex justify-between text-white my-1">
                      Category
                      <button
                        className='hover:bg-orange-100 rounded-full font-bold '
                        onClick={()=>{setIsOpen(false)}}>
                      <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
            </div>
          <div className="w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black">
            <div className="flex justify-center">
              <div className="text-center">
                <img src={category.strCategoryThumb} alt="categories" className="rounded-lg"/>
                <h1 className="text-4xl pb-5">{category.strCategory}</h1>
                
              </div>
              
            </div>
            <div className="flex justify-center mb-5">
              <hr className="w-[70%] text-center"></hr>
            </div>
            <div className="flex justify-center w-full menuMainDiv">
              <div className="flex flex-wrap md:gap-10 gap-4 2xl:gap-16 w-full 2xl:w-4/5 border-8 md:w-11/12 justify-center bg-white border-double border-black py-10 px-1 mb-10">
                
                {categoryStage.map(catStage =>(
            
                  <div key={catStage.idMeal} className="h-60 md:h-72 2xl:h-80">

                    

                      <div className="text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72">
                        <img src={catStage.strMealThumb} alt="Modal images" className="w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black"/>

                        <div className="h-16 flex justify-center">
                          <div className="font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center">{catStage.strMeal}</div>
                        </div>
                      </div>
                    
                      <div>
                        <div className="justify-center flex" >
                          <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2    hover:text-white hover:bg-orange-500">
                            <button className="px-1 font-bold text-xs 2xl:text-sm" onClick={()=>toggleCategoryFood(catStage)}>Read More</button>
                            <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100    cursor-pointer rounded-r-md"/>
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
                            <div className="flex justify-between mt-5">
                              <div className="w-8/12 self-end">
                                <h1 className="text-2xl 2xl:text-4xl font-semibold">{categoryDiv.strMeal}</h1>
                              </div>
                              <div className="self-end ">
                              <AddToFavoritesLocalStorage data={categoryDiv}/>
                              </div>
                            </div>
                              <hr></hr>
                              <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base font-bold">Ingredients:</h3>
                              <div className="grid grid-cols-2 text-xs 2xl:text-[15px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[13px] mt-2">
                                <div className="pl-5">
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient1}</span> {categoryDiv.strMeasure1}</p>
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient2}</span> {categoryDiv.strMeasure2}</p>
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient3}</span> {categoryDiv.strMeasure3}</p>
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient4}</span> {categoryDiv.strMeasure4}</p>
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient5}</span> {categoryDiv.strMeasure5}</p>
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient6}</span> {categoryDiv.strMeasure6}</p>
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient7}</span> {categoryDiv.strMeasure7}</p>
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient8}</span> {categoryDiv.strMeasure8}</p>
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient9}</span> {categoryDiv.strMeasure9}</p>
                                  <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient10}</span> {categoryDiv.strMeasure10}</p>
                                </div>
                                <div className="pl-5">
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient11}</span> {categoryDiv.strMeasure11}</p>
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient12}</span> {categoryDiv.strMeasure12}</p>
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient13}</span> {categoryDiv.strMeasure13}</p>
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient14}</span> {categoryDiv.strMeasure14}</p>
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient15}</span> {categoryDiv.strMeasure15}</p>
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient16}</span> {categoryDiv.strMeasure16}</p>
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient17}</span> {categoryDiv.strMeasure17}</p>
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient18}</span> {categoryDiv.strMeasure18}</p>
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient19}</span> {categoryDiv.strMeasure19}</p>
                                    <p className="2xl:my-1"><span className="font-bold pr-2">{categoryDiv.strIngredient20}</span> {categoryDiv.strMeasure20}</p>
                                </div>
                              </div>
                            <div>
                            <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base font-bold pb-2 mt-5">Instructions:</h3>
                            <ul className="text-xs 2xl:text-[15px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[13px] list-disc pl-5">
                              {categoryDiv.strInstructions.split('. ').map((instruction, idx) => {
                                 if (instruction.match(/^\d+\.\s/)) {
                                // Instruction starts with a number followed by a dot and a space
                                const instructionWithoutNumber = instruction.replace(/^\d+\.\s/, '');
                                 return <li key={idx}>{instructionWithoutNumber}</li>;
                                     } else {
                                 return <li key={idx}>{instruction}</li>;
                                  }
                                     })}

                            </ul>

                            <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base font-bold pb-2 mt-5">Youtube:</h3>
                              <a href={categoryDiv.strYoutube} target="_blank" rel="noreferrer"className="ml-5 hover:underline text-xs 2xl:text-[15px]">{categoryDiv.strYoutube}</a>

                              <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base font-bold pb-2 mt-5">Source:</h3>
                              <a href={categoryDiv.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{categoryDiv.strSource}</a>

                              <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base font-bold pb-2 mt-5">Image:</h3>
                              <div className="flex justify-center md:justify-start">
                                <img className='w-80 h-80 mt-3 rounded border-2 border-black pl:5' src={categoryDiv.strMealThumb} alt="Food_Picture_Search"
                              />
                              </div>
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