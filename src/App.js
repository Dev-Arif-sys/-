
import Box from '@mui/material/Box';
import React from 'react';
import './App.css';
import Components from './Components/Components';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import BlurEffect from './Components/SideBar/BlurEffect';
import SideBar from './Components/SideBar/SideBar';
import { COLORS } from './constants/theme';

function App() {
  // const [navToggle,setNavToggle]=useState(f)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  console.log(anchorElNav)
  return (
    <Box className='app' style={{background:COLORS.primary}} >
     <NavBar anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} />
      <SideBar activeNav={anchorElNav} ></SideBar>
      <BlurEffect anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav}  ></BlurEffect>
      <Box sx={{width:{lg:"95%",md:"100%",sm:"100%",xs:"100%"}, margin:"0 auto",position:"relative"}} >
       
      <Components></Components>
      </Box>
 
      <Footer></Footer>
     
    </Box>
  );
}

export default App;
