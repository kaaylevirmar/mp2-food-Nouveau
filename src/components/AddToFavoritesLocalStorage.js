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
        <div className='w-screen h-screen border bg-white/60 text-white modalHome'>
          <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded text-center'>
            {addFavorite} is already in favorites.
          </div>
        </div>
      )}

      {favoriteSend && (
        <div className='w-screen h-screen border bg-white/60 text-white modalHome'>
          <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded text-center'>
            You successfully add {addFavorite} to your favorite.
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToFavoritesLocalStorage;
