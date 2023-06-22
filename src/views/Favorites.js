import React from 'react'
import { useState, useEffect } from 'react'



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
  <div className=' flex justify-center pb-10 bg-orange-300 h-full overflow-x-hidden'>
        
    <div className="w-[1600px]">

      <div className='py-5'>
        <h1 className='text-4xl text-center py-5 favoriteDiv font-bold'>Favorites</h1>
        <div className='w-[1600px] flex justify-center'>
          <div >
            <hr></hr>
          </div>
        </div>
      </div>

      
    
      <div className='flex justify-center mt-5 '>
        <div className="flex flex-wrap gap-20 p-20 w-4/5 border-8 justify-center bg-white/50 border-double border-black">
          {data.map((food,index) => ( 
            
            <div key={index} className='w-52 h-80'>
              <div>
                <img className='w-52 h-52 rounded-lg' src={food.strMealThumb} alt='food'/>
                <div className='h-16 flex justify-center'>
                  <div className='font-bold text-sm text-center self-center'>
                    {food.strMeal}
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-4 gap-4 flex justify-center">

                <button onClick={() => deleteAlertDiv(food.strMeal)} className='border px-2 rounded-lg bg-orange-500 hover:bg-orange-600 hover:text-white font-bold'>Delete</button>

                <button onClick={()=> toggleFood(food)} className="p-2 hover:bg-orange-600 hover:text-white rounded-lg bg-orange-500 font-bold">Read More</button>
              </div>

              

{/* ============================================================alert */}
              {deleteAlert && selectedFood === food.strMeal && (
                <div className='w-[1600px] h-screen border bg-white/60 text-white modalHome '>

                  <div className='w-96 h-68 bg-black/90 p-6 drop-shadow-2xl rounded text-center modalHomeEmail'>
                    Do you want to delete {food.strMeal} on favorite?
                      <div className='flex justify-center gap-20 mt-10'>
                        <button onClick={() => handleDeleteYes(index)}>Yes</button> 
                        <button onClick={() =>  setDeleteAlert(false)}>No</button>
                      </div>
                  </div>
                </div> 
              )}

              
{/* ============================================================alert */}

              {showInfo && selectedFood === food && (
                <div className='fixed bg-slate-950/50 w-[1600px] h-screen rounded drop-shadow-lg randomInfo'>
                  <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                    <h1 className="text-4xl">{food.strMeal.toUpperCase()}</h1>
                    <hr></hr>
                    <h3>
                      <strong>Ingredients</strong>
                    </h3>
                    <div className="grid grid-cols-2">
                      <div className="pl-5">
                        <p><span className="font-medium">{food.strIngredient1}</ span> - {food.strMeasure1}</p>
                        <p><span className="font-medium">{food.strIngredient2}</ span> - {food.strMeasure2}</p>
                        <p><span className="font-medium">{food.strIngredient3}</ span> - {food.strMeasure3}</p>
                        <p><span className="font-medium">{food.strIngredient4}</ span> - {food.strMeasure4}</p>
                        <p><span className="font-medium">{food.strIngredient5}</ span> - {food.strMeasure5}</p>
                        <p><span className="font-medium">{food.strIngredient6}</ span> - {food.strMeasure6}</p>
                        <p><span className="font-medium">{food.strIngredient7}</ span> - {food.strMeasure7}</p>
                        <p><span className="font-medium">{food.strIngredient8}</ span> - {food.strMeasure8}</p>
                        <p><span className="font-medium">{food.strIngredient9}</ span> - {food.strMeasure9}</p>
                        <p><span className="font-medium">{food.strIngredient10}  </span> - {food.strMeasure10}</p>
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

                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer"className="ml-5 hover:underline ">{food.strYoutube}</a>

                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt="Food_Picture_Search"
                        />
                        <button
                        className=' absolute border border-black p-2 top-4  right-4  hover:bg-orange-600 hover:text-white rounded-lg bg-orange-500 font-bold'
                        onClick={closePopup}>
                          {" "}
                        Close
                        </button>
                    </div>
                  </div>
                  
                </div>
              )}
            </div>
          ))}
        
         
                {favoriteDelete && (
                  <div className='w-[1600px] h-screen border bg-white/60 text-white modalHome'>
                  <div className='w-96 bg-black/90 p-6 drop-shadow-2xl rounded text-center modalHomeEmail'>
                      You successfully delete.
                  </div>
                </div>
              )}
        </div>

      </div>
       
    </div>
                
  </div>
  )
}

export default Favorites
