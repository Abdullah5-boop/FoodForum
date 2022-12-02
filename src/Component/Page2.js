import React from 'react';
import './page2.css'
import img2 from '../videos/photo2.jpg'
const Page2 = () => {
    return (
        <div className='page2container pb-36'>
            <section className='page1container grid grid-cols-2 order-2 px-10'>
            <div className='flex justify-center items-center ' >
                <div>
                    <div className="imgcontainer">
                        <img className='w-5/6' src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center '>

                <div className='page1txtcontainer'>
                    <h1 className=' text-start text-6xl font-bold'>Watch home cook tutorial</h1>
                    <p className='text-start text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos quod quibusdam, quae, veritatis recusandae rem officia facilis facere deserunt exercitationem tenetur nobis quisquam consequuntur, dolorem fugiat? Consequuntur, facere commodi!</p>
                    <div className='text-start mt-10'>

                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Study your recipes </button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Page2;