import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  let [toggle, setToggle] = useState(false);

  return (
    <div className="navDiv w-full">
      <nav className='flex justify-between bg-orange-500 text-white px-10 py-5 '>
        <div className="flex items-center">
          <Link to='/' className="text-xl md:text-3xl 2xl:text-4xl font-black"><span className="text-black">Food </span><span>Nouveau</span></Link>
        </div>
        <div className='right-4 top-4 sm:hidden '>
          <button
            className=' focus:border-black'
            onClick={() => {
              setToggle(!toggle);
            }}>
            <BiMenu size={35} />
          </button>
        </div>

        <ul className='max-sm:hidden gap-10 flex md:text-xl 2xl:text-2xl p-1 pr-15 text-white font-semibold'>
          <li>
            <Link to='/'className="hover:bg-orange-300 hover:text-black p-1 rounded-lg">Home</Link>
          </li>
          <li>
            <Link to='/menu' className="hover:bg-orange-300 hover:text-black p-1 rounded-lg">Recipes</Link>
          </li>
          <li>
            <Link to='/favorites' className="hover:bg-orange-300 hover:text-black p-1 rounded-lg">Favorites</Link>
          </li>
          <li>
            <Link to='/addrecipe' className="hover:bg-orange-300 hover:text-black p-1 rounded-lg">Add Recipe</Link>
          </li>
        </ul>
      </nav>
      {
      toggle && (
        <div >
          <div className='text-white justify-center flex flex-col items-center bg-orange-400'>
            <div className=' flex justify-center active:font-bold  py-3 '>
              <Link to='/' className="hover:bg-orange-300 p-1 rounded-lg">Home</Link>
            </div>
            <div className='py-3 flex justify-center active:font-bold '>
              <Link to='/menu' className="hover:bg-orange-300 p-1 rounded-lg">Menu</Link>
            </div>
            <div className='py-3 container flex justify-center active:font-bold'>
              <Link to='/Favorites' className="hover:bg-orange-300 p-1 rounded-lg">Favorites</Link>
            </div>
            <div className='py-3 container flex justify-center active:font-bold'>
              <Link to='/addrecipe' className="hover:bg-orange-300 p-1 rounded-lg">Add Recipe</Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;
