import React from 'react'
import { useState, useEffect } from 'react'
import TranshIcon from '../images/icons8-trash-64.png';
import GreaterThan from '../images/icons8-greater-than-50.png';
import Closebutton from '../images/icons8-close-48.png';

const Favorites = () => {
  const [data, setData] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const toggleFood = (food) => {
    setShowInfo(!showInfo);
    setSelectedFood(food);
  };

  const closePopup = () => {
    setShowInfo(false);
    setSelectedFood(null);
  };


  useEffect(() => {
    // Load favorites from local storage when the component mounts
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setData(JSON.parse(storedFavorites));
    }
  }, []);

  const [nullData, setNullData] = useState(false);

  useEffect(()=>{
    dataChecking();
  });

const dataChecking = (()=>{
  if(data.length === 0){
    setNullData(true);
  } else{
    setNullData(false);
  }
})


  const[favoriteDelete, setFavoriteDelete] = useState(false)
 

    const handleDeleteYes = (index) => {
      const existingData = JSON.parse(localStorage.getItem('favorites'));

      // Check if data exists and perform deletion
      if (existingData) {
        // Remove the item at the specified index using splice
        existingData.splice(index, 1);
    
        // Update the modified data in local storage
        localStorage.setItem('favorites', JSON.stringify(existingData));
        setData(existingData);
        setFavoriteDelete(true)
        setTimeout(() => {
          setFavoriteDelete(false)
        }, 2000);
      }
  
    
    };
    
    
    const [deleteAlert, setDeleteAlert] = useState(false);
    
    const deleteAlertDiv = (food) => {
        setDeleteAlert(true);
        setSelectedFood(food);
      
    };


  
  return (
  <div className=' flex justify-center pb-10 bg-orange-200/60 h-full '>
        
    <div className="w-full ">
      <div className='py-5'>
        <h1 className='text-4xl text-center py-5 favoriteDiv font-bold'>Favorites</h1>
        <div className='w-full flex justify-center'>
            <hr className='w-[55%]'></hr>
        </div>
      </div>

      
    
      <div className='flex w-full mt-10 justify-center'>
        <div className="flex flex-wrap md:gap-10 gap-4 2xl:gap-16 w-full 2xl:w-4/5 border-8 md:w-11/12 justify-center bg-white border-double border-black py-10">
          
          {data.map((food,index) => ( 
            
            <div key={index} className="h-60 md:h-72 2xl:h-80">
              <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black' src={food.strMealThumb} alt='food'/>
                <div className='h-16 flex justify-center'>
                  <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                    {food.strMeal}
                  </div>
                </div>
              </div>
              
              <div className="text-center flex justify-center gap-3">
                <div className=" flex items-center" onClick={()=>toggleFood(food)}>
                  <div className="flex border-2 border-orange-500 text-orange-500 rounded-lg hover:text-white hover:bg-orange-500">
                    <button className=" px-1 font-bold sm:text-xs 2xl:text-sm text-[10px] ">Read More</button>
                    <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                  </div>
                </div>
                <div  className='border border-black flex items-center hover:bg-orange-300 border-2 rounded-lg border-orange-500'>
                  <img src={TranshIcon} alt='trash' className='w-6' onClick={() => deleteAlertDiv(food.strMeal)}/>
                </div>
              </div>

              

              {/* ============================================================ALERT */}
              {deleteAlert && selectedFood === food.strMeal && (
                <div className='w-full h-full border bg-black/20 modalHome '>
                  <div className='2xl:h-[25%] / xl:w-[25%] xl:h-[25%] / lg:w-[40%] lg:h-[25%] / sm:w-[50%] sm:h-[25%] / w-[75%] h-[20%] / bg-white drop-shadow-2xl border-4 border-orange-600 text-orange-600 font-bold rounded-md text-center modalHomeEmail / text-xs / 2xl:text-base / sm:text-sm / flex justify-center items-center' >
                    <div className='px-2'>
                      <p>Do you want to delete {food.strMeal} on favorite?</p>
                      <div className=' text-white flex justify-center 2xl:text-base lg: gap-10'>
                        <button className=' p-1 px-3 mt-4 / lg:border-4 md:border-2 border / border-orange-600 / text-orange-600 font-bold / rounded-xl / hover:bg-orange-600 hover:text-white hover:border-white' onClick={() => handleDeleteYes(index)}>Yes</button> 
                        <button className='p-1 mt-4 / lg:border-4 md:border-2 border / border-orange-600 / text-orange-600  font-bold / rounded-xl / hover:bg-orange-600 hover:text-white px-3 hover:border-white' onClick={() =>  setDeleteAlert(false)}>No</button>
                      </div>
                      </div>
                  </div>
                </div> 
              )}
              {/*============================================================alert */}
              
                  

              {showInfo && selectedFood === food && (
                <div className='fixed bg-slate-950/50 w-full h-screen rounded drop-shadow-lg randomInfo'>
                  <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
                    <div className="flex justify-between text-white my-1 ">
                        Recipe Info
                      <button className='hover:bg-orange-100 rounded-full font-bold 'onClick={closePopup}>
                        <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5  hover:border-black"/> 
                      </button>
                    </div>
                    <div className='p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto  border border-black'>
                      <div className="flex justify-between mt-5">
                        <div className="w-8/12 self-end">
                          <h1 className="text-2xl 2xl:text-4xl font-semibold">{food.strMeal}</h1>
                        </div>                             
                      </div>
        
                      <hr></hr>
                      <h3>
                      <strong>Ingredients</strong>
                      </h3>
                      <div className="grid grid-cols-2 text-xs 2xl:text-[15px] xl:text-[14px] lg:text-[14px] md:text- [14px] sm:text-[13px] mt-2">
                        <div className="pl-5">
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient1}</span> {food.strMeasure1}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient2}</span> {food.strMeasure2}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient3}</span> {food.strMeasure3}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient4}</span> {food.strMeasure4}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient5}</span> {food.strMeasure5}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient6}</span> {food.strMeasure6}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient7}</span> {food.strMeasure7}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient8}</span> {food.strMeasure8}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient9}</span> {food.strMeasure9}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient10}</span>  {food.strMeasure10}</p>
                        </div>
                        <div className="pl-5">
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient11}</span>  {food.strMeasure11}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient12}</span>  {food.strMeasure12}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient13}</span>  {food.strMeasure13}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient14}</span>  {food.strMeasure14}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient15}</span>  {food.strMeasure15}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient16}</span>  {food.strMeasure16}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient17}</span>  {food.strMeasure17}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient18}</span>  {food.strMeasure18}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient19}</span>  {food.strMeasure19}</p>
                          <p className="2xl:my-1"><span className="font-bold pr-2">{food.strIngredient20}</span>  {food.strMeasure20}</p>
                        </div>
                      </div>
                      <div>
                      <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base font-bold   pb-2 mt-5">Instructions:</h3>
                      <ul className="text-xs 2xl:text-[15px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-  [13px] list-disc pl-5">
                        {food.strInstructions.split('. ').map((instruction, idx) => {
                          if (instruction.match(/^\d+\.\s/)) {
                            // Instruction starts with a number followed by a dot and a space
                            const instructionWithoutNumber = instruction.replace(/^\d+\.\s/, '');
                            return <li key={idx}>{instructionWithoutNumber}</li>;
                          } else {
                            return <li className="pb-2" key={idx}>{instruction}</li>;
                          }
                        })}
                      </ul>
                      <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base font-bold   pb-2 mt-5">Youtube:</h3>
                      <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline  text-xs 2xl:text-[15px]">{food.strYoutube}</a>

                      <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base font-bold   pb-2 mt-5">Source:</h3>
                      <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline   text-xs 2xl:text-[15px]">{food.strSource}</a>

                      <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base font-bold   pb-2 mt-5">Image:</h3>
                      <div className="flex justify-center md:justify-start">
                        <img className='w-80 h-80 mt-3 rounded border-2 border-black pl:5' src={food.strMealThumb} alt='Food_Picture_Search'/>
                      </div>
                      
                    </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        
         
                {favoriteDelete && (
                  <div className='w-full h-full border bg-black/20 text-orange-600 modalHome'>
                  <div className='lg:w-[25%] / md:w-[40%] / sm:w-[45%] sm:h-[10%] / w-[50%] h-[10%] / md:text-base sm:text-sm text-xs / bg-white p-2 drop-shadow-2xl rounded-md border-4 border-orange-600 flex items-center font-bold justify-center modalHomeEmail'>
                      You successfully delete.
                  </div>
                </div>
              )}

          {nullData && 
          <div className='h-full py-10 flex justify-center items-center '>
              <p className='2xl:text-5xl text-xl p-9'>No Added Favorites</p>
          </div>
          }

        
        </div>

      </div>
       
    </div>
                
  </div>
  )
}

export default Favorites;
