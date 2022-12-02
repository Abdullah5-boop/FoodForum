import React from 'react';
import './page1.css';
import food from '../videos/photo1.jpg'
const Page1 = () => {
    let formet = 'justify-center items-center'
    return (
        <section className='page1container grid grid-cols-2 order-2 px-12 '>
            <div className='flex justify-center items-center order-1' >
                <div>
                    <div className="imgcontainer">
                        <img className='w-5/6 ml-10' src={food} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center order-0'>

                <div className='page1txtcontainer'>
                    <h1 className=' text-start text-6xl font-bold'>Read recepie books</h1>
                    <p className='text-start text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos quod quibusdam, quae, veritatis recusandae rem officia facilis facere deserunt exercitationem tenetur nobis quisquam consequuntur, dolorem fugiat? Consequuntur, facere commodi!</p>
                    <div className='text-start mt-10'>

                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Study your recipes </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page1;