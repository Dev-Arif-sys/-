import Aos from "aos";
import { useEffect } from "react";

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
            <div data-aos='zoom-in-left' className='section-value about-text'>

                <div style={{ lineHeight: "4px" }}>
                    <p>Full Stack MERN Developer, (contractual)</p>
                    <p style={{ fontWeight: "bold" }}>Qawmi University</p>
                </div>


                <div>
                <ul>
                    <li> Building A LMS for their operation.

                    </li>
                    <li> working here in both frontend and backend  specially  in ,UI design with React, in multilanguage system,Authentication, Authorization, SMS gateway, DataTables, Audio App, REST api Integration and creating , Redux.</li>
                    <li>Technology Used:SASS, React Js,Material UI, React Router,Redux-Toolkit, Nodejs, Mongoose, MongoDB.</li>
                </ul>
            </div>

            </div>
           

        </div>
    );
};

export default Experience;