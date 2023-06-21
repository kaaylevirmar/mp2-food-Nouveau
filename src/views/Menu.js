import React from "react";
import 'firebase/firestore';
import db from "../firebase-config";
import AddToFavoritesLocalStorage from "../components/AddToFavoritesLocalStorage";


import { useState, useEffect } from "react";
import AmericaFlag from '../images/american.png';
import BritishFlag from '../images/british.png';
import CanadianFlag from '../images/canada.png';
import ChineseFlag from '../images/chinese.png';
import CroatianFlag from '../images/Croatian.png';
import DutchFlag from '../images/Dutch.png';
import EgyptianFlag from '../images/Egyptian.png';
import PhilippineFlag from '../images/Philippines.png';
import FrenchFlag from '../images/French.png';
import GreekFlag from '../images/Greek.png';
import IndianFlag from '../images/Indian.png';
import IrishFlag from '../images/Irish.png';
import ItalianFlag from '../images/Italian.png';
import JamaicanFlag from '../images/Jamaican.png';
import JapanFlag from '../images/Japanese.png';
import KenyaFlag from '../images/Kenyan.png';
import MalasiaFlag from '../images/Malaysian.png';
import MexicoFlag from '../images/Mexican.png';
import MoroocanFlag from '../images/Moroccan.png';
import PolishFlag from '../images/Polish.png';
import PortugueseFlag from '../images/Portuguese.png';
import RussianFlag from '../images/Russian.png';
import SpanishFlag from '../images/Spanish.png';
import ThaiFlag from '../images/Thai.png';
import Tunisian from '../images/Tunisian.png';
import TurkishFlag from '../images/Turkish.png'
import VietnamFlag from '../images/Vietnamese.png';
import SearchIcon from '../images/icons8-search-50.png';
import Closebutton from '../images/icons8-close-48.png';
import FavoriteButton from '../images/icons8-favorite-48.png';
import GreaterThan from '../images/icons8-greater-than-50.png';




const Menu = () => {
  const [favoriteSend, setFavoriteSend] = useState(false);
  const [addFavorite, setAddFavorite] = useState('');
  const [favoriteAlready, setFavoriteAlready] = useState(false);


  //-------------------------- 1st random recipe
  const [foodApi1, getFoodApi1] = useState([]);
  const [popupInfoApi1, setPopupInfoApi1] = useState(false);
 // --------------------------add to favorites


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi1(data.meals));
  }, []);

  //-------------------------- 2nd random recipe

  const [foodApi2, getFoodApi2] = useState([]);
  const [popupInfoApi2, setPopupInfoApi2] = useState(false);
// --------------------------add to favorites
  

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi2(data.meals));
  }, []);

  //-------------------------- 3rd random recipe
  const [foodApi3, getFoodApi3] = useState([]);
  const [popupInfoApi3, setPopupInfoApi3] = useState(false);
  // --------------------------add to favorites


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi3(data.meals));
  }, []);

  //-------------------------- 4th random recipe
  const [foodApi4, getFoodApi4] = useState([]);
  const [popupInfoApi4, setPopupInfoApi4] = useState(false);
// --------------------------add to favorites
  
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi4(data.meals));
  }, []);

  //-------------------------- 5th random recipe
  const [foodApi5, getFoodApi5] = useState([]);
  const [popupInfoApi5, setPopupInfoApi5] = useState(false);
  // --------------------------add to favorites
  
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi5(data.meals));
  }, []);

  //-------------------------- 6th random recipe
  const [foodApi6, getFoodApi6] = useState([]);
  const [popupInfoApi6, setPopupInfoApi6] = useState(false);
  // --------------------------add to favorites
  
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi6(data.meals));
  }, []);

  //-------------------------- 7th random recipe
  const [foodApi7, getFoodApi7] = useState([]);
  const [popupInfoApi7, setPopupInfoApi7] = useState(false);
 
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi7(data.meals));
  }, []);

  //-------------------------- 8th random recipe
  const [foodApi8, getFoodApi8] = useState([]);
  const [popupInfoApi8, setPopupInfoApi8] = useState(false);
  // --------------------------add to favorites
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi8(data.meals));
  }, []);


 
  // -------------------------- Search
  const [foodSearch, setFoodSearch] = useState("");
  const [getFoodApi, setGetFoodApi] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  

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

  const handleAddToFirestoreSearch = (data) => {
    db.collection('favorites')
    .where('idMeal', '==', data.idMeal)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        // Item doesn't exist, add it to favorites
        db.collection('favorites').add(data)
          .then(() => {
            setFavoriteSend(true)
            setTimeout(()=>{
            setFavoriteSend(false)
            },2000)
          })
          .catch((error) => {
            console.error('Error adding item to favorites:', error);
          });
      } else {
        setFavoriteAlready(true);
        setAddFavorite(data.strMeal)
        setTimeout(()=> {
          setFavoriteAlready(false)
          
        },2000)
      }
    })
    .catch((error) => {
      console.error('Error checking item in favorites:', error);
    });
  };



const handleSubmit = async (event) => {
    event.preventDefault();
  
    
    if (typeof foodSearch !== 'string' || !/^[a-zA-Z\s]+$/.test(foodSearch)) {
      alert("pls input valid ")
    }
  
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`
    )
    const data = await response.json();
    setGetFoodApi(data.meals);
    setNotFound(true);
    setCountryDiv(true);

  } catch (error) {
    console.log("Error:", error);
  }

  if(getFoodApi === null || getFoodApi[0] === undefined){
    setNotFound(false);
  }
  console.log(getFoodApi);

  if (foodSearch === "") {
    setIsHidden(true);
  } else{
    setIsHidden(false);
  }
  };

  const HandleChangeFoodSearch = (e) => {
      setFoodSearch(e.target.value);
    
  };



  // ==============other search
  const [notFound, setNotFound] = useState(false);




//-----------------------------------------Country div
const [countryDiv, setCountryDiv] = useState(true);
const [country, getCountry] = useState([]);
const [countryCode, setCountryCode] = useState('');
const [countryFlag, setCountryFlag] = useState('');
const [countryFoodDiv , setCountryFoodDiv] = useState([]);



const toggleCountryFood = async (food) => {
  setShowInfo(!showInfo);
  setSelectedFood(food);
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food.idMeal}`
    );
    const data = await response.json();
    setCountryFoodDiv(data.meals);
  } catch (error) {
    console.log("Error:", error);
  }
}




const AmericanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=american`)
    const data = await response.json();
    getCountry(data.meals);
    
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('America');
  setCountryFlag(`${AmericaFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
  
  
}

const BritishFlagButton = async() =>{
 
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=british`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('British');
  setCountryFlag(`${BritishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
}

const CanadaFlagButton = async() =>{
 
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=canadian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Canada');
  setCountryFlag(`${CanadianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
}

const ChineseFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('China');
  setCountryFlag(`${ChineseFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
}

const CroatianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Croatian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Croatia');
  setCountryFlag(`${CroatianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
}

const DuctchFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Dutch`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Netherlands');
  setCountryFlag(`${DutchFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
}

const EgyptianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Egypt');
  setCountryFlag(`${EgyptianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
}

const PhilippineFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Filipino`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Philippines');
  setCountryFlag(`${PhilippineFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
}

const FrenchFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=french`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('France');
  setCountryFlag(`${FrenchFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }
 
 const GreekFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=greek`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Greece');
  setCountryFlag(`${GreekFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const IndianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('India ');
  setCountryFlag(`${IndianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const IrishFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=irish`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Ireland');
  setCountryFlag(`${IrishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const ItalianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=italian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Italy');
  setCountryFlag(`${ItalianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const JamaicanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=jamaican`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Jamaica');
  setCountryFlag(`${JamaicanFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const JapaneseFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=japanese`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Japan');
  setCountryFlag(`${JapanFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const KenyanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=kenyan`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Kenya');
  setCountryFlag(`${KenyaFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const MalasianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=malaysian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Malaysia');
  setCountryFlag(`${MalasiaFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const MexicanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=mexican`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Mexico');
  setCountryFlag(`${MexicoFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }
 
 const MoroccanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=moroccan`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Morocco');
  setCountryFlag(`${MoroocanFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const PolishFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=polish`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Poland');
  setCountryFlag(`${PolishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const PortugueseFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=portuguese`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Portugal');
  setCountryFlag(`${PortugueseFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const RussianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Russian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Russia');
  setCountryFlag(`${RussianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const SpanishFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=spanish`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Spain');
  setCountryFlag(`${SpanishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const ThaiFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Thailand');
  setCountryFlag(`${ThaiFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const TunisianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Tunisian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Tunisia');
  setCountryFlag(`${Tunisian}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const TurkishFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Turkish`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Turkey');
  setCountryFlag(`${TurkishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

 const VietnamFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Vietnamese`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setNotFound(false);
  setCountryDiv(false);
  setCountryCode('Vietnam');
  setCountryFlag(`${VietnamFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'instant'});
 }

  return (
    <div className='flex flex-col w-full bg-orange-200'>
      <div className='flex justify-center'>
        <div className='flex flex-col mt-5 w-11/12 md:w-4/5 2xl:w-3/5 text-center'>
          <p className='text-[18px] md:text-3xl 2xl:text-4xl text-black align-self-center searchText'>
            Search Your Food Recipe
          </p>
      
          <form className='mt-3 md:mt-5 2xl:mt-8' onSubmit={handleSubmit}>
              <div className="flex justify-center">
                <input type='search'name='search'id='search'className='rounded-l-lg pl-2'
                onChange={HandleChangeFoodSearch}
                value={foodSearch}
                placeholder="Search..."
                />
                <button className='text-black'><img src={SearchIcon} alt="Search logo" className="button bg-orange-600 w-7 h-7  rounded-r-lg" /></button>
            </div>
          </form>
          

          <hr className='mt-5'/>
        </div>
      </div>
      
      {countryDiv ?(
        <div className='flex w-full mt-10 justify-center menuMainDiv '>
           
          {isHidden ? (
            <div className='flex flex-wrap md:gap-10 gap-4 min-[360px]:gap-4 2xl:gap-16 w-screen 2xl:w-4/5 border-8 md:w-11/12 justify-center bg-white border-double border-black py-10 min-[360px]:mb-10'>
            
            {/*---------------------------------------- 1st random */}
           
            <div>
              {foodApi1.map((food) => (
                <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                  <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                    <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black ' src={food.strMealThumb}
                      alt='Food_Picture_API1'/>
                    <div className='h-16 flex justify-center'>
                      <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="justify-center flex ">
                      <div className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500" >
                        <button onClick={()=>{ setPopupInfoApi1(true)}} className=" px-1 font-bold text-xs 2xl:text-sm ">Read More </button>
                        <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                      </div>
                    </div>
                  </div>
                  {popupInfoApi1 && (
                    <div className='fixed bg-slate-950/50 w-full h-screen rounded drop-shadow-lg randomInfo'>
                    <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]">
                    <div className="flex justify-between text-white my-1 ">
                        Recipe Info
                        <button
                          className='hover:bg-orange-100 rounded-full font-bold '
                          onClick={() => {
                            setPopupInfoApi1(false);
                            }}>
                          <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
                      </div>
                      <div className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                        <div className="flex justify-between mt-5">
                          <div className="w-8/12 self-end">
                            <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end ">

                            <AddToFavoritesLocalStorage data={food}/>
                            {/* <button onClick={()=>{ props.addToFavorites(food)}}><img src={FavoriteButton} alt="favorite button" className="hover:drop-shadow-2xl"/></button> */}
                          </div>
                        </div>
                        <hr></hr>
                        <h3 className="text-lg mb-2">
                          <strong>Ingredients:</strong>
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
                        <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{food.strInstructions}</p>
                    
                        <h3 className="text-lg pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>
                        
                        <h3 className="text-lg pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <div className="flex justify-center md:justify-start">
                          <img
                            className='w-80 h-80 mt-3 rounded'
                            src={food.strMealThumb}
                            alt='Food_Picture_Search'
                          />
                        </div>
                        </div>
                      </div>
                    </div> 
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 2nd random */}
            <div>
              {foodApi2.map((food) => (
                <div key={food.idMeal}  className="h-60 md:h-72 2xl:h-80">
                  <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                    <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black ' src={food.strMealThumb}
                      alt='Food_Picture_API1'/>
                    <div className='h-16 flex justify-center'>
                      <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="justify-center flex " onClick={()=>{ setPopupInfoApi2(true)}}>
                      <div className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500" >
                        <button  className=" px-1 font-bold text-xs 2xl:text-sm ">Read More </button>
                        <img onClick={()=>{ setPopupInfoApi2(true)}} src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                      </div>
                    </div>
                  </div>
                  {popupInfoApi2 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'> 
                    <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]">
                      <div className="flex justify-between text-white my-1 ">
                          Recipe Info
                          <button
                            className='hover:bg-orange-100 rounded-full font-bold '
                            onClick={() => {
                              setPopupInfoApi2(false);
                            }}>
                            <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                          </button>
                      </div>
                      <div className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                        
                        <div className="flex justify-between mt-5">
                          <div className="w-8/12 self-end">
                            <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end ">
                            <AddToFavoritesLocalStorage data={food}/>
                          </div>
                        </div>
                        <hr></hr>
                        <h3 className="text-lg mb-2">
                          <strong>Ingredients:</strong>
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
                        <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{food.strInstructions}</p>
                    
                        <h3 className="text-lg pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <div className="flex justify-center md:justify-start">
                          <img
                            className='w-80 h-80 mt-3 rounded'
                            src={food.strMealThumb}
                            alt='Food_Picture_Search'
                          />
                        </div>
                      
                        </div>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 3rd random */}
            <div>
              {foodApi3.map((food) => (
                <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                  <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                    <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black 'src={food.strMealThumb}alt='Food_Picture_API2'/>
                    <div className='h-16 flex justify-center'>
                      <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                 
                    
                  </div>
                  <div>
                    <div className="justify-center flex" onClick={()=>{ setPopupInfoApi3(true)}}>
                      <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500">
                        <button className=" px-1 font-bold text-xs 2xl:text-sm ">Read More</button>
                        <img onClick={()=>{ setPopupInfoApi3(true)}} src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                      </div>
                    </div>
                  </div>

                  {popupInfoApi3 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                    <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]">
                    <div className="flex justify-between text-white my-1 ">
                          Recipe Info
                          <button
                            className='hover:bg-orange-100 rounded-full font-bold '
                            onClick={() => {
                              setPopupInfoApi3(false);
                            }}>
                            <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                          </button>
                      </div>
                      <div className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                      <div className="flex justify-between mt-5">
                        <div className="w-8/12 self-end">
                          <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                        </div>
                        <div className="self-end ">
                        <AddToFavoritesLocalStorage data={food}/>
                        </div>
                        </div>
                        <hr></hr>
                        <h3 className="text-lg mb-2">
                          <strong>Ingredients:</strong>
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
                        <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{food.strInstructions}</p>
                    
                        <h3 className="text-lg pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <div className="flex justify-center md:justify-start">
                          <img
                            className='w-80 h-80 mt-3 rounded'
                            src={food.strMealThumb}
                            alt='Food_Picture_Search'
                          />
                        </div>
                        
                        </div>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 4th random */}
            <div>
              {foodApi4.map((food) => (
                <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                  <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                    <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black'src={food.strMealThumb}alt='Food_Picture_API2'/>
                    <div className='h-16 flex justify-center'>
                      <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                 
                    
                  </div>
                  <div>
                    <div className="justify-center flex" onClick={()=>{ setPopupInfoApi4(true)}}>
                      <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500">
                        <button className=" px-1 font-bold text-xs 2xl:text-sm ">Read More</button>
                        <img onClick={()=>{ setPopupInfoApi4(true)}} src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                      </div>
                    </div>
                  </div>

                  {popupInfoApi4 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                    <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]"> 
                    <div className="flex justify-between text-white my-1 ">
                          Food Info
                          <button
                            className='hover:bg-orange-100 rounded-full font-bold '
                            onClick={() => {
                              setPopupInfoApi4(false);
                            }}>
                            <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                          </button>
                      </div>
                    <div className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                      <div className="flex justify-between mt-5">
                        <div className="w-8/12 self-end">
                          <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                        </div>
                        <div className="self-end ">
                        <AddToFavoritesLocalStorage data={food}/>
                        </div>
                        </div>
                        <hr></hr>
                        <h3 className="text-lg mb-2">
                          <strong>Ingredients:</strong>
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
                        <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{food.strInstructions}</p>
                    
                        <h3 className="text-lg pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <div className="flex justify-center md:justify-start">
                          <img
                            className='w-80 h-80 mt-3 rounded'
                            src={food.strMealThumb}
                            alt='Food_Picture_Search'
                          />
                        </div>
                        
                        </div>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 5th random */}
            <div>
              {foodApi5.map((food) => (
                <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                  <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black'src={food.strMealThumb}alt='Food_Picture_API2'/>
                  <div className='h-16 flex justify-center'>
                    <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                      {food.strMeal}
                    </div>
                  </div>
               
                  
                </div>
                <div>
                  <div className="justify-center flex" onClick={()=>{ setPopupInfoApi5(true)}}>
                    <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500">
                      <button className=" px-1 font-bold text-xs 2xl:text-sm ">Read More</button>
                      <img onClick={()=>{ setPopupInfoApi5(true)}} src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                    </div>
                  </div>
                </div>

                {popupInfoApi5 && (
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'> 
                  <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]">
                    <div className="flex justify-between text-white my-1 ">
                          Recipe Info
                          <button
                            className='hover:bg-orange-100 rounded-full font-bold '
                            onClick={() => {
                              setPopupInfoApi5(false);
                            }}>
                            <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                          </button>
                      </div>
                    <div className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                    <div className="flex justify-between mt-5">
                      <div className="w-8/12 self-end">
                        <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                      </div>
                      <div className="self-end ">
                      <AddToFavoritesLocalStorage data={food}/>
                      </div>
                      </div>
                      <hr></hr>
                      <h3 className="text-lg mb-2">
                        <strong>Ingredients:</strong>
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
                      <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{food.strInstructions}</p>
                  
                      <h3 className="text-lg pt-5">
                        <strong>Youtube:</strong>
                      </h3>
                      <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>
                      
                      <h3 className="pt-5">
                        <strong>Source:</strong>
                      </h3>
                      <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                      <h3 className="pt-5">
                        <strong>Image:</strong>
                      </h3>
                      <div className="flex justify-center md:justify-start">
                        <img
                          className='w-80 h-80 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                      </div>
                      
                      </div>
                    </div>
                  </div>
                  </div>
                )}
              </div>
            ))}
          </div>

            {/*---------------------------------------- 6th random */}
            <div>
              {foodApi6.map((food) => (
                <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                  <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black'src={food.strMealThumb}alt='Food_Picture_API2'/>
                  <div className='h-16 flex justify-center'>
                    <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                      {food.strMeal}
                    </div>
                  </div>
               
                  
                </div>
                <div>
                  <div className="justify-center flex" onClick={()=>{ setPopupInfoApi6(true)}}>
                    <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500">
                      <button className=" px-1 font-bold text-xs 2xl:text-sm ">Read More</button>
                      <img onClick={()=>{ setPopupInfoApi6(true)}} src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                    </div>
                  </div>
                </div>

                {popupInfoApi6 && (
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'> 
                  <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]">
                    <div className="flex justify-between text-white my-1 ">
                          Recipe Info
                          <button
                            className='hover:bg-orange-100 rounded-full font-bold '
                            onClick={() => {
                              setPopupInfoApi6(false);
                            }}>
                            <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                          </button>
                      </div>
                    <div className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                    <div className="flex justify-between mt-5">
                      <div className="w-8/12 self-end">
                        <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                      </div>
                      <div className="self-end ">
                      <AddToFavoritesLocalStorage data={food}/>
                      </div>
                      </div>
                      <hr></hr>
                      <h3 className="text-lg mb-2">
                        <strong>Ingredients:</strong>
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
                      <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{food.strInstructions}</p>
                  
                      <h3 className="text-lg pt-5">
                        <strong>Youtube:</strong>
                      </h3>
                      <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>
                      
                      <h3 className="pt-5">
                        <strong>Source:</strong>
                      </h3>
                      <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                      <h3 className="pt-5">
                        <strong>Image:</strong>
                      </h3>
                      <div className="flex justify-center md:justify-start">
                        <img
                          className='w-80 h-80 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                      </div>
                     
                      </div>
                    </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

            {/*---------------------------------------- 7th random */}
            <div>
              {foodApi7.map((food) => (
                <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                  <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black'src={food.strMealThumb}alt='Food_Picture_API2'/>
                  <div className='h-16 flex justify-center'>
                    <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                      {food.strMeal}
                    </div>
                  </div>
               
                  
                </div>
                <div>
                  <div className="justify-center flex" onClick={()=>{ setPopupInfoApi7(true)}}>
                    <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500">
                      <button className=" px-1 font-bold text-xs 2xl:text-sm ">Read More</button>
                      <img onClick={()=>{ setPopupInfoApi7(true)}} src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                    </div>
                  </div>
                </div>

                {popupInfoApi7 && (
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'> 
                  <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]">
                  <div className="flex justify-between text-white my-1 ">
                        Recipe Info
                        <button
                          className='hover:bg-orange-100 rounded-full font-bold '
                          onClick={() => {
                            setPopupInfoApi7(false);
                            }}>
                          <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
                        </div>
                    <div className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                    <div className="flex justify-between mt-5">
                      <div className="w-8/12 self-end">
                        <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                      </div>
                      <div className="self-end ">
                      <AddToFavoritesLocalStorage data={food}/>
                      </div>
                      </div>
                      <hr></hr>
                      <h3 className="text-lg mb-2">
                        <strong>Ingredients:</strong>
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
                      <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{food.strInstructions}</p>
                  
                      <h3 className="text-lg pt-5">
                        <strong>Youtube:</strong>
                      </h3>
                      <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>
                      
                      <h3 className="pt-5">
                        <strong>Source:</strong>
                      </h3>
                      <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                      <h3 className="pt-5">
                        <strong>Image:</strong>
                      </h3>
                      <div className="flex justify-center md:justify-start">
                        <img
                          className='w-80 h-80 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                      </div>
                      
                      </div>
                    </div>
                    </div>  
                  </div>
                )}
              </div>
            ))}
          </div>

            {/*---------------------------------------- 8th random */}
            <div>
              {foodApi8.map((food) => (
                <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                  <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black'src={food.strMealThumb}alt='Food_Picture_API2'/>
                  <div className='h-16 flex justify-center'>
                    <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                      {food.strMeal}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="justify-center flex" onClick={()=>{ setPopupInfoApi8(true)}}>
                    <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500">
                      <button className=" px-1 font-bold text-xs 2xl:text-sm ">Read More</button>
                      <img onClick={()=>{ setPopupInfoApi8(true)}} src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                    </div>
                  </div>
                </div>

                {popupInfoApi8 && (
                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'> 
                <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]" >
                  <div className="flex justify-between text-white my-1 ">
                      Recipe Info
                      <button
                        className='hover:bg-orange-100 rounded-full font-bold '
                        onClick={() => {
                        setPopupInfoApi8(false);
                        }}>
                      <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
                    </div>
                <div className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                  
                    <div className="flex justify-between mt-5">
                      <div className="w-8/12 self-end">
                        <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                      </div>
                      <div className="self-end ">
                      <AddToFavoritesLocalStorage data={food}/>
                      </div>
                    </div>
                    <hr></hr>
                    <h3 className="text-lg mb-2">
                    <strong>Ingredients:</strong>
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
                      <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{food.strInstructions}</p>
                  
                      <h3 className="text-lg pt-5">
                        <strong>Youtube:</strong>
                      </h3>
                      <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>
                      
                      <h3 className="pt-5">
                        <strong>Source:</strong>
                      </h3>
                      <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                      <h3 className="pt-5">
                        <strong>Image:</strong>
                      </h3>
                      <div className="flex justify-center md:justify-start">
                        <img
                          className='w-80 h-80 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
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
          ) :
          (
            <div className='flex flex-wrap 2xl:w-4/5 border-8 md:w-11/12 justify-center bg-white border-double border-black py-10 md:mb-10 sm:mb-10 min-[360px]:mb-10 '>
              {/* ========================SEARCH INFO DIV */}

              {notFound ? (
                <div className="flex flex-wrap gap-16 md:gap-10 min-[360px]:gap-5 2xl:gap-16 justify-center">
                {getFoodApi?.map((food) => ( 
                <div key={food.idMeal} className="h-60 md:h-72 2xl:h-80">
                <div className='text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72'>
                  <img className='w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black' src={food.strMealThumb}
                    alt='Food_Picture_API1'/>
                  <div className='h-16 flex justify-center'>
                    <div className='font-medium text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center'>
                      {food.strMeal}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="justify-center flex ">
                    <div className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500" >
                      <button onClick={()=>{ toggleFood(food)}} className=" px-1 font-bold text-xs 2xl:text-sm ">Read More </button>
                      <img src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                    </div>
                  </div>
                </div>
                
                {showInfo && selectedFood === food && ( 
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'> 
                  <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]">
                  <div className="flex justify-between text-white my-1 ">
                      Food Info
                      <button
                        className='hover:bg-orange-100 rounded-full font-bold '
                        onClick={closePopup}>
                      <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
                    </div>
                    <div className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                    <div className="flex justify-between mt-5">
                      <div className="w-8/12 self-end">
                        <h1 className="text-2xl 2xl:text-4xl">{food.strMeal}</h1>
                      </div>
                      <div className="self-end ">
                      <AddToFavoritesLocalStorage data={food}/>
                      </div>
                    </div>
                    <hr></hr>
                    <h3 className="text-lg mb-2">
                      <strong>Ingredients:</strong>
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
                    <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{food.strInstructions}</p>
                
                    <h3 className="text-lg pt-5">
                      <strong>Youtube:</strong>
                    </h3>
                    <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strYoutube}</a>
                    
                    <h3 className="pt-5">
                      <strong>Source:</strong>
                    </h3>
                    <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{food.strSource}</a>

                    <h3 className="pt-5">
                      <strong>Image:</strong>
                    </h3>
                    <div className="flex justify-center md:justify-start">
                      <img
                        className='w-80 h-80 mt-3 rounded'
                        src={food.strMealThumb}
                        alt='Food_Picture_Search'
                      />
                    </div>
                  
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
              ):(
                  <div>
                    <div className="text-5xl bold">Error 404 not found</div>
                  </div>
              
              )}
         
            </div>
          )}
        
        </div>
        ):(
          //------------------------------------------ Country Division
          <div className=" w-full">

            <div className="flex flex-wrap justify-center items-center my-5 md:my-8 2xl:my-10 ">
              <p className="text-xl md:text-2xl 2xl:text-3xl mr-5 countryName font-bold ">{countryCode}</p>
              <img src={countryFlag} alt="Country Flag" className="2xl:w-28 2xl:h-20 md:w-24 md:h-18 w-20 h-14"/>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-wrap gap-16 md:gap-10 min-[360px]:gap-5 2xl:gap-16 w-screen 2xl:w-4/5 border-8 md:w-11/12 justify-center bg-white border-double border-black py-10 min-[360px]:mb-10" >
              {country.map((food) => (
                <div key={food.idMeal} className=" h-60 md:h-72 2xl:h-80">
                  <div className="text-center flex flex-col justify-center w-32 2xl:w-52 md:w-44 h-52 md:h-64 2xl:h-72"> 
                    <img src={food.strMealThumb}
                    alt="Country Food" className="w-32 h-32 2xl:w-52 2xl:h-52 md:w-44 md:h-44 rounded-lg border-2 border-black"/>
                    <div className="h-16 flex justify-center ">
                        <p className="font-bold text-[11px] md:text-[13px] pt-2 2xl:text-sm mb-2 self-center text-center">{food.strMeal}</p>
                    </div>
                  </div>
                  <div className="justify-center flex">
    
                    <div className="justify-center flex" onClick={()=>{ toggleCountryFood(food)}}>
                    <div  className="flex border-2 border-orange-500 text-orange-500 rounded-lg mb-2 hover:text-white hover:bg-orange-500">
                      <button className=" px-1 font-bold text-xs 2xl:text-sm ">Read More</button>
                      <img onClick={()=>{ toggleCountryFood(food)}} src={GreaterThan} alt="Greater Than"   className="w-6 h-6 bg-orange-100 cursor-pointer rounded-r-md"/>
                    </div>
                  </div>
                  </div>
                {showInfo && selectedFood === food && (
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                    {countryFoodDiv.map((countryFood)=>
                    <div className="px-1 border border-black 2xl:w-9/12 foodInfo sm:top-0 sm:left-0 2xl:top-[4%] 2xl:left-[12%] bg-black/80 rounded-md md:w-screen w-screen h-screen 2xl:h-[44rem]">
                      <div className="flex justify-between text-white my-1 ">
                      Recipe Info
                      <button
                        className='hover:bg-orange-100 rounded-full font-bold '
                        onClick={() => {
                          setShowInfo(false);
                        }}>
                      <img src={Closebutton} alt="close button" className="border rounded-full w-5 h-5 hover:border-black"/> 
                        </button>
                    </div>
                    <div key={countryFood.idMeal} className='p-5 inline-block w-full h-[94.6%] 2xl:w-full 2xl:h-[41.6rem] bg-orange-200 pt-5 overflow-auto border border-black'>
                      <div className="flex justify-between mt-5">
                        <div className="w-8/12 self-end">
                        <h1 className="text-2xl 2xl:text-4xl">{countryFood.strMeal}</h1>
                        </div>
                        <div className="self-end ">
                          <button onClick={()=>{ handleAddToFirestoreSearch(countryFood)}}><img src={FavoriteButton} alt="favorite button" className="hover:drop-shadow-2xl"/> </button>
                        </div>
                      </div>
                      <hr></hr>
                      <h3 className="text-lg mb-2">
                        <strong>Ingredients:</strong>
                      </h3>

                    <div className="grid grid-cols-2 text-xs 2xl:text-[15px]">
                      <div className="pl-5">
                        <p className="2xl:my-1"><span className="font-bold ">{countryFood.strIngredient1}</span> {countryFood.strMeasure1}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient2}</span> {countryFood.strMeasure2}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient3}</span> {countryFood.strMeasure3}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient4}</span> {countryFood.strMeasure4}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient5}</span> {countryFood.strMeasure5}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient6}</span> {countryFood.strMeasure6}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient7}</span> {countryFood.strMeasure7}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient8}</span> {countryFood.strMeasure8}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient9}</span> {countryFood.strMeasure9}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient10}</span> {countryFood.strMeasure10}</p>
                      </div>
                      <div className="pl-5">
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient11}</span> {countryFood.strMeasure11}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient12}</span> {countryFood.strMeasure12}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient13}</span> {countryFood.strMeasure13}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient14}</span> {countryFood.strMeasure14}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient15}</span> {countryFood.strMeasure15}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient16}</span> {countryFood.strMeasure16}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient17}</span> {countryFood.strMeasure17}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient18}</span> {countryFood.strMeasure18}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient19}</span> {countryFood.strMeasure19}</p>
                        <p className="2xl:my-1"><span className="font-bold">{countryFood.strIngredient20}</span> {countryFood.strMeasure20}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg pt-5">
                        <strong>Instructions:</strong>
                      </h3>
                      <p className="indent-10 text-justify px-5 text-xs 2xl:text-[15px]">{countryFood.strInstructions}</p>
                  
                      <h3 className="text-lg pt-5">
                        <strong>Youtube:</strong>
                      </h3>
                      <a href={countryFood.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{countryFood.strYoutube}</a>
                      
                      <h3 className="pt-5">
                        <strong>Source:</strong>
                      </h3>
                      <a href={countryFood.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline text-xs 2xl:text-[15px]">{countryFood.strSource}</a>

                      <h3 className="pt-5">
                        <strong>Image:</strong>
                      </h3>
                      <div className="flex justify-center md:justify-start">
                        <img
                          className='w-80 h-80 mt-3 rounded'
                          src={countryFood.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                      </div>
                      
                      </div>
                    </div>
                    </div>
                    )}
                  
                  </div>
                  )}
                </div>
              ))}
              </div>
            </div>
          </div>
          
        )
        
        
        } 

      
      <div className=" flex justify-center flex-wrap px-16 my-10 sm:hidden hidden 2xl:flex">

        <div className=" flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> AmericanFlagButton()} >
              <img src={AmericaFlag} alt="America flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">America</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> BritishFlagButton()}>
              <img src={ BritishFlag }alt="British flag" className="w-10 h-10 flagButton rounded"/>
              </button>
          </div>
          <span className="text-black mb-1 rounded-md">British</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> CanadaFlagButton()}>
              <img src={ CanadianFlag } alt="Canadian flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Canada</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> ChineseFlagButton()}>
              <img src={ ChineseFlag } alt="Chinese flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">China</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> CroatianFlagButton()}>
              <img src={ CroatianFlag } alt="Croatian flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Croatia</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> DuctchFlagButton()}>
              <img src={ DutchFlag } alt="Netherlands flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Netherlands</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> EgyptianFlagButton()}>
              <img src={ EgyptianFlag } alt="Egypt flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Egypt</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> PhilippineFlagButton()}>
            <img src={ PhilippineFlag } alt="Philippine flag" className="w-10 h-10 flagButton rounded"/>
          </button>
          </div>
          <span className="text-black mb-1 rounded-md">Philippines</span>
        </div>
        
        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> FrenchFlagButton()}>
              <img src={ FrenchFlag } alt="France flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">France</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> GreekFlagButton()}>
              <img src={ GreekFlag } alt="Greece flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Greece</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> IndianFlagButton()}>
              <img src={ IndianFlag } alt="Indian flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Indian</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> IrishFlagButton()}>
              <img src={ IrishFlag } alt="Ireland flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Ireland</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> ItalianFlagButton()}>
              <img src={ ItalianFlag } alt="Italy flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Italy</span>
        </div>
        
        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> JamaicanFlagButton()}>
              <img src={ JamaicanFlag } alt="Jamaica flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Jamaica</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> JapaneseFlagButton()}>
              <img src={ JapanFlag } alt="Japan flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Japan</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> KenyanFlagButton()}>
              <img src={ KenyaFlag } alt="Kenya flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Kenya</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> MalasianFlagButton()}>
              <img src={ MalasiaFlag } alt="Malaysia flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Malaysia</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> MexicanFlagButton()}>
              <img src={ MexicoFlag } alt="Mexico flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Mexico</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> MoroccanFlagButton()}>
              <img src={ MoroocanFlag } alt="Mexico flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Morocco</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> PolishFlagButton()}>
              <img src={ PolishFlag } alt="Poland flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Poland</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> PortugueseFlagButton()}>
              <img src={ PortugueseFlag } alt="Portugal flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Portugal</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> RussianFlagButton()}>
              <img src={ RussianFlag } alt="Russia flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Russia</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> SpanishFlagButton()}>
              <img src={ SpanishFlag } alt="Spain flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Spain</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> ThaiFlagButton()}>
              <img src={ ThaiFlag } alt="Thailand flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Thailand</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> TunisianFlagButton()}>
              <img src={ Tunisian } alt="Tunisia flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Tunisia</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> TurkishFlagButton()}>
              <img src={ TurkishFlag } alt="Turkey flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Turkey</span>
        </div>

        <div className="flex flex-col w-[90px] justify-center text-center pb-3">
          <div className="flex justify-center">
            <button onClick={()=> VietnamFlagButton()}>
              <img src={ VietnamFlag } alt="Vietnam flag" className="w-10 h-10 flagButton rounded"/>
            </button>
          </div>
          <span className="text-black mb-1 rounded-md">Vietnam</span>
        </div>

      </div>
      {favoriteSend && (
        <div className='w-screen h-screen border bg-white/60 text-white modalHome'>
            <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded text-center'>You successfully add {addFavorite} to your favorite.</div>
        </div>
      )}
      
      {favoriteAlready && (
        <div className='w-screen h-screen border bg-white/60 text-white modalHome'>
            <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded text-center'>{addFavorite} is already in favorites.</div>
        </div>
      )}
    </div>
  )
}

export default Menu;
