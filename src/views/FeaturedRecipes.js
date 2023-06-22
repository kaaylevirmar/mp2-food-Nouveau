import React from 'react'
import { useState, useEffect } from 'react';
import db from "../firebase-config";
import GreaterThan from '../images/icons8-greater-than-50.png';
import Closebutton from '../images/icons8-close-48.png';
import TranshIcon from '../images/icons8-trash-64.png';

const FeaturedRecipes = () => {

    const [isfood, setFood] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [isOpenFeatured, setOpenFeatured] = useState(false);
    const [seeMore, setSeeMore] = useState(true);

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
        
    },[]);
    
    
   useEffect(()=>{
    SeeMoreDiv();
   });

const SeeMoreDiv = (() =>{
  if(isfood.length <=4){
    setSeeMore(true);
  } else{
    setSeeMore(false);
  }
})


    const [deleteThisFeatures, setDeleteThisFeatures] = useState(false);

    const randomItems = isfood.slice(0,4);

    const [data, setData] = useState([]);


    const [foodFilterDelete, setFoodFilterDelete] = useState();
   

    const deleteAlert = ((food) => {
      setDeleteThisFeatures(true);
      setFoodFilterDelete(food);
      SeeMoreDiv();
      
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
        <div className='flex justify-center'>
        <hr className='w-[80%]'></hr>
        </div>
        <h1 className='2xl:text-4xl md:text-2xl text-xl text-center font-bold sampleMenu pt-5'>Featured Recipes</h1>
       
        <div className='rounded-md flex flex-wrap w-full md:gap-2 2xl:gap-10 min-[360px]:gap-4 justify-center gap-4 mt-10 '>
         
            {randomItems.map((food) => (
              <div key={food.id} className='2xl:h-80 md:h-72 h-60 flex justify-center'>
                <div>
                <div>
                  <img
                    className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black ' src={food.image} alt='food'/>
                  <div className='h-16 flex justify-center'>
                    <div className='font-bold text-sm text-center self-center'>
                      {food.foodName.toUpperCase()}
                    </div>
                  </div>
                </div>
               
                <div>
                    <div className="justify-center flex ">
                      <div className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500" >
                        <button onClick={()=> toggleFood(food)} className=" px-1 font-bold text-xs 2xl:text-sm ">Read More </button>
                        <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                      </div>
                    </div>
                  </div>

                {showInfo && selectedFood === food && (
                  <div className='fixed bg-slate-950/50 w-full h-full rounded drop-shadow-lg randomInfo'>
                    <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
                    <div className="flex justify-between text-white my-1 ">
                        Recipe Info
                        <button
                          className='hover:bg-orange-100 rounded-full font-bold '
                          onClick={closePopup}>
                          <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
                      </div>
                    <div className='p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black'>
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
                        
                      </div>
                      
                    </div>
                    </div>
                  </div>
                )}
                </div>
              </div>
            ))}

            {isOpenFeatured && 
              <div className='fixed bg-slate-950/50 w-full h-full rounded randomInfo'>
                <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
                <div className="flex justify-between text-white my-1">
                      Featured Recipes
                      <button
                        className='hover:bg-orange-100 rounded-full font-bold '
                        onClick={()=>{setOpenFeatured(false)}}>
                      <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
            </div>

                  <div className='p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black'>
                    
                    <div className='flex justify-center'>
                      <div className='text-center'>
                        
                        <h1 className='text-5xl pb-5'>Featured Recipes</h1>
                       
                      
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <hr className="w-[70%] text-center"></hr>
                    </div>
                    <div className='flex justify-center'>
                      <div className='flex flex-wrap mt-10 gap-10 justify-center border-8 bg-white border-double border-black w-[92%] p-10'>
                          {isfood.map((food,index) => (
                            <div key={index}>
                              <div className='w-48 h- '>
                                <img className='w-48 h-48 rounded-lg' src={food.image}  alt='food'/>
                                <div className='px-6 py-3'>
                                  <div className='font-bold text-sm mb-2 text-center'>
                                    {food.foodName.toUpperCase()}
                                  </div>
                                </div>
                              </div>
                                {/* ==========================================food delete div */}
                              <div className="text-center mb-4 flex justify-center gap-3">
                              <div className=" flex items-center" onClick={()=>toggleFood(food)}>
                                <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg hover:text-white hover:bg-orange-500">
                                  <button className=" px-1 font-bold text-xs 2xl:text-sm ">Read More</button>
                                    <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                                </div>
                              </div>
                              <div   className='border border-black flex items-center hover:bg-orange-200 border-2 rounded-lg border-orange-500'>
                                <img src={TranshIcon} alt='trash' className='w-7' onClick={() => deleteAlert(food)}/>
                              </div>
                            </div>

                            {deleteThisFeatures && foodFilterDelete === food && (
                              <div className='w-full h-full border bg-black/60 text-white modalHome'>
                              <div className='w-96 h-68 bg-white p-6 modalHomeEmail text-orange-500 drop-shadow-2xl rounded text-center border-4 border-orange-500 font-bold'>
                                Do you want to delete {food.foodName}?
                                <div className='flex justify-center gap-10 pt-4 font-bold'>
                                <button onClick={()=>handleDelete(food.id)} className='rounded-md border-2 border-orange-500 px-2 hover:text-white hover:border-white hover:bg-orange-500 '>Yes</button>
                                <button onClick={()=> setDeleteThisFeatures(false)} className='rounded-md border-2 border-orange-500 px-2 hover:text-white hover:border-white hover:bg-orange-500'>No</button>
                                </div>
                              </div>
                            </div>
                            )}

                            
                       
                            {showInfo && selectedFood === food && (
                              <div className='fixed bg-slate-950/50 w-screen h-screen   rounded drop-shadow-lg randomInfo'>
                                <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[92%]">
                                <div className="flex justify-between text-white my-1">
                                  Recipe info
                                  <button className='hover:bg-orange-100 rounded-full font-bold' onClick={closePopup}>
                                    <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                                  </button>
                                </div>
                                <div className='p-5 w-full h-[94.8%] 2xl:w-full 2xl:h-[94.8%] bg-orange-200 pt-5 overflow-auto border border-black'>
                            
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
                                  
                                  </div>
                            
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
              </div> 
            }
              
        </div>
        {!seeMore && <div className='flex justify-center mt-10 '>
          <div className='otherSeeMore rounded-lg'>
           <button onClick={()=>{ setOpenFeatured(!isOpenFeatured)}} className='px-2 py-1 hover:bg-orange-500 hover:text-white text-orange-500 border-2 border-orange-500 rounded-lg bg-white font-bold seeMore'>See More</button>
           </div>
        </div>}    
        
      </div>            
    </div>
  )
}

export default FeaturedRecipes
