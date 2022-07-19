import About from './About/About';
import Blogs from './Blogs/Blogs';
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
            < About data-aos='fade-up'></About>
            <Skills></Skills>
            <Experience/>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Components;