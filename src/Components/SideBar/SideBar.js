import { faBars, faBriefcase, faCoffee, faHome, faLaptopCode, faPhoneAlt, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './SideBar.css';


const SideBar = () => {
    const [isToggle,setToggle]=useState(false)
    const element = <FontAwesomeIcon icon={faCoffee} />
    const home = <FontAwesomeIcon icon={faHome} />
    const user = <FontAwesomeIcon icon={faUser} />
    const code = <FontAwesomeIcon icon={faLaptopCode} />
    const work = <FontAwesomeIcon icon={faBriefcase} />
    const project = <FontAwesomeIcon icon={faProjectDiagram} />
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
          <a href="#experience">{work} <span>Experience</span></a>
              <a href="#project">{project}<span>Projects</span></a>
              <a href="#blogs">{work}<span>Blogs</span></a>
              <a href="#contact">{contact}<span>contact</span></a>
              </div>
              
        </div>
        </div>
    );
};

export default SideBar;