import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";


const Navbar = () => {
    return (
        <>
            <div className='flex justify-between lg:m-5 md:m-5 py-1 lg:shadow-none md:shadow-none shadow-md 
            pb-3'>
                <div className='lg:ms-0 md:ms-0 ms-2 lg:mt-0 md:mt-0 mt-2'><h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold pt-1'>pti.</h1></div>
                <div className='flex items-center mx-2 lg:ms-0 md:ms-0 ms-2 lg:mt-0 md:mt-0 mt-2'>
                    <div className="lg:w-96 md:w-96 w-60 relative flex items-center rounded-lg bg-white overflow-hidden py-2 px-2">
                        <div className='text-orange-500 text-lg  pe-1'>
                            <IoSearch />
                        </div>
                        <input
                            className="w-full outline-none text-sm text-gray-700 px-1"
                            type="text"
                            id="search"
                            placeholder="Search Audiobook" />
                    </div>
                    <div className="lg:w-28 md:w-28 w-18 relative inline-block mx-2 dropdown-container">
                        <div className='relative flex items-center rounded-lg bg-white overflow-hidden py-2 lg:px-2 md:px-2 px-1 menuButton'>
                            <div className='ps-1 lg:pe-4 md:pe-4 '><p className='text-sm font-bold'>Menu</p></div>
                            <div className='pe-1 lg:ps-5 md:ps-5 text-orange-500 '>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className='absolute end-0 mt-1 rounded-lg bg-white focus:outline-none dropdownContent'>
                            <div className='py-1'>
                                <a href='#' className='text-gray-700 block px-3 py-1 text-sm dropdown-item'>
                                    Home
                                </a>
                                <a href="#" className="text-gray-700 block px-3 py-1 text-sm dropdown-item">
                                    Details
                                </a>
                                <a href="#" className="text-gray-700 block px-3 py-1 text-sm dropdown-item">
                                    Category
                                </a>
                                <a href="#" className="text-gray-700 block px-3 py-1 text-sm dropdown-item">
                                    My Favorites
                                </a>
                                <a href="#" className="text-gray-700 block px-3 py-1 text-sm dropdown-item">
                                    Profile
                                </a>
                                <a href="#" className="text-gray-700 block px-3 py-1 text-sm dropdown-item">
                                    Log In/Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block md:block'>
                    <div className='p-3 bg-orange-500 text-white rounded-full text-xl'>
                        <LuUser2 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
