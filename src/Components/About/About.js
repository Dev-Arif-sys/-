import React, { useEffect } from 'react';
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div className='custom-container' id='about'>
            <div  className='section-subHeading'>
            <p>some info</p>
            </div>
           
            <h2 className='section-title'>About Me</h2>
            <div data-aos='zoom-in-left' className='section-value about-text'>
             <p>I'm a front-end web developer with a great customer grabbing designing sense.i build applications to solve customer problems. Recently, I have done some projects on MERN stack. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
            </div>

        </div>
    );
};

export default About;