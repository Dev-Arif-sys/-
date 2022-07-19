import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import LeftBar from '../SideBarComponent/LeftBar';
import './Intro.css';



const Intro = () => {
    const facebook= <FaLinkedinIn/>
    const github=<FaGithub/>
    
    const focusText={
        fontWeight:FONTS.bold, 
        fontSize:{
            lg:SIZES.xxl,
            md:SIZES.moderateLarge,
            sm:SIZES.moderateLarge,
            xs:SIZES.MediumLarge
        },
        lineHeight:{
            lg:"80px",
            md:"50px",
            sm:"50px",
            xs:"35x"
        }
    }
    return (
        <div className='intro' id='home'>
          
               <div className='intro-text' >
                   <Typography
                   sx={{fontSize:SIZES.font,fontWeight:FONTS.light,color:COLORS.white,marginBottom:"10px"}}
                   >Hello there ! I am</Typography>
                   <Box sx={{lineHeight:"2px"}}>
                   <Typography
                   sx={{...focusText, color:COLORS.secondary,margin:0}} 
                   > MD Ariful  Islam</Typography>
                    <Typography
                   sx={{...focusText, color:COLORS.action,lineHeight:{lg:"80px",sm:"40px",xs:"33px"}}} 
                   > I make websites come alive</Typography>

                   <Typography
                   sx={{
                    fontSize:SIZES.regular,
                    fontWeight:FONTS.light,
                    color:COLORS.action,
                    marginTop:"10px",
                    width:{lg:"52%",sm:"60%",xs:"50%"},
                  
                    wordSpacing:{
                        lg:"1px",
                        md:"1px",
                        sm:".25px",
                        xs:"0px"
                    }

                }}
                   >
                   I'm a <span style={{color:COLORS.white}}>front-end web developer</span> with a great customer grabbing designing sense.I am currently focusing on building more human interactive,accessible websites. 
                   </Typography>
                   </Box>
                  
                  

                 <Box marginTop={2}>
                   <div className='linkedBtn d-md-flex align-items-center'>
                       <a className='gen-btn' target="_blank" href='https://drive.google.com/file/d/1Hed6-ArgMUQWKYzGzqdHSNjugFv6v8-_/view?usp=sharing'>resume</a>
                      <div className='ms-3'>
                      {/* <a target="_blank"  href='https://www.linkedin.com/in/mdariful-islam/' className='social-link'> {facebook}</a>
                      <a target="_blank"  href='https://github.com/Dev-Arif-sys' className='social-link'>{github}</a> */}
                      </div>
                     
                   </div>
                   </Box>
                   </div> 
                   <LeftBar/>
        </div>
    );
};

export default Intro;