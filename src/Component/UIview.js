import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Fetching.css';
const UIview = () => {
    const [value, setvalue] = useState([])

    // const url='https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setvalue(data.meals))

    }, [])
  console.log(value)
    return (
        <div className='grid grid-cols-3'>
            {value.map(data => <><Card data={data}></Card></>)}
        </div>
    );
};

export default UIview;