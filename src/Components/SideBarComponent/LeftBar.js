import Box from '@mui/material/Box';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import "./LeftBar.css";
const LeftBar = () => {
    const facebook= <FaLinkedinIn/>
    const github=<FiGithub/>
    return (
        <Box sx={{position:"fixed", bottom:"0",left:"50px"}} >
            <Box>
            <div className='social-btn-left'>
                
                <Box sx={{marginBottom:"200px"}}>

                     < Box sx={{marginBottom:"30px"}}>
                      <a target="_blank"  href='https://www.linkedin.com/in/mdariful-islam/' className='social-link'> {facebook}</a>
                      </Box>
                      <a target="_blank"  href='https://github.com/Dev-Arif-sys' className='social-link'>{github}</a>
                     
                      </Box>
                      </div>
            </Box>
        </Box>
    );
};

export default LeftBar;