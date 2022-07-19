import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import ModalProject from '../Modal/Modal';
import './Projects.css';

const Projects = () => {
    const [modalShow, setModalShow] = useState(false)
    const [id,setId]=useState()
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const handleBtnClick = (id) => {
        setModalShow(true)
        setId(id)
    }

    return (
        <div className='custom-container' id='project'>
            {
                modalShow &&
                <ModalProject
                show={modalShow}
                onHide={()=>{setModalShow(false)}}
                id={id}
                ></ModalProject>
            }
           
            <div className='section-subHeading'>
                <p>Take a look at my</p>
            </div>

            <h2 className='section-title'>Projects</h2>

            

            <div data-aos='zoom-in-left' className='section-value projects'>

            <div className='emarket project-card'>
                    <div className="tech-slideshow tex-center ">
                        <div className="mover-1"> </div>
                        <div className="mover-2"></div>

                    </div>
                    <div className='d-flex mt-3 justify-content-between project-text'>
                        <h5>EMARKET</h5>
                        <button onClick={()=>handleBtnClick(0)} className='btn btn-outline-secondary btn-sm'>details</button>
                    </div>

                </div>

                <div className='raceredge project-card'>
                    <div className="tech-slideshow tex-center ">
                        <div className="mover-1"> </div>
                        <div className="mover-2"></div>

                    </div>
                    <div className='d-flex mt-3 justify-content-between project-text'>
                        <h5>Racer Edge</h5>
                        <button onClick={()=>handleBtnClick(1)} className='btn btn-outline-secondary btn-sm'>details</button>
                    </div>

                </div>



                <div className='travisit project-card'>
                    <div className="tech-slideshow tex-center ">
                        <div className="mover-1"> </div>
                        <div className="mover-2"></div>

                    </div>
                    <div className='d-flex mt-3 justify-content-between project-text'>
                        <h5>Travisit</h5>
                        <button onClick={()=>handleBtnClick(2)} className='btn btn-outline-secondary btn-sm'>details</button>
                    </div>

                </div>



                <div className='healtho project-card'>
                    <div className="tech-slideshow tex-center ">
                        <div className="mover-1"> </div>
                        <div className="mover-2"></div>

                    </div>
                    <div className='d-flex mt-3 justify-content-between project-text'>
                        <h5>Healtho</h5>
                        <button onClick={()=>handleBtnClick(3)} className='btn btn-outline-secondary btn-sm'>details</button>
                    </div>

                </div>



                <div className='financio project-card'>
                    <div className="tech-slideshow tex-center ">
                        <div className="mover-1"> </div>
                        <div className="mover-2"></div>

                    </div>
                    <div className='d-flex mt-3 justify-content-between project-text'>
                        <h5>Financio</h5>
                        <button onClick={()=>handleBtnClick(4)} className='btn btn-outline-secondary btn-sm'>details</button>
                    </div>

                </div>




              







            </div>





        </div >
    );
};

export default Projects;