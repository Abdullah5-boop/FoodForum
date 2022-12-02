import React from 'react';
import parallalimg from '../../videos/burger-1502449_1920.jpg'
import '../page2.css';
import { Parallax, Background } from 'react-parallax';
const SlideImg = () => {
    return (
        <div className='parallelcontainer'>
            {/* <img className='object-fill' src={parallalimg} alt="" /> */}
            <Parallax className='Parallaxcls' blur={1} bgImage={parallalimg} bgImageAlt="the cat" strength={500}>
    
    </Parallax>
 

        </div>
    );
};

export default SlideImg;