import { Box, Typography } from '@mui/material';
import React from 'react';
import "./RighBar.css";

const RightBar = () => {
    return (
        <Box sx={{position:"fixed", bottom:"0",right:"50px"}} >
            <Box>
            <div className='social-btn-right'>
                
                <Box sx={{marginBottom:"250px"}}>
                    
                    <Typography
                     className="email-text"
                    >
                    arifru.contact@gmail.com
                    </Typography>
                    
                     
                      </Box>
                      </div>
            </Box>
        </Box>
    );
};

export default RightBar;