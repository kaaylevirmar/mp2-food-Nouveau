import React, { useState, useEffect } from "react";
import db from "../firebase-config";
import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";



const AddRecipe = () => {
  //--------------------- For Counrty html <select> <select/>
  const [getCountry, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.json())
      .then((data) => setCountry(data.meals));
  }, []);

  //---------------------For Category html <select> <select/>
  const [getCategory, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((data) => setCategory(data.categories));
  }, []);

 

  const [foodName, setFoodName] = useState("");
  const [foodCountry, setFoodCountry] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [foodIngredients, setFoodIngredients] = useState("");
  const [imgUpload, setImgUpload] = useState("");
  const [foodSummary, setFoodSummary] = useState("");
  const [addFoodName, setAddFoodName] = useState("");

  const handleSubmitfoodName = (event) => {
    setFoodName(event.target.value);
  };

  const handleSubmitfoodCountry = (event) => {
    setFoodCountry(event.target.value);
  };
  const handleSubmitfoodCategory = (event) => {
    setFoodCategory(event.target.value);
  };
  const handleSubmitfoodIngredients = (event) => {
    setFoodIngredients(event.target.value);
  };

  const handleImageUpload = (e) => {
    setImgUpload(e.target.files[0]);
  };

  const handleSummary = (event) => {
    setFoodSummary(event.target.value);
  };

  const [addSuccess, setAddSuccess] = useState(false);
  
  const addList = async (event) => {
    
    if(foodName === ""){
      alert("Food Name is required.");
    }else if(foodCountry ===""){
      alert("Please select country.");
    }else if(foodCategory === "") {
      alert("Please select category.");
    }else if(foodIngredients ===""){
      alert("Ingredients is required.");
    }else if(foodSummary ===""){
      alert("Please set the guidelines how to cook your food recipe.");
    }else if(imgUpload ===""){
      alert("Please take a food picture.");
    }
    else{
      
      try{
        event.preventDefault();
        let file = imgUpload;
        const storage = getStorage();
        var storagePath = "uploads/" + file.name;


        const storageRef = ref(storage, storagePath);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // progrss function ....
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            // error function ....
            console.log(error);
          },
          () => {

            // complete function ....
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

              // console.log("File available at", downloadURL);
              db.collection("food").add({
                foodName: foodName,
                foodCountry: foodCountry,
                foodCategory: foodCategory,
                foodIngredients: foodIngredients,
                images: downloadURL,
                foodSummary: foodSummary,
                datetime: firebase.firestore.FieldValue.serverTimestamp(),
              });
              setFoodName("");
              setFoodCountry("");
              setFoodCategory("");
              setFoodIngredients("");
              setImgUpload("");
              setFoodSummary("");
              
              setAddFoodName(foodName);
              setAddSuccess(true);
              setTimeout(()=>{
                setAddSuccess(false)
              },2000)
              
            });
          }

        );
      } catch (error) {
        throw error;
      }
      
      
    } 
  };



  return (
    <div className='flex justify-center w-[1600px] bg-orange-300'>

      <div className=' flex flex-col items-center gap-5 '>

        <h1 className='text-5xl pt-10 font-bold shareRecipe'>
          Share Your Recipe
        </h1>

        <hr className='px-96 mt-10'></hr>

        <div className='grid p-5 mt-10 bg-white/50 mb-10'>

          <fieldset className='border-4 border-black p-10'>

            <legend className='text-xl font-bold p-2 '>Your Recipe</legend>

            <div className='pb-2 flex justify-center '>
              {/*-------------------- Food Name */}
              <label htmlFor='foodName' className='mt-2 ml-2 font-semibold'>
                Food Name:
              </label>
              <div className='ml-7 mt-2'>
                <input id='foodName' name='foodName'  value={foodName} onChange={handleSubmitfoodName} />
              </div>
            </div>

            {/*------------------------ Food Country */}

            <div className=' pb-2 flex mt-2 justify-center'>
              <label className='mt-2 ml-2 font-semibold'>Country:</label>
              <div className='ml-14 mt-2'>
                <select value={foodCountry} name="foodCountry" onChange={handleSubmitfoodCountry}>
                  <option value="selectCountry">Select Country</option>
                  {getCountry.map((counrty) => (
                    <option key={counrty.strArea} value={counrty.strArea}> 
                      {counrty.strArea}
                    </option>))}
                </select>
              </div>
            </div> 
                    

            {/*------------------------------Food Category */}
            <div className=" pb-2 flex mt-2 justify-center">
              <label className="mt-2 ml-2 font-semibold" >Food Category:</label>
              <div className="ml-2 mt-2">
                <select value={foodCategory} name="foodCategory" onChange={handleSubmitfoodCategory} id="selectCategory">
                  <option>Select Category</option>
                  {getCategory.map(setCategory =>(
                    <option key={setCategory.idCategory} value={setCategory.strCategory}>  {setCategory.strCategory}</option>

                  ))}
                </select>
              </div>
            </div>

            
            <hr className='mt-5'></hr>
            {/* ------------------------Food ingredients */}
           

              <div className='flex-col pb-2 flex mt-2'>
                <label
                  htmlFor='foodIngredients'
                  className='mt-2 ml-2 font-semibold'>
                  Food ingredients:
                </label>
                <div className='mt-2 flex items-center'>
                  <textarea type='text'  id='foodIngredients' name='foodIngredients' rows='4' cols='50' onChange={handleSubmitfoodIngredients} value={foodIngredients}
                  />
                </div>
              </div>


            {/*-------------------------------Food Summary */}
            <div className='flex flex-col pb-2  mt-2'>
              <label htmlFor='foodSummary' className='mt-2 ml-2 font-semibold'>
                Food Instruction:
              </label>
              <div className='mt-2 flex items-center'>
                <textarea type='text'  id='foodSummary' name='foodSummary' onChange={handleSummary} value={foodSummary} rows='4' cols='50'/>
              </div>
            </div>

            {/* ----------------------------Food Image */}
            <div className='flex pb-2 mt-2 justify-center'>
              <label htmlFor='myfile' className='mt-3 ml-2 mr-1 font-semibold'>
                Select a file:
              </label>
              <div className='mt-2'>
                <input type='file' name='myfile'  id='myfile' onChange={handleImageUpload} />
              </div>

            </div>


            <div className='flex justify-center mt-5'>
              <button
                className='p-2 mt-4 border font-bold border-black rounded-lg bg-orange-500/90 hover:bg-orange-800 hover:text-white'
                onClick={addList}>
                Submit
              </button>
            </div>

          </fieldset>

        </div>
      </div>
      {addSuccess && (
            <div className='w-[1600px] h-screen border bg-white/60 text-white modalHome'>
              <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded text-center'>You successfully added {addFoodName}.</div>
            </div>
      )}
    </div>  
  );
};

export default AddRecipe;
