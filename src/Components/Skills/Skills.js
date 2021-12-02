import React, { useEffect } from 'react';
import './Skills.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
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
        logo:'https://i.ibb.co/cXNnCp8/Java-Script-logo.png'
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
        logo:'https://i.ibb.co/v3XmtVb/express-js.png'
    },
    {
        name:'MongoDB',
        logo:'https://i.ibb.co/g30062J/mongoDb.png'
    },
    {
        name:'Firebase',
        logo:'https://i.ibb.co/5BNY4GS/firebase.png'
    },
    {
        name:'Git',
        logo:'https://i.ibb.co/VxvX4FQ/git.png'
    },
    {
        name:'VS code',
        logo:'https://i.ibb.co/CK8sCQB/vs-code.png'
    }
]
const Skills = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return (
        <div className='custom-container' id='skills'>
        <div  className='section-subHeading'>
        <p>Check Out My</p>
        </div>
       
        <h2 className='section-title'>Skills</h2>
        <div data-aos='zoom-in-right' className='section-value skills-container'>
         {
             skills.map(skill=>{
                 return(
                     <div className='skill' >
                         <img className='logo' src={skill.logo}/>
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