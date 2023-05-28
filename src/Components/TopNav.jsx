import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsPerson } from 'react-icons/bs';
import { TbTruckReturn } from 'react-icons/tb';
import { FaGoogleWallet } from 'react-icons/fa';
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';

const TopNav = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <>
      <div className="flex items-center">
        <button
          onClick={() => setShowSideNav(!showSideNav)}
          type="button"
          className="p-0 rounded-none border-none cursor-pointer"
        >
          <AiOutlineMenu size={25} />
        </button>

        <h1 className="text-2xl md:text-3xl lg:text-4xl px-2">
          Yum
          <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px">
          <p className="bg-orange-700 text-white rounded-full p-2 font-bold">
            Free
          </p>
          <p className="p-2 font-bold">Delivery</p>
        </div>
      </div>
      <label
        htmlFor="search"
        className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] md:w-[400px] lg:[500px]"
      >
        <AiOutlineSearch size={25} className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search meals"
          className="bg-transparent p-2 w-full focus:outline-none"
          name="search"
          id="search"
        />
      </label>
      <button
        type="button"
        className="bg-orange-700 text-white hidden md:flex items-center rounded-full py-2"
      >
        <BsFillCartFill size={20} />
        Cart
      </button>
      {showSideNav && (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setShowSideNav(!showSideNav)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setShowSideNav(!showSideNav);
            }
          }}
          aria-label="Toggle Side Navigation"
        />
      )}
      <div
        className={
          showSideNav
            ? 'fixed z-10 top-0 left-0 bg-white w-[300px] h-screen duration-200'
            : 'fixed z-10 top-0 left-[-100%] bg-white w-[300px] h-screen duration-200'
        }
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-xl md:text-2xl lg:text-3xl px-2">
            Yum
            <span className="text-orange-700 font-bold">Eats</span>
          </span>
          <button
            onClick={() => setShowSideNav(!showSideNav)}
            type="button"
            className="p-0 rounded-none border-none cursor-pointer"
          >
            <AiOutlineClose size={25} />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col justify-between gap-4 p-4 text-xl">
            <li className="flex gap-2 items-center">
              <BsPerson size={20} />
              My Account
            </li>
            <li className="flex gap-2 items-center">
              <TbTruckReturn size={20} />
              Delivery
            </li>
            <li className="flex gap-2 items-center">
              <MdOutlineFavorite size={20} />
              My Favourite
            </li>
            <li className="flex gap-2 items-center">
              <FaGoogleWallet size={20} />
              My Wallet
            </li>
            <li className="flex gap-2 items-center">
              <MdHelp size={20} />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TopNav;
