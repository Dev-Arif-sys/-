import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Blogs = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div className='custom-container' id='blogs'>
            <div  className='section-subHeading'>
            <p>See My</p>
            </div>
           
            <h2 className='section-title'>Blogs</h2>
            <div data-aos='zoom-in-left' className='section-value about-text'>
           <h2>Coming soon</h2>
            </div>

        </div>
    );
};

export default Blogs;