import React from 'react';
import './Fetching.css'
const Card = ({data}) => {
    return (
        <div className='foodcard'>
            <div class=" foodcard card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={data.strMealThumb} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-4xl text-start p-3">{data.strMeal}</h2>
                    <p className='text-2xl text-start'>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;