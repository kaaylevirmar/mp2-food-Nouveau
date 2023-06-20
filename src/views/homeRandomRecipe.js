import React,{useEffect, useState} from "react";
import 'firebase/firestore';

import AddToFavoritesLocalStorage from "../components/AddToFavoritesLocalStorage";

const RandomRecipe = () => {

// ====================================================1st Random
    const [foodApi1, getFoodApi1] = useState([]);
    const [popupInfoApi1, setPopupInfoApi1] = useState(false);
    useEffect(() => {
  
      fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((data) => getFoodApi1(data.meals));
    }, []);

    
    

  


// ====================================================2nd Random
    const [foodApi2, getFoodApi2] = useState([]);
    const [popupInfoApi2, setPopupInfoApi2] = useState(false);
    useEffect(() => {
  
      fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((data) => getFoodApi2(data.meals));
    }, []);




// ====================================================3rd Random    
    const [foodApi3, getFoodApi3] = useState([]);
    const [popupInfoApi3, setPopupInfoApi3] = useState(false);
    useEffect(() => {
  
      fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((data) => getFoodApi3(data.meals));
    }, []);



   
// ====================================================4th Random
    const [foodApi4, getFoodApi4] = useState([]);
    const [popupInfoApi4, setPopupInfoApi4] = useState(false);
    useEffect(() => {
  
      fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((data) => getFoodApi4(data.meals));
    }, []);

    return(
        <div>
            
            <h1 className="text-3xl text-center font-black sampleMenu pt-10">Sample Menu</h1>
            <div className="flex max-md:flex-col max-md:items-center gap-16 mt-5 justify-center">
                {/*================================================================================= 1st random div */}
                <div className="w-60 h-[350px]">
                    {foodApi1.map((food) => (
                        <div key={food.idMeal}>
                            <img className='rounded-lg' src={food.strMealThumb}alt='Food_Picture_API7'/>
                            <div className='h-16 flex justify-center'>
                                <div className='font-bold text-sm self-center text-center'>
                                    {food.strMeal}
                                </div>
                            </div>
                            <div className="justify-center flex">
                                <button onClick={()=>{ setPopupInfoApi1(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">
                                    Read More
                                </button>
                            </div>
                            {popupInfoApi1 && (
                                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                                    <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                                        <div className="flex">
                                            <div className="w-8/12">
                                                <h1 className="text-4xl">{food.strMeal}</h1>
                                            </div>
                                            <div className="self-end">
                                               <AddToFavoritesLocalStorage data={food}/>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <h3>
                                        <strong>Ingredients</strong>
                                        </h3>
                                        <div className="grid grid-cols-2">
                                            <div className="pl-5">
                                              <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                                              <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                                              <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                                              <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                                              <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                                              <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                                              <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                                              <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                                              <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                                              <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                                            </div>
                                            <div>
                                              <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                                              <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                                              <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                                              <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                                              <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                                              <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                                              <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                                              <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                                              <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                                              <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="pt-5">
                                              <strong>Instructions:</strong>
                                            </h3>
                                            <p className="indent-10 text-justify px-5">{food.strInstructions}</p>

                                            <h3 className="pt-5"><strong>Youtube:</strong></h3>
                                            <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>

                                            <h3 className="pt-5"><strong>Source:</strong></h3>
                                            <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                                            <h3 className="pt-5"> <strong>Image:</strong> </h3>
                                            <img className='w-80 h-80 ml-5 mt-3 rounded'src={food.strMealThumb} alt='Food_Picture_Search'/>
                                            <button onClick={() => {setPopupInfoApi1(false)}} className='absolute border border-black top-4 right-4 p-2 hover:bg-orange-600 hover:text-white rounded-lg bg-orange-500 font-bold'>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    
                </div >
                
                {/*================================================================================= 2nd random div */}

                <div className="w-60 h-[350px]">
                    {foodApi2.map((food) => (
                        <div key={food.idMeal}>
                            <img className='rounded-lg' src={food.strMealThumb}alt='Food_Picture_API7'/>
                            <div className='h-16 flex justify-center'>
                                <div className='font-bold text-sm self-center text-center'>
                                    {food.strMeal}
                                </div>
                            </div>
                            <div className="justify-center flex">
                                <button onClick={()=>{ setPopupInfoApi2(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">
                                    Read More
                                </button>
                             </div>
                            {popupInfoApi2 && (
                                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                                    <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                                        <div className="flex">
                                            <div className="w-8/12">
                                                <h1 className="text-4xl">{food.strMeal}</h1>
                                            </div>
                                            <div className="self-end">
                                            <AddToFavoritesLocalStorage data={food}/> 
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <h3>
                                        <strong>Ingredients</strong>
                                        </h3>
                                        <div className="grid grid-cols-2">
                                            <div className="pl-5">
                                              <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                                              <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                                              <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                                              <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                                              <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                                              <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                                              <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                                              <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                                              <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                                              <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                                            </div>
                                            <div>
                                              <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                                              <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                                              <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                                              <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                                              <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                                              <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                                              <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                                              <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                                              <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                                              <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="pt-5">
                                              <strong>Instructions:</strong>
                                            </h3>
                                            <p className="indent-10 text-justify px-5">{food.strInstructions}</p>

                                            <h3 className="pt-5"><strong>Youtube:</strong></h3>
                                            <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>

                                            <h3 className="pt-5"><strong>Source:</strong></h3>
                                            <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                                            <h3 className="pt-5"> <strong>Image:</strong> </h3>
                                            <img className='w-80 h-80 ml-5 mt-3 rounded'src={food.strMealThumb} alt='Food_Picture_Search'/>
                                            <button onClick={() => {setPopupInfoApi2(false)}} className='absolute border border-black top-4 right-4 p-2 hover:bg-orange-600 hover:text-white rounded-lg bg-orange-500 font-bold'>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                    {/*================================================================================= 3rd random div */}
                <div className="w-60 h-[350px]">
                    {foodApi3.map((food) => (
                        <div key={food.idMeal}>
                            <img className='rounded-lg' src={food.strMealThumb}alt='Food_Picture_API7'/>
                            <div className='h-16 flex justify-center'>
                                <div className='font-bold text-sm self-center text-center'>
                                    {food.strMeal}
                                </div>
                            </div>
                            <div className="justify-center flex">
                                <button onClick={()=>{ setPopupInfoApi3(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">
                                    Read More
                                </button>
                            </div>
                            {popupInfoApi3 && (
                                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                                    <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                                        <div className="flex">
                                            <div className="w-8/12">
                                                <h1 className="text-4xl">{food.strMeal}</h1>
                                            </div>
                                            <div className="self-end">
                                            <AddToFavoritesLocalStorage data={food}/> 
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <h3>
                                        <strong>Ingredients</strong>
                                        </h3>
                                        <div className="grid grid-cols-2">
                                            <div className="pl-5">
                                              <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                                              <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                                              <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                                              <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                                              <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                                              <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                                              <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                                              <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                                              <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                                              <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                                            </div>
                                            <div>
                                              <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                                              <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                                              <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                                              <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                                              <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                                              <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                                              <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                                              <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                                              <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                                              <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="pt-5">
                                              <strong>Instructions:</strong>
                                            </h3>
                                            <p className="indent-10 text-justify px-5">{food.strInstructions}</p>

                                            <h3 className="pt-5"><strong>Youtube:</strong></h3>
                                            <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>

                                            <h3 className="pt-5"><strong>Source:</strong></h3>
                                            <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                                            <h3 className="pt-5"> <strong>Image:</strong> </h3>
                                            <img className='w-80 h-80 ml-5 mt-3 rounded'src={food.strMealThumb} alt='Food_Picture_Search'/>
                                            <button onClick={() => {setPopupInfoApi3(false)}} className='absolute border border-black  top-4 right-4 p-2 hover:bg-orange-600 hover:text-white rounded-lg bg-orange-500 font-bold'>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/*================================================================================= 4th random div */}
                <div className="w-60 h-[350px]">
                    {foodApi4.map((food) => (
                        <div key={food.idMeal}>
                            <img className='rounded-lg' src={food.strMealThumb}alt='Food_Picture_API7'/>
                            <div className='h-16 flex justify-center'>
                                <div className='font-bold text-sm self-center text-center'>
                                    {food.strMeal}
                                </div>
                            </div>
                            <div className="justify-center flex">
                                <button onClick={()=>{ setPopupInfoApi4(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">
                                    Read More
                                </button>
                            </div>
                            {popupInfoApi4 && (
                                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                                    <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                                        <div className="flex">
                                            <div className="w-8/12">
                                                <h1 className="text-4xl">{food.strMeal}</h1>
                                            </div>
                                            <div className="self-end">
                                            <AddToFavoritesLocalStorage data={food}/> 
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <h3>
                                        <strong>Ingredients</strong>
                                        </h3>
                                        <div className="grid grid-cols-2">
                                            <div className="pl-5">
                                              <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                                              <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                                              <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                                              <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                                              <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                                              <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                                              <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                                              <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                                              <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                                              <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                                            </div>
                                            <div>
                                              <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                                              <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                                              <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                                              <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                                              <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                                              <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                                              <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                                              <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                                              <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                                              <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="pt-5">
                                              <strong>Instructions:</strong>
                                            </h3>
                                            <p className="indent-10 text-justify px-5">{food.strInstructions}</p>

                                            <h3 className="pt-5"><strong>Youtube:</strong></h3>
                                            <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>

                                            <h3 className="pt-5"><strong>Source:</strong></h3>
                                            <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                                            <h3 className="pt-5"> <strong>Image:</strong> </h3>
                                            <img className='w-80 h-80 ml-5 mt-3 rounded'src={food.strMealThumb} alt='Food_Picture_Search'/>
                                            <button onClick={() => {setPopupInfoApi4(false)}} className='absolute border border-black  top-4 right-4 p-2 hover:bg-orange-600 hover:text-white rounded-lg bg-orange-500 font-bold'>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            
           
            </div>
            
        </div>
    )
}

export default RandomRecipe;

