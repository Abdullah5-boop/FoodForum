import React from 'react';
import Homepage from './Homepage';
import Page1 from './Page1';
import Page2 from './Page2';
import SlideImg from './Parallex/SlideImg';
import Page3 from './Page3';
import Lastpage from './Lastpage';
import Footer from './Footer';
const HomepageMain = () => {
    return (
        <div>
            <Homepage  ></Homepage>
            <Page1 ></Page1>
            <Page2></Page2>
            <SlideImg></SlideImg>
            <Page3 />
            <Lastpage></Lastpage>
            <Footer></Footer>
        </div>
    );
};

export default HomepageMain;