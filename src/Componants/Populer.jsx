import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';


const Populer = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=${currentPage}&pageSize=5`);
                setItems(response.data.Items);
                setTotalPages(Math.ceil(response.data.TotalCount / 5));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="container mt-10">
                <div className="row m-5 mt-10">
                    <div className="flex justify-between">
                        <p className="text-xl">Popular</p>
                        <div className='flex items-center '>
                            <p
                                className="text-orange-500 cursor-pointer hidden lg:block md:block "
                                onClick={() => setShowModal(true)}
                            >
                                AddMore
                            </p>
                            {showModal ? (
                                <>
                                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="flex justify-between items-center gap-5 m-4">
                                                    <h3 className="text-2xl pe-5 font=semibold">Add New Card Items</h3>
                                                    <div
                                                        className="ps-5"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        <IoMdClose className='text-3xl text-red-500 cursor-pointer' />
                                                    </div>
                                                </div>
                                                <div className="relative flex-auto m-4">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image File</label>
                                                    <input className=" w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-90 dark:text-gray-400 focus:outline-none " aria-describedby="file_input_help" id="file_input" type="file" />
                                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                                                    <label for="email" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
                                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Item Name" required />

                                                </div>
                                                <div className="flex items-center m-4">
                                                    <button
                                                        className="w-full text-white bg-orange-500 active:bg-yellow-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none "
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                            <div className='flex ms-2'>
                                <span className={` cursor-pointer ${currentPage === 1 ? 'text-gray-400' : 'text-orange-500'}`}>
                                    <FaAngleLeft onClick={handlePrevPage} />
                                </span>
                                <span className={`text-orange-500 cursor-pointer ${currentPage === totalPages ? 'text-gray-400' : ''}`}>
                                    <FaAngleRight onClick={handleNextPage} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row flex pb-10">
                    <div className="hidden sm:block w-full">
                        <div className=" flex ">
                            {items.slice(0, 5).map((item) => (
                                <div key={item.Id} className="p-4" style={{ width: '250px', height: '300px' }}>
                                    <img src={item.ImageUrl} className="rounded-xl shadow-lg w-full h-full object-cover" alt={item.Name} />
                                    <h3 className="text-center py-3">{item.Name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="block sm:hidden w-full ">
                        <div className=" flex ">
                            {items.slice(0, 2).map((item) => (
                                <div key={item.Id} className="p-4" style={{ width: '250px', height: '300px' }}>
                                    <img src={item.ImageUrl} className="rounded-xl shadow-lg w-full h-full object-cover" alt={item.Name} />
                                    <h3 className="text-center py-3">{item.Name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Populer

