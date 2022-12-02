import React from 'react';
import './Banner.css'
import vdo from '../videos/videoplayback 2.webm'
const Banner = () => {
    
    return (
        <>
            <section>
                <div className=' grid lg:grid-cols-2 grid-cols-1 containers px-10'>
                    <div className=' flex justify-center items-center '>
                        <video src={vdo} autoPlay muted loop></video>
                    </div>
                    <div className='flex justify-center items-end headingcontainer mb-40  h-100'>
                        <h1 className=' heading text-6xl '>
                            <h1>simple and tasty </h1>
                            <h1>recipes near me</h1>
                            {/* <h1>sit amet consectetur </h1> */}
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;