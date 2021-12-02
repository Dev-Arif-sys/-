import React from 'react';
import './Intro.css'
import img from '../../media/myimg.png'
import github from '../../media/github.svg'
import linkedin from '../../media/linkedin.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLinkedinIn,FaGithub } from 'react-icons/fa';



const Intro = () => {
    const facebook= <FaLinkedinIn/>
    const github=<FaGithub/>
    return (
        <div className='intro' id='home'>
           <div className='image'>
               <img src={img}/>
               </div>
               <div className='intro-text'>
                   <h3>Hello there ! I am</h3>
                   <h1><span className='name-portion'>MD Ariful </span> Islam</h1>
                   <p>
                   A MERN Stack Developer passionate about creating interactive applications and experiences on the web.
                   </p>
                   <div className='linkedBtn d-md-flex align-items-center'>
                       <a className='gen-btn' target="_blank" href='https://drive.google.com/file/d/1mqGGe2tkF0MIDsXUqc_zTdb5b566OGse/view?usp=sharing'>resume</a>
                      <div className='ms-3'>
                      <a target="_blank"  href='https://www.linkedin.com/in/mdariful-islam/' className='social-link'> {facebook}</a>
                      <a target="_blank"  href='https://github.com/Dev-Arif-sys' className='social-link'>{github}</a>
                      </div>
                     
                   </div>
                   </div> 
        </div>
    );
};

export default Intro;