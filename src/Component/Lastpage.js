import React from 'react';

import lastvdo from '../videos/videoplayback (1).webm'
const Lastpage = () => {
    return (
        <div className=' mb-36'>
             <div className='flex justify-center'>
            <video muted loop autoPlay src={lastvdo}/>
        </div>
        <button className='btn btn-wide mt-10'>subscribe now</button>
        </div>
    );
};

export default Lastpage;