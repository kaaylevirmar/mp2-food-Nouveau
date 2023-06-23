import React from "react";
import { useState, useEffect } from "react";
import FavoriteButton from '../images/icons8-favorite-48.png';

const AddToFavoritesLocalStorage = ({ data }) => {
  const [favoriteSend, setFavoriteSend] = useState(false);
  const [favoriteAlready, setFavoriteAlready] = useState(false);
  const [addFavorite, setAddFavorite] = useState("");

  useEffect(() => {
    // Load favorites from local storage when the component mounts
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const [favorites, setFavorites] = useState([]);
  
  const handleAddToFavorites = () => {
    // Check if the item already exists in favorites
    const isDuplicate = favorites.some(
      (favorite) => favorite.idMeal === data.idMeal
    
    );
    
    if (isDuplicate) {
      setFavoriteAlready(true);
      setAddFavorite(data.strMeal);
      setTimeout(() => {
        setFavoriteAlready(false);
      }, 2000);
      return;
    }
  
    // Add the item to favorites array
    const updatedFavorites = [...favorites, data];
    setFavorites(updatedFavorites);

    // Store favorites in local storage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteSend(true);
    setTimeout(() => {
      setFavoriteSend(false);
    }, 2000);

    setAddFavorite(false);
  };

  return (
    <div>
      <button onClick={handleAddToFavorites}>
        <img
          src={FavoriteButton}
          alt='favorite button'
          className='hover:drop-shadow-2xl'
        />
      </button>

      {favoriteAlready && (
        <div className='flex justify-center bg-black/20 items-center w-full border h-full modalHomeSent'>
        <div className=' lg:w-[30%] lg:h-[12%] / sm:w-[50%] sm:h-[10%] w-[70%] h-[8%] flex items-center justify-center  bg-white border-4 border-orange-600 rounded-lg thankYouModal'>
          
            <p className='xl:text-base md:text-sm  / sm:text-sm text-xs font-bold text-orange-600'>
            {addFavorite} is already in favorites.</p>
        
        </div>
      </div>
      )}

      {favoriteSend && (
       <div className='flex justify-center bg-black/20 items-center w-full border h-full modalHomeSent'>
       <div className=' lg:w-[30%] lg:h-[12%] / sm:w-[50%] sm:h-[10%] w-[70%] h-[8%] flex items-center justify-center  bg-white border-4 border-orange-600 rounded-lg thankYouModal'>
         
           <p className='xl:text-base md:text-sm  / sm:text-sm text-xs font-bold text-orange-600'>
           You successfully add {addFavorite} to your favorite.</p>
       
       </div>
     </div>
      )}
    </div>
  );
};

export default AddToFavoritesLocalStorage;


