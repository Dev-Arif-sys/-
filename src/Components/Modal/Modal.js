import React, { useEffect, useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import MySlider from '../slider/MySlider';
import './Modal.css'
import { FaArrowRight } from 'react-icons/fa';




const ModalProject = (props) => {
    const {id}=props
    const [projects,setProject]=useState([])
    console.log(id)
    useEffect(()=>{
        fetch('./projectDetail.json')
        .then(res=>res.json())
        .then(data=>setProject(data))
    },[])
    const displayProject=projects?.find(project=>project.id===id)
    if(displayProject){
        var {Feature,Technology,clientlink,desc,img1,img2,img3,live,serverlink,title}=displayProject
    }
    
    const images={
        img1,
        img2,
        img3
    }
    
   
    console.log(displayProject)
    return (
        <div> 
        <Modal className=''
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            { title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bot-modal'>
            <div className='d-md-flex '>
                <div  className='slider-part'>
            <MySlider images={images}></MySlider>
            </div>
            <div  className='ms-md-5 text-white text-part'>
                <p>{desc}</p>
                <ul>
                    {
                        Feature?.map(feature=>{
                            return(
                                <li>{feature}</li>
                            )
                        })
                    }
                </ul>
                <a target="_blank" className='redirect-link' href={live}><FaArrowRight/> Live</a><br/>
                <a target="_blank" href={clientlink} className='redirect-link'  > <FaArrowRight/> Frontend code</a><br/>
                {serverlink &&  <a target="_blank" className='redirect-link'  href={serverlink}> <FaArrowRight/> Backend code</a>}
              
            </div>
            </div>
       
        
          <div className='mt-3'>
              <h5 className='text-white'>Technology:</h5>
             {
                 Technology?.map(tech=><button className='tech'>{tech}</button>)
             }
          </div>
        </Modal.Body>
       
      </Modal>
      </div>
  
    );
};

export default ModalProject;