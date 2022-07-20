import React from 'react';
import "./BlurEffect.css";

const BlurEffect = ({anchorElNav, setAnchorElNav}) => {
    return (
        <div className='blur-effect' onClick={()=> setAnchorElNav(null)} style={anchorElNav && {display:"block"}} >
            
        </div>
    );
};

export default BlurEffect;