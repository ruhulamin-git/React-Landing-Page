import React from 'react'
import Fixedwidth from '../Fixedwidth';
import img2 from '../Images/Image2.png';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className=' bg-amber-500'>
                <Fixedwidth>
                    <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 justify-between m-5 py-5">
                        <div className=''>
                            <div className='lg:ms-10 md:ms-10 lg:mt-10 md:mt-10 pt-10 lg:w-full md:w-full '>
                                <div className="w-full relative flex items-center lg:rounded-2xl md:rounded-2xl  rounded-lg bg-white overflow-hidden py-2 px-2">
                                    <input
                                        className="w-full outline-none text-sm text-gray-700 px-1"
                                        type="text"
                                        id="search"
                                        placeholder="Enter Your Email" />
                                    <button className='lg:bg-orange-500 md:bg-orange-500 rounded-xl lg:text-white md:text-white text-orange-600 lg:text-sm md:text-sm lg:font-normal md:font-normal font-bold px-5 py-2 flex items-center'>
                                        Subscribe <span className='ps-2'><FaArrowRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className='lg:ms-10 md:ms-10 lg:mt-10 md:mt-10  pt-10 flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center w-full'>
                                <div className='lg:text-start md:text-start text-center mt-5 lg:mt-0 md:mt-0'>
                                    <div className=''><h1 className='text-4xl font-semibold '>pti<span className='text-red-600'>.</span></h1></div>
                                    <div className='pt-5'> <small className='font-bold'>Copyright&copy;Tripp.All Right Reserved</small></div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='p-2 rounded-full lg:bg-gray-200 md:bg-gray-200 bg-orange-600 text-white  lg:text-orange-600 md:text-orange-600 cursor-pointer'><FaGoogle />
                                    </div>
                                    <div className='p-2 rounded-full lg:bg-gray-200 md:bg-gray-200 bg-orange-600 text-white  lg:text-orange-600 md:text-orange-600 cursor-pointer'>
                                        <FaTwitter />
                                    </div>
                                    <div className='p-2 rounded-full lg:bg-gray-200 md:bg-gray-200 bg-orange-600 text-white  lg:text-orange-600 md:text-orange-600 cursor-pointer'>
                                        <IoLogoInstagram className='text-lg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-full md:me-10 lg:ps-10 lg:ms-10 hidden lg:block md:block'>
                            <img src={img2} alt="" className='h-80 w-96 p-5 ps-10 ms-10' />
                        </div>
                    </div>
                </Fixedwidth>
            </div>
        </>
    )
}

export default Footer