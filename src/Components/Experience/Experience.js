import { Box } from "@mui/material";
import Aos from "aos";
import { useEffect } from "react";
import './Experience.css';

const Experience = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className='custom-container' id='experience'>
            <div className='section-subHeading'>
                <p>some info</p>
            </div>

            <h2 className='section-title'>Experience</h2>
            <Box  sx={{marginTop:{sm:3,xs:1}}}>

                <div data-aos="fade-up"
     data-aos-duration="500" style={{ lineHeight: "15px" }} className='exp-title'>
                    <p>Full Stack MERN Developer, <span style={{fontSize:"12px"}}>(May-2022 to September 2020)</span></p>
                    <p style={{ fontWeight: "bold" }}>Qawmi University</p>
                </div>


                <div
                
              
                >
                <ul  >
                    <li className="exp-desc" data-aos="fade-up"
                data-aos-duration="600" > Built A LMS for their operation. (<a href='https://qawmiuniversity.com' target={'_blank'} style={{textDecoration:'none'}}>live</a>)

                    </li>
                    <li className="exp-desc" data-aos="fade-up"
                data-aos-duration="700"> working here in both frontend and backend  specially  in 
                    <ul> 
                        <li>UI design with React</li>
                        
                        <li>UI design with React</li>
                        <li>in multilanguage system</li>
                        <li>Authentication </li>
                        <li>Authorization</li>
                        <li>SMS gateway</li>
                        <li>DataTables </li>
                        <li>Audio App</li>
                        <li>REST api Integration and creating </li>
                        <li>Course creating and selling  </li>
                        <li>integration of payment gateway</li>
                       </ul>
                       </li>
                    <li className="exp-desc" data-aos="fade-up"
                data-aos-duration="800">Technology Used:SASS, React Js,Material UI, React Router,Redux-Toolkit, Nodejs, Mongoose, MongoDB.</li>
                </ul>
            </div>

            </Box>
           

        </div>
    );
};

export default Experience;