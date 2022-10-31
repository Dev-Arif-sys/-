import About from './About/About';
import './Components.css';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';


const Components = () => {
      
    return (
        <div className='components'>
            <Intro></Intro>
            < About ></About>
            <Skills></Skills>
            <Experience/>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Components;