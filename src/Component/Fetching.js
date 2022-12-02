import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Fetching.css'
import Nav from './Nav';
const Fetching = () => {
    let list=<>
    <li className=''><Link to='fetching/1'>All</Link></li>
    <li className=''><Link to='fetching/2'>Sweet</Link></li>
    <li className=''><Link to='fetching/2'>Spicey</Link></li>
    
    </>
    return (
        <>
            <Nav></Nav>
            <div className="pt-36  drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side border">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 mx-10 w-80 bg-base-100 text-base-content">

                       {list}
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Fetching;