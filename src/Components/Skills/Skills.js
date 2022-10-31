import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import './Skills.css';
 const skills=[
    {
        name:'HTML',
        logo:'https://i.ibb.co/4NtcXf0/html.png'
    },
    {
        name:'CSS',
        logo:'https://i.ibb.co/L529Jq0/css3-logo.png'
    },
    {
        name:'Bootstrap',
        logo:'https://i.ibb.co/1ZqT0yP/bootstrap-logo.png'
    }, {
        name:'Javascript',
        logo:'https://i.ibb.co/0f6XW7Y/download-removebg-preview.png'
    },
    {
        name:'React',
        logo:'https://i.ibb.co/y6fmh24/584830f5cef1014c0b5e4aa1.png'
    },
    {
        name:'Node js',
        logo:'https://i.ibb.co/H2qShvv/1280px-Node-js-logo-svg.png'
    },
    {
        name:'Express js',
        logo:'https://i.ibb.co/2tx8Wpm/express-logo-removebg-preview.png'
    },
    {
        name:'MongoDB',
        logo:'https://i.ibb.co/hd5DMTd/Mongo-DB-Emblem-removebg-preview.png'
    },
    {
        name:'Firebase',
        logo:'https://i.ibb.co/P5tPXrM/logo-logomark-removebg-preview.png'
    },
    {
        name:'Git',
        logo:'https://i.ibb.co/RT7RWH9/Git-Icon-1788-C.png'
    },
 
]
const Skills = () => {
    useEffect(()=>{
     
    },[])

    return (
        <div className='custom-container' id='skills'>
        <div  className='section-subHeading'>
        <p>Check Out My</p>
        </div>
       
        <h2 className='section-title'>Skills</h2>
        <div className='section-value skills-container'>
         {
             skills.map((skill,index)=>{
                 return(
                     <div 
                     data-aos="fade-up" 
                      className='skill' 
                      data-aos-duration={`${index}00`}
                      >
                         <img className='logo' src={skill.logo} loading='lazy'/>
                         <p className='skill-name'>{skill.name}</p>
                     </div>
                 )
             })
         }
        </div>

    </div>
    );
};

export default Skills;