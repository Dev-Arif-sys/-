import React, { useState } from 'react';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faHome,faUser,faLaptopCode,faBriefcase,faPhoneAlt,faBars } from '@fortawesome/free-solid-svg-icons'
import Button from '@restart/ui/esm/Button';


const SideBar = () => {
    const [isToggle,setToggle]=useState(false)
    const element = <FontAwesomeIcon icon={faCoffee} />
    const home = <FontAwesomeIcon icon={faHome} />
    const user = <FontAwesomeIcon icon={faUser} />
    const code = <FontAwesomeIcon icon={faLaptopCode} />
    const work = <FontAwesomeIcon icon={faBriefcase} />
    const contact=<FontAwesomeIcon icon={faPhoneAlt} />
    const bars=<FontAwesomeIcon icon={faBars} />
    const toggleBar=()=>{
        
    
        setToggle(!isToggle)
        console.log(isToggle)
    }
    return (
        <div>
             <button className='toggle-btn' onClick={toggleBar}> {bars}</button>
        <div id='sideBar' className={isToggle ? 'active' : 'deactive'}>
           
            <h1>AI</h1>
            <div className='barItems' >
           <a href="#home"> {home} <span>Home</span></a>
         <a href="#about"> {user}  <span>About</span></a>
          <a href="#skills">{code} <span>skills</span></a>
              <a href="#project">{work}<span>Works</span></a>
              <a href="#blogs">{work}<span>Blogs</span></a>
              <a href="#contact">{contact}<span>contact</span></a>
              </div>
              
        </div>
        </div>
    );
};

export default SideBar;