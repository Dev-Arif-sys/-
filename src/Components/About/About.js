import { Box, Stack } from '@mui/material';
import 'aos/dist/aos.css';
import React from 'react';
import './About.css';

const About = () => {
    
    return (
        <div className='custom-container' id='about'>
            <div  className='section-subHeading'>
            <p>some info</p>
            </div>
           
            <h2 className='section-title'>About Me</h2>
            <Box
              data-aos="fade-up"
              data-aos-duration="800"
            sx={{
                marginBottom:"-30px",

            }}
            >

            <Stack direction={{xs:"column",sm:"row", md:"row",lg:"row"}} justifyContent='center' alignItems={{xs:"center",sm:"flex-start", md:"flex-start",lg:"flex-start"}}   spacing={5}  className='section-value about-text'>
             <p className='about-text' style={{fontSize:"15px"}} >I'm a front-end web developer with a great customer grabbing designing sense.i build applications to solve customer problems. Recently, I have done some projects on MERN stack. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
             <Box
             data-aos="fade-left"
             data-aos-duration="800"
             sx={{
                boxShadow: "-9px -9px 0px 0px rgba(136, 146, 176, .2)",
                padding:"0",
                borderRadius:"8px"
             }}
             >
             <img className='about-gif' src='https://i.ibb.co/zZnYsH6/coding.gif'   loading='lazy'/>
             </Box>
        
            </Stack>
            </Box>

        </div>
    );
};

export default About;