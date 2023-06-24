import React, { useState, useEffect } from "react";
import db from "../firebase-config";
import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import SendIcon from '../images/icons8-paper-plane-50.png';



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
  
  // const [inputValidation,setInputValidation] = useState(false);


  //validation states
  const [ingredientsValidation, setIngredientsValidation] = useState(false);
  const [summaryValidation, setSummaryValidation] = useState(false);
  const [imageValidation, setImageValidation] = useState(false);

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
  
  // Food Name Validation
  const [nullFoodName, setNullFoodName ] = useState(false);
  const foodNameNotNull = (() =>{
    if(foodName !== "")
    {
      setNullFoodName(false);
    }
  });

  // Food Country Validation
  const [nullFoodCountry, setNullFoodCountry] = useState(false);
  const foodCountryNotNull = (()=>{
    if(foodCountry !=="")
    {
      setNullFoodCountry(false);
    }
  });

  //Food Category Validation
  const [nullFoodCategory , setNullFoodCategory] = useState(false);
  const foodCategoryNotNull = (()=>{
    if(foodCategory !==""){
      setNullFoodCategory(false);
    }
  });

    const[nullAllField, setNullAllField] = useState(false);
 
  const addList = async (event) => {
    
    foodCountryNotNull();
    foodCategoryNotNull();
    foodNameNotNull();

    if(foodName === "" && foodCountry ==="" && foodCategory === "" && foodIngredients === "" && imgUpload === ""){
      document.getElementById("foodName").style.border = "2px solid red";
      document.getElementById("countrySelect").style.border = "2px solid red";
      document.getElementById("selectCategory").style.border = "2px solid red";
      document.getElementById("foodIngredients").style.border = "2px solid red";
      document.getElementById("foodSummary").style.border = "2px solid red";
      setImageValidation(true);
      setNullAllField(true);
    }
    else if(foodName === "" ){

      if(imgUpload ===""){
        setImageValidation(true);
      }else{
        setImageValidation(false);
      }

      if(foodCategory ===""){
        document.getElementById("selectCategory").style.border = "2px solid red";
        setNullFoodCategory(true);
      }else{
        document.getElementById("selectCategory").style.border = "";
        setNullFoodCategory(false);
      }

      if(foodIngredients ===""){
        document.getElementById("foodSummary").style.border = "2px solid red";
        setIngredientsValidation(true);
      }else{
        document.getElementById("foodSummary").style.border = "";
        setIngredientsValidation(false);
      }

      if(foodSummary ===""){
        document.getElementById("foodSummary").style.border = "2px solid red";
        setSummaryValidation(true);
      }else{
        document.getElementById("foodSummary").style.border = "";
        setSummaryValidation(false);
      }

      if(foodCountry ===""){
        document.getElementById("countrySelect").style.border = "2px solid red";
        setNullFoodCountry(true);
      }else{
        document.getElementById("countrySelect").style.border = "";
        setNullFoodCountry(false);
      }


      setNullFoodName(true);
      document.getElementById("foodName").style.border = "2px solid red";

    
    }else if(foodCountry ===""){

      if(imgUpload ===""){
        setImageValidation(true);
      }else{
        setImageValidation(false);
      }
      
      if(foodName ===""){
        document.getElementById("foodName").style.border = "2px solid red";
        setNullFoodName(true);
      } else{
        document.getElementById("foodName").style.border = "";
        setNullFoodName(false);
      }

      if(foodCategory ===""){
        document.getElementById("selectCategory").style.border = "2px solid red";
        setNullFoodCategory(true);
      }else{
        document.getElementById("selectCategory").style.border = "";
        setNullFoodCategory(false);
      }

      if(foodIngredients ===""){
        document.getElementById("foodSummary").style.border = "2px solid red";
        setIngredientsValidation(true);
      }else{
        document.getElementById("foodSummary").style.border = "";
        setIngredientsValidation(false);
      }

      if(foodSummary ===""){
        document.getElementById("foodSummary").style.border = "2px solid red";
        setSummaryValidation(true);
      }else{
        document.getElementById("foodSummary").style.border = "";
        setSummaryValidation(false);
      }

      setNullFoodCountry(true);
      document.getElementById("countrySelect").style.border = "2px solid red";



    }else if(foodCategory === "") {

      if(imgUpload ===""){
        setImageValidation(true);
      }else{
        setImageValidation(false);
      }
      

      if(foodName ===""){
        document.getElementById("foodName").style.border = "2px solid red";
        setNullFoodName(true);
      } else {
        document.getElementById("foodName").style.border = "";
        setNullFoodName(false);
      }
      if(foodCountry ===""){
        document.getElementById("countrySelect").style.border = "2px solid red";
        setNullFoodCountry(true);
      }else{
        document.getElementById("countrySelect").style.border = "";
        setNullFoodCountry(false);
      }
      if(foodIngredients ===""){
        document.getElementById("foodSummary").style.border = "2px solid red";
        setIngredientsValidation(true);
      }else{
        document.getElementById("foodSummary").style.border = "";
        setIngredientsValidation(false);
      }

      if(foodSummary ===""){
        document.getElementById("foodSummary").style.border = "2px solid red";
        setSummaryValidation(true);
      }else{
        document.getElementById("foodSummary").style.border = "";
        setSummaryValidation(false);
      }
     

      setNullFoodCategory(true);
      document.getElementById("selectCategory").style.border = "2px solid red";


    }else if(foodIngredients ===""){

      if(imgUpload ===""){
        setImageValidation(true);
      }else{
        setImageValidation(false);
      }

      if(foodName ===""){
        document.getElementById("foodName").style.border = "2px solid red";
        setNullFoodName(true);
      } else {
        document.getElementById("foodName").style.border = "";
        setNullFoodName(false);
      }

      if(foodCountry ===""){
        document.getElementById("countrySelect").style.border = "2px solid red";
        setNullFoodCountry(true);
      }else{
        document.getElementById("countrySelect").style.border = "";
        setNullFoodCountry(false);
      }

      if(foodCategory ===""){
        document.getElementById("selectCategory").style.border = "2px solid red";
        setNullFoodCategory(true);
      }else{
        document.getElementById("selectCategory").style.border = "";
        setNullFoodCategory(false);
      }

      if(foodSummary ===""){
        document.getElementById("foodSummary").style.border = "2px solid red";
        setSummaryValidation(true);
      }else{
        document.getElementById("foodSummary").style.border = "";
        setSummaryValidation(false);
      }

    
      setIngredientsValidation(true);
      document.getElementById("foodIngredients").style.border = "2px solid red";

    }else if(foodSummary ===""){

      if(imgUpload ===""){
        setImageValidation(true);
      }else{
        setImageValidation(false);
      }

      if(foodName ===""){
        document.getElementById("foodName").style.border = "2px solid red";
        setNullFoodName(true);
      } else {
        document.getElementById("foodName").style.border = "";
        setNullFoodName(false);
      }

      if(foodCountry ===""){
        document.getElementById("countrySelect").style.border = "2px solid red";
        setNullFoodCountry(true);
      }else{
        document.getElementById("countrySelect").style.border = "";
        setNullFoodCountry(false);
      }

      if(foodCategory ===""){
        document.getElementById("selectCategory").style.border = "2px solid red";
        setNullFoodCategory(true);
      }else{
        document.getElementById("selectCategory").style.border = "";
        setNullFoodCategory(false);
      }

      if(foodIngredients ===""){
        document.getElementById("foodIngredients").style.border = "2px solid red";
        setIngredientsValidation(true);
      }else{
        document.getElementById("foodIngredients").style.border = "";
        setIngredientsValidation(false);
      }



      
      setSummaryValidation(true);
      document.getElementById("foodSummary").style.border = "2px solid red";
     
    }else if(imgUpload === ""){

      if(foodName ===""){
        document.getElementById("foodName").style.border = "2px solid red";
        setNullFoodName(true);
      } else {
        document.getElementById("foodName").style.border = "";
        setNullFoodName(false);
      }

      if(foodCountry ===""){
        document.getElementById("countrySelect").style.border = "2px solid red";
        setNullFoodCountry(true);
      }else{
        document.getElementById("countrySelect").style.border = "";
        setNullFoodCountry(false);
      }

      if(foodCategory ===""){
        document.getElementById("selectCategory").style.border = "2px solid red";
        setNullFoodCategory(true);
      }else{
        document.getElementById("selectCategory").style.border = "";
        setNullFoodCategory(false);
      }

      if(foodIngredients ===""){
        document.getElementById("foodIngredients").style.border = "2px solid red";
        setIngredientsValidation(true);
      }else{
        document.getElementById("foodIngredients").style.border = "";
        setIngredientsValidation(false);
      }


      if(foodSummary ===""){
        document.getElementById("foodSummary").style.border = "2px solid red";
        setSummaryValidation(true);
      }else{
        document.getElementById("foodSummary").style.border = "";
        setSummaryValidation(false);
      }

      setImageValidation(true);
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
    <div className='flex justify-center w-full bg-orange-200/60'>

      <div className=' flex justify-center w-full '>
        <div className="w-full">
      
        <h1 className='2xl:text-5xl md:text-4xl sm:text-3xl text-2xl pt-10 font-bold shareRecipe text-center'>
          Share Your Recipe
        </h1>
        <div className="flex justify-center ">
          <hr className=' mt-5 w-[80%]'/>
        </div> 
        <div className="flex justify-center">
        <div className='p-2 md:p-3 mt-10 bg-white/50 w-full lg:w-[40%] sm:w-[60%] xl:w-[35%] 2xl:w-[30%] border border-black mb-10'>
     
          <fieldset className="border p-2 lg:p-5 sm:p-4 border-black">
            <legend className="font-bold">Your recipe</legend>
            {nullAllField && <p className="pb-2 text-sm text-center italic text-red-500 ">All fields are requird please fill up.</p>}
            <div>
            
            <div className=' flex justify-between '>
              {/*-------------------- Food Name */}
              <div className="self-center">
              <label htmlFor='foodName' className='text-sm md:base font-semibold required'>
                Food Name:
              </label>
              </div>
              <div className="2xl:w-[66%] xl:w-[64.5%] lg:w-[64.5%] md:w-[64.5%] sm:w-[64.5%] w-[64.5%] flex justify-end">
              
                <input id='foodName' name='foodName'  className="w-[100%] 2xl:w-[96%] lg:w-[96%] md:w-[96%] sm:w-[96%] text-sm md:text-base border border-zinc-300 rounded pl-1" value={foodName} onChange={handleSubmitfoodName} placeholder="Enter food name..."/>
              </div>
            </div>
            {nullFoodName && 
              <div className="flex justify-end">
                <span className="text-xs w-[64.5%] text-center text-red-400">--Please enter food name--</span>
              </div>
            }
            </div>
            {/*------------------------ Food Country */}
            <div>
            <div className='flex justify-between mt-2'>
              <div>
              <label className='font-semibold text-sm md:base'>Country:</label>
              </div>
              <div className="2xl:w-[66%] xl:w-[64.5%] lg:w-[64.5%] md:w-[64.5%] sm:w-[64.5%] w-[64.5%] flex justify-end">
              
                <select className="w-[100%] 2xl:w-[96%] lg:w-[96%] md:w-[96%] required sm:w-[96%] w-[96%] text-sm md:text-base border border-zinc-300 rounded" value={foodCountry} name="foodCountry" id="countrySelect" onChange={handleSubmitfoodCountry}>
                  <option value='' >Select Country</option>
                  {getCountry.map((counrty) => (
                    <option key={counrty.strArea} value={counrty.strArea}> 
                      {counrty.strArea}
                    </option>))}
                </select>
              </div>
            </div> 
            {nullFoodCountry && 
              <div className="flex justify-end">
                <span className="text-xs w-[64.5%] text-center text-red-400">--Please select Country--</span>
              </div>
            }        
            </div>
            {/*------------------------------Food Category */}
            <div>
              <div className=" flex mt-2 justify-between">
                <div>
                  <label className="font-semibold text-sm">Food Category:</label>
                </div>
                <div className="2xl:w-[66%] xl:w-[64.5%] lg:w-[64.5%] md:w-[64.5%] sm:w-[64.5%] w-[64.5%] flex justify-end">
                
                  <select className="w-[100%] 2xl:w-[96%] lg:w-[96%] required md:w-[96%] sm:w-[96%] w-[96%] text-sm border border-zinc-300 rounded" value={foodCategory} name="foodCategory" onChange={handleSubmitfoodCategory} id="selectCategory" placeholder="Select cat">
                    <option value='' >Select Category</option>
                      {getCategory.map(setCategory =>(
                      <option key={setCategory.idCategory} value={setCategory.strCategory}>  {setCategory.strCategory}</option>
                      ))}
                  </select>
                </div>
              </div>
              {nullFoodCategory && 
              <div className="flex justify-end">
                <span className="text-xs w-[64.5%] text-center text-red-400">--Please select Category--</span>
              </div>
              }   
            </div>
            <div className="flex justify-center">
              <hr className='mt-5 w-[90%]'></hr>
            </div>
            {/* ------------------------Food ingredients */}
           

              <div className='flex-col pb-2 flex mt-2'>
                <div className="flex  gap-2">
                <label
                  htmlFor='foodIngredients'
                  className='mt-2 text-sm font-semibold'>
                  Food ingredients:
                </label>
                {ingredientsValidation && 
              <div className="flex justify-end items-end">
                <span className="text-xs text-center text-red-400">--Required--</span>
              </div>
              }  
              </div>
                <div className='mt-2 flex items-center'>
                  <textarea type='text' id='foodIngredients' name='foodIngredients' rows='4' className=" required 2xl:w-full w-[100%]  border border-zinc-300 rounded" onChange={handleSubmitfoodIngredients} value={foodIngredients}
                  />
                </div>
                
              </div>


            {/*-------------------------------Food Summary */}
            <div className='flex flex-col pb-2  mt-2'>
              <div className="flex  gap-2">
              <label htmlFor='foodSummary' className='mt-2 text-sm font-semibold'>
                Food Instruction:
              </label>
              {summaryValidation && 
              <div className="flex justify-end items-end">
                <span className="text-xs text-center text-red-400">--Required--</span>
              </div>
              }  
              </div>
              <div className='mt-2 flex items-center'>
                <textarea type='text'  id='foodSummary' name='foodSummary' className="w-full border border-zinc-300 rounded" onChange={handleSummary} value={foodSummary} rows='4'/>
              </div>
            </div>

            {/* ----------------------------Food Image */}
            <div className='flex justify-between mt-2'>
              <div >
                <label htmlFor='myfile' className=' 2xl:text-sm xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-[12px] font-semibold '>
                  Select a file:
                </label>
              </div>
              <div className="2xl:w-[80%] xl:w-[82%] lg:w-[80%] md:w-[83%] sm:w-[79%] w-[79%]">
                <input type='file' name='myfile'  id='myfile' className=" required text-[12px] 2xl:text-sm xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[12px] " onChange={handleImageUpload} />
              </div>
            </div>
            {imageValidation && 
              <div className="flex justify-center items-center">
                <span className="text-xs text-center text-red-400">--requied--</span>
              </div>
              }  

            <div className='flex justify-center mt-5'>
              <button
                className='p-2 mt-4 flex font-bold rounded bg-orange-500/90 hover:bg-black text-white'
                onClick={addList}>
                Submit
                <img src={SendIcon} alt="Send" className="w-3 m-1"/>
              </button>
              
            </div>

            </fieldset>
          </div>
          
        </div>
      
        </div>
      </div>
      {addSuccess && (
            <div className='w-[1600px] h-screen border bg-white/60 text-white modalHome'>
              <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded text-center'>You successfully added {foodName}.</div>
            </div>
      )}


      

      


    </div>  
  );
};

export default AddRecipe;
