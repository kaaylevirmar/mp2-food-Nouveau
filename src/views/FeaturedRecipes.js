import React from 'react'
import { useState, useEffect } from 'react';
import db from "../firebase-config";

const FeaturedRecipes = () => {

    const [isfood, setFood] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [isOpenFeatured, setOpenFeatured] = useState(false);
  
    const toggleFood = (food) => {
      setShowInfo(!showInfo);
      setSelectedFood(food);
    };
  
    const closePopup = () => {
      setShowInfo(false);
      setSelectedFood(null);
    };
    useEffect(() => {
      db.collection("food")
        .orderBy("datetime", "desc")
        .onSnapshot((snapshot) => {
          setFood(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                foodName: doc.data().foodName,
                foodCountry: doc.data().foodCountry,
                foodCategory: doc.data().foodCategory,
                foodIngredients: doc.data().foodIngredients,
                foodSummary: doc.data().foodSummary,
                image: doc.data().images,
                datetime: doc.data().datetime,
              };
            })
          );
        });
    }, []);

    const [deleteThisFeatures, setDeleteThisFeatures] = useState(false);

    const randomItems = isfood.slice(0,4);

    const [data, setData] = useState([]);


    const [foodFilterDelete, setFoodFilterDelete] = useState();
   

    const deleteAlert = ((food) => {
      setDeleteThisFeatures(true);
      setFoodFilterDelete(food);
    
      
    })



    const [deleteSuccess, setDeleteSuccess] = useState(false);




    const handleDelete = (id) => {
      
      // Delete the document with the specified ID
      db.collection("food").doc(id).delete().then(() => {
        console.log(`Document with ID ${id} deleted successfully.`);
        // Update the data state to reflect the deletion
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        setDeleteThisFeatures(false);
        setDeleteSuccess(true)
        
        setTimeout(()=>{
          setDeleteSuccess(false);
        },2000)
        
      }).catch(error => {
        console.error("Error deleting document: ", error);
      });
    };
      
    
    

  return (

    <div className='flex justify-center mt-5'>
      <div>
        <hr></hr>
        <h1 className='text-3xl text-center font-bold sampleMenu pt-5'>Featured Recipes</h1>
       
        <div className='rounded-md flex flex-wrap w-[1000px] gap-5 justify-center  mt-10 '>
         
            {randomItems.map((food) => (
              <div key={food.id} className='w-52 h-80'>
                <div>
                  <img
                    className='w-52 h-48 rounded-lg' src={food.image} alt='food'/>
                  <div className='h-16 flex justify-center'>
                    <div className='font-bold text-sm text-center self-center'>
                      {food.foodName.toUpperCase()}
                    </div>
                  </div>
                </div>
               
                <div className="text-center mb-4 gap-4 flex justify-center">
                  <button onClick={()=>toggleFood(food)} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                </div>

                {showInfo && selectedFood === food && (
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                    <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12'>
                      <h1 className="text-4xl">{food.foodName.toUpperCase()}</h1>
                      <hr className='mb-5'></hr>
                      <div>
                        <h3><strong>Country:</strong></h3>
                        <p className="pl-5">{food.foodCountry}</p>
                      </div>
                      <div>
                        <h3><strong>Category:</strong></h3>
                        <p className="pl-5">{food.foodCategory}</p>
                      </div>
                      <h3><strong>Ingredients:</strong></h3>
                      
                      <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.foodIngredients}</span> </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="text-justify px-5">{food.foodSummary}</p>
                        <h3 className="pt-5"><strong>Image:</strong></h3>
                        <img className='w-52 h-48 ml-5 mt-3 rounded-lg'src={food.image} alt='Food'/>
                        <button className=' absolute border border-black  top-4 right-4 p-2 hover:bg-orange-600 hover:text-whitehover:rounded-lg bg-orange-500 font-bold'onClick={closePopup}>Close</button>
                      </div>
                      
                    </div>
                   
                  </div>
                )}
              </div>
            ))}

            {isOpenFeatured && 
              <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
              
                  <div className='p-5 w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28 gap-5'>
                    <div className='flex justify-center'>
                      <div className='text-center'>
                        
                        <h1 className='text-4xl pb-5'>Featured Recipes</h1>
                        <button className=' absolute  top-4 right-4 p-2  hover:bg-orange-600 hover:text-white rounded-lg bg-orange-500  font-bold' onClick={()=>{setOpenFeatured(false)}}>Close</button>
                      
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <hr className="w-[1000px] text-center"></hr>
                    </div>
                    <div className='flex justify-center'>
                      <div className='flex flex-wrap mt-10 gap-10 justify-center border-8 bg-white/50 border-double border-black w-[1050px] p-10'>
                        {isfood.map((food,index) => (
                          <div key={index}>
                            <div className='w-52'>
                              <img className='w-48 h-48 rounded-lg' src={food.image}  alt='food'/>
                              <div className='px-6 py-3'>
                                <div className='font-bold text-sm mb-2 text-center'>
                                  {food.foodName.toUpperCase()}
                                </div>
                              </div>
                            </div>
                        {/* ==========================================food delete div */}
                            <div className="text-center mb-4">
                            
                            <button onClick={() => deleteAlert(food)}  className='border p-2 mr-5 rounded-lg bg-orange-500 hover:bg-orange-600 hover:text-white font-bold'>Delete</button>

                             <button onClick={()=>toggleFood(food)} className="p-2  hover:bg-orange-600 hover:text-white hover: rounded-lg   bg-orange-500       font-bold">Read More</button>
                            </div>

                            {deleteThisFeatures && foodFilterDelete === food && (
                              <div className='w-screen h-screen border bg-white/60 text-white modalHome'>
                              <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded text-center '>
                                Do you want to delete {food.foodName}?
                                <div className='flex justify-center gap-10'>
                                <button onClick={()=>handleDelete(food.id)}>Yes</button>
                                <button onClick={()=> setDeleteThisFeatures(false)}>No</button>
                                </div>
                              </div>
                            </div>
                            )}

                            
                          {/* ==========================================food delete div */}
                            {showInfo && selectedFood === food && (
                              <div className='fixed bg-slate-950/50 w-screen h-screen   rounded drop-shadow-lg randomInfo'>
                                <div className='p-5 inline-block w-9/12 h-[42rem]   bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                            
                                  <h1 className="text-4xl">{food.foodName.toUpperCase()}</h1>
                                  <hr></hr>
                                  <h3><strong>Ingredients</strong></h3>
                            
                                  <div className="grid grid-cols-2">
                                    <div className="pl-5">
                                      <p><span className="font-medium">{food.foodIngredients} </span> </p>
                                    </div>
                                  </div>
                            
                                  <div>
                                    <h3 className="pt-5"><strong>Instructions:</strong></h3>
                                    <p className=" text-justify px-5">{food.foodSummary}</p>
                                    <h3 className="pt-5"><strong>Image:</strong></h3>
                                    <img className='w-80 h-80 ml-5 mt-3 rounded-lg'src={food.image} alt='Food'/>
                                    <button className=' absolute border border-black top-4 right-4 p-2 hover:bg-orange-600 hover:text-white   hover:        rounded-lg bg-orange-500 font-bold'   onClick={closePopup}>Close</button>
                                  </div>
                            
                                </div>
                              </div>
                            )}                         
                          </div>                           
                        ))}                         
                                                                                                            {deleteSuccess &&(
                          <div className='w-screen h-screen bg-white/50 text-white modalHome'>
                            <div className='w-96 bg-black/90 p-6 drop-shadow-2xl text-center modalHomeEmail'>
                              You successfully delete.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>          
                  </div> 
                
              </div> 
            }
              
        </div>
        <div className='flex justify-center mt-10'>
           <button onClick={()=>{ setOpenFeatured(!isOpenFeatured)}} className='p-2 hover:bg-orange-600 hover:text-white rounded-lg bg-orange-500 font-bold'>See More</button>
        </div>
      </div>            
    </div>
  )
}

export default FeaturedRecipes
