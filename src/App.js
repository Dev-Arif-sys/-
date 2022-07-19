
import Box from '@mui/material/Box';
import './App.css';
import Components from './Components/Components';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import { COLORS } from './constants/theme';

function App() {
  return (
    <Box className='app' style={{background:COLORS.primary}} >
     <NavBar/>
      {/* <SideBar></SideBar> */}
      <Box sx={{width:{lg:"95%",md:"100%",sm:"100%",xs:"100%"}, margin:"0 auto",position:"relative"}} >
       
      <Components></Components>
      </Box>
 
      <Footer></Footer>
     
    </Box>
  );
}

export default App;
