import React from 'react';
import img1 from '../Images/Image1.png';

const Home = () => {
    return (
        <>
            <div className='container lg:py-10 md:py-10'>
                <div className="row lg:bg-amber-500 md:bg-amber-500 rounded-3xl lg:m-5 md:m-5 lg:flex md:flex lg:px-5 md:px-5 items-center justify-between py-5">
                    <div className='text-center lg:text-start md:text-start capitalize lg:text-white md:text-white lg:p-10 md:p-10 p-3'>
                        <h1 className='lg:text-5xl md:text-4xl text-3xl'>delivar food to your door step|</h1>
                        <p className='lg:text-xl md:text-xl  mt-5 lg:text-zinc-300 md:text-zinc-300 '>authentic food|, quick service, fast delivery</p>
                    </div>
                    <div className='bg-amber-500 rounded-xl m-3'>
                        <img src={img1} alt="" className='' />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home