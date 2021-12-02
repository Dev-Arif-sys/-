import React, { useEffect } from 'react';
import Intro from './Intro/Intro';
import './Components.css'
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Blogs from './Blogs/Blogs';


const Components = () => {
      
    return (
        <div className='components'>
            <Intro></Intro>
            < About data-aos='fade-up'></About>
            <Skills></Skills>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Components;