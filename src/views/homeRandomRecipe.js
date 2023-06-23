import React,{useEffect, useState} from "react";
import 'firebase/firestore';
import Closebutton from '../images/icons8-close-48.png';
import GreaterThan from '../images/icons8-greater-than-50.png';

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
        <div className="w-full ">
            
            <h1 className="2xl:text-4xl md:text-2xl text-xl text-center font-black sampleMenu pt-5">Sample Menu</h1>
            <div className="flex flex-wrap gap-4 min-[360px]:gap-4 2xl:gap-16 mt-5 justify-center">
                {/*================================================================================= 1st random div */}
                <div>
                    {foodApi1.map((food) => (
                        <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                            <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                                <img className='w-32 h-32 2xl:w-56 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black' src={food.strMealThumb}alt='Food_Picture_API1'/>
                                <div className='h-16 flex justify-center'>
                                    <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                                        {food.strMeal}
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center flex">
                                <div className="flex border-2 border-orange-500 text-orange-500 rounded-lg hover:text-white hover:bg-orange-500 bg-white" >
                                    <button onClick={()=>{ setPopupInfoApi1(true)}} className=" px-1 font-bold text-xs 2xl:text-sm ">Read More </button>
                                    <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                                </div>
                            </div>
                            {popupInfoApi1 && (
                                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                                <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
                                <div className="flex justify-between text-white my-1">
                                Recipe Info
                                <button className='hover:bg-orange-100 rounded-full font-bold '
                                onClick={() => {
                                    setPopupInfoApi1(false);
                                    }}>
                                <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                                </button>
                                </div>
                                    <div className='p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black'>
                                        <div className="flex justify-between mt-5">
                                            <div className="w-8/12 self-end">
                                                <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                                            </div>
                                            <div className="self-end">
                                               <AddToFavoritesLocalStorage data={food}/>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <h3>
                                        <strong>Ingredients</strong>
                                        </h3>
                                        <div className="grid grid-cols-2 text-xs 2xl:text-[15px]">
                                            <div className="pl-5">
                                                <p className="2xl:my-1"><span className="font-bold ">{food.strIngredient1}</span> {food.strMeasure1}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient2}</span> {food.strMeasure2}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient3}</span> {food.strMeasure3}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient4}</span> {food.strMeasure4}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient5}</span> {food.strMeasure5}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient6}</span> {food.strMeasure6}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient7}</span> {food.strMeasure7}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient8}</span> {food.strMeasure8}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient9}</span> {food.strMeasure9}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient10}</span> {food.strMeasure10}</p>
                                            </div>
                                            <div className="pl-5">
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient11}</span> {food.strMeasure11}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient12}</span> {food.strMeasure12}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient13}</span> {food.strMeasure13}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient14}</span> {food.strMeasure14}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient15}</span> {food.strMeasure15}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient16}</span> {food.strMeasure16}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient17}</span> {food.strMeasure17}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient18}</span> {food.strMeasure18}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient19}</span> {food.strMeasure19}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient20}</span> {food.strMeasure20}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg pt-5">
                                              <strong>Instructions:</strong>
                                            </h3>
                                            {food.strInstructions.split('. ').map((instruction, idx) => {
                                             if (instruction.match(/^\d+\.\s/)) {
                                            // Instruction starts with a number followed by a dot and a space
                                            const instructionWithoutNumber = instruction.replace(/^\d+\.\s/, '');
                                             return <li key={idx}>{instructionWithoutNumber}</li>;
                                                 } else {
                                             return <li key={idx}>{instruction}</li>;
                                              }
                                                 })}

                                            

                                            <h3 className="text-lg pt-5"><strong>Youtube:</strong></h3>
                                            <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>

                                            <h3 className="text-lg pt-5"><strong>Source:</strong></h3>
                                            <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                                            <h3 className="pt-5"> <strong>Image:</strong> </h3>
                                            <div className="flex justify-center md:justify-start">
                                                <img className='w-80 h-80 mt-3 rounded'src={food.strMealThumb} alt='Food_Picture_Search'/>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    
                </div >
                
                {/*================================================================================= 2nd random div */}

                <div>
                    {foodApi2.map((food) => (
                        <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                            <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                                <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black' src={food.strMealThumb}alt='Food_Picture_API2'/>
                                <div className='h-16 flex justify-center'>
                                    <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                                        {food.strMeal}
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center flex">
                            <div className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500" >
                                    <button onClick={()=>{ setPopupInfoApi2(true)}} className=" px-1 font-bold text-xs 2xl:text-sm ">Read More </button>
                                    <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                                </div>
                             </div>
                            {popupInfoApi2 && (
                                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                                <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
                                    <div className="flex justify-between text-white my-1 ">
                                        Recipe Info
                                        <button className='hover:bg-orange-100 rounded-full font-bold '
                                        onClick={() => {
                                        setPopupInfoApi2(false);
                                        }}>
                                        <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                                        </button>
                                    </div>
                                    <div className='p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black'>
                                        <div className="flex justify-between mt-5">
                                            <div className="w-8/12 self-end">
                                                <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                                            </div>
                                            <div className="self-end">
                                            <AddToFavoritesLocalStorage data={food}/> 
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <h3>
                                        <strong>Ingredients</strong>
                                        </h3>
                                        <div className="grid grid-cols-2 text-xs 2xl:text-[15px]">
                                            <div className="pl-5">
                                                <p className="2xl:my-1"><span className="font-bold ">{food.strIngredient1}</span> {food.strMeasure1}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient2}</span> {food.strMeasure2}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient3}</span> {food.strMeasure3}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient4}</span> {food.strMeasure4}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient5}</span> {food.strMeasure5}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient6}</span> {food.strMeasure6}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient7}</span> {food.strMeasure7}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient8}</span> {food.strMeasure8}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient9}</span> {food.strMeasure9}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient10}</span> {food.strMeasure10}</p>
                                            </div>
                                            <div className="pl-5">
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient11}</span> {food.strMeasure11}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient12}</span> {food.strMeasure12}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient13}</span> {food.strMeasure13}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient14}</span> {food.strMeasure14}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient15}</span> {food.strMeasure15}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient16}</span> {food.strMeasure16}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient17}</span> {food.strMeasure17}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient18}</span> {food.strMeasure18}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient19}</span> {food.strMeasure19}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient20}</span> {food.strMeasure20}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg pt-5">
                                              <strong>Instructions:</strong>
                                            </h3>
                                            {food.strInstructions.split('. ').map((instruction, idx) => {
                                             if (instruction.match(/^\d+\.\s/)) {
                                            // Instruction starts with a number followed by a dot and a space
                                            const instructionWithoutNumber = instruction.replace(/^\d+\.\s/, '');
                                             return <li key={idx}>{instructionWithoutNumber}</li>;
                                                 } else {
                                             return <li key={idx}>{instruction}</li>;
                                              }
                                                 })}

                                            

                                            <h3 className="text-lg pt-5"><strong>Youtube:</strong></h3>
                                            <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>

                                            <h3 className="text-lg pt-5"><strong>Source:</strong></h3>
                                            <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                                            <h3 className="pt-5"> <strong>Image:</strong> </h3>
                                            <div className="flex justify-center md:justify-start">
                                                <img className='w-80 h-80 mt-3 rounded'src={food.strMealThumb} alt='Food_Picture_Search'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                    {/*================================================================================= 3rd random div */}
                <div>
                    {foodApi3.map((food) => (
                        <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                            <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                            <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black' src={food.strMealThumb}alt='Food_Picture_API3'/>
                            <div className='h-16 flex justify-center'>
                                <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                                    {food.strMeal}
                                </div>
                            </div>
                            </div>
                            <div className="justify-center flex">
                                <div className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500" >
                                    <button onClick={()=>{ setPopupInfoApi3(true)}} className=" px-1 font-bold text-xs 2xl:text-sm ">Read More </button>
                                    <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                                </div>
                            </div>
                            {popupInfoApi3 && (
                                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                                    <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
                                    <div className="flex justify-between text-white my-1 ">
                                Recipe Info
                                <button className='hover:bg-orange-100 rounded-full font-bold '
                                onClick={() => {
                                    setPopupInfoApi3(false);
                                    }}>
                                <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                                </button>
                                </div>
                                    <div className='p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black'>
                                        <div className="flex justify-between mt-5">
                                            <div className="w-8/12 self-end">
                                                <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                                            </div>
                                            <div className="self-end">
                                            <AddToFavoritesLocalStorage data={food}/> 
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <h3>
                                        <strong>Ingredients</strong>
                                        </h3>
                                        <div className="grid grid-cols-2 text-xs 2xl:text-[15px]">
                                        <div className="pl-5">
                                                <p className="2xl:my-1"><span className="font-bold ">{food.strIngredient1}</span> {food.strMeasure1}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient2}</span> {food.strMeasure2}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient3}</span> {food.strMeasure3}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient4}</span> {food.strMeasure4}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient5}</span> {food.strMeasure5}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient6}</span> {food.strMeasure6}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient7}</span> {food.strMeasure7}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient8}</span> {food.strMeasure8}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient9}</span> {food.strMeasure9}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient10}</span> {food.strMeasure10}</p>
                                            </div>
                                            <div className="pl-5">
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient11}</span> {food.strMeasure11}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient12}</span> {food.strMeasure12}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient13}</span> {food.strMeasure13}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient14}</span> {food.strMeasure14}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient15}</span> {food.strMeasure15}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient16}</span> {food.strMeasure16}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient17}</span> {food.strMeasure17}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient18}</span> {food.strMeasure18}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient19}</span> {food.strMeasure19}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient20}</span> {food.strMeasure20}</p>
                                            </div>
                                        </div>
                                        <div>
                                        <h3 className="text-lg pt-5">
                                              <strong>Instructions:</strong>
                                            </h3>
                                            {food.strInstructions.split('. ').map((instruction, idx) => {
                                             if (instruction.match(/^\d+\.\s/)) {
                                            // Instruction starts with a number followed by a dot and a space
                                            const instructionWithoutNumber = instruction.replace(/^\d+\.\s/, '');
                                             return <li key={idx}>{instructionWithoutNumber}</li>;
                                                 } else {
                                             return <li key={idx}>{instruction}</li>;
                                              }
                                                 })}

                                            

                                            <h3 className="text-lg pt-5"><strong>Youtube:</strong></h3>
                                            <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>

                                            <h3 className="text-lg pt-5"><strong>Source:</strong></h3>
                                            <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                                            <h3 className="pt-5"> <strong>Image:</strong> </h3>
                                            <div className="flex justify-center md:justify-start">
                                                <img className='w-80 h-80 mt-3 rounded'src={food.strMealThumb} alt='Food_Picture_Search'/>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/*================================================================================= 4th random div */}
                <div>
                    {foodApi4.map((food) => (
                        <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                            <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                                <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black' src={food.strMealThumb}alt='Food_Picture_API4'/>
                                <div className='h-16 flex justify-center'>
                                    <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                                        {food.strMeal}
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center flex">
                            <div className="flex border-2 border-orange-500 text-orange-500 rounded-lg hover:text-white hover:bg-orange-500 bg-white " >
                                    <button onClick={()=>{ setPopupInfoApi4(true)}} className=" px-1 font-bold text-xs 2xl:text-sm ">Read More </button>
                                    <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                                </div>
                            </div>
                            {popupInfoApi4 && (
                                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                                    <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
                                    <div className="flex justify-between text-white my-1">
                                Recipe Info
                                <button className='hover:bg-orange-100 rounded-full font-bold '
                                onClick={() => {
                                    setPopupInfoApi4(false);
                                    }}>
                                <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                                </button>
                                </div>
                                    <div className='p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black'>
                                        <div className="flex justify-between mt-5">
                                            <div className="w-8/12 self-end">
                                                <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                                            </div>
                                            <div className="self-end">
                                            <AddToFavoritesLocalStorage data={food}/> 
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <h3>
                                        <strong>Ingredients</strong>
                                        </h3>
                                        <div className="grid grid-cols-2 text-xs 2xl:text-[15px]">
                                            <div className="pl-5">
                                                <p className="2xl:my-1"><span className="font-bold ">{food.strIngredient1}</span> {food.strMeasure1}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient2}</span> {food.strMeasure2}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient3}</span> {food.strMeasure3}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient4}</span> {food.strMeasure4}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient5}</span> {food.strMeasure5}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient6}</span> {food.strMeasure6}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient7}</span> {food.strMeasure7}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient8}</span> {food.strMeasure8}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient9}</span> {food.strMeasure9}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient10}</span> {food.strMeasure10}</p>
                                            </div>
                                            <div className="pl-5">
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient11}</span> {food.strMeasure11}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient12}</span> {food.strMeasure12}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient13}</span> {food.strMeasure13}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient14}</span> {food.strMeasure14}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient15}</span> {food.strMeasure15}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient16}</span> {food.strMeasure16}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient17}</span> {food.strMeasure17}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient18}</span> {food.strMeasure18}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient19}</span> {food.strMeasure19}</p>
                                                <p className="2xl:my-1"><span className="font-bold">{food.strIngredient20}</span> {food.strMeasure20}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg pt-5">
                                              <strong>Instructions:</strong>
                                            </h3>
                                            {food.strInstructions.split('. ').map((instruction, idx) => {
                                             if (instruction.match(/^\d+\.\s/)) {
                                            // Instruction starts with a number followed by a dot and a space
                                            const instructionWithoutNumber = instruction.replace(/^\d+\.\s/, '');
                                             return <li key={idx}>{instructionWithoutNumber}</li>;
                                                 } else {
                                             return <li key={idx}>{instruction}</li>;
                                              }
                                                 })}

                                            <h3 className="text-lg pt-5"><strong>Youtube:</strong></h3>
                                            <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>

                                            <h3 className="text-lg pt-5"><strong>Source:</strong></h3>
                                            <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                                            <h3 className="pt-5"> <strong>Image:</strong> </h3>
                                            <div className="flex justify-center md:justify-start">
                                                <img className='w-80 h-80 mt-3 rounded'src={food.strMealThumb} alt='Food_Picture_Search'/>
                                            </div>
                                        </div>
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

