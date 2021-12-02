import Button from '@restart/ui/esm/Button';
import React, { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    const Swal = require('sweetalert2')
    
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_huvt3xs', 'template_462lx2i', e.target, 'user_zQrfSKjbCinBkUhYs7MbD')
            .then((result) => {
                console.log(result.text);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'message sent',
                    showConfirmButton: false,
                    timer: 1500
                })

                e.target.reset()
               
            }, (error) => {
                console.log(error.text);
            });
          
    };

    return (
        <div>
            <div className='custom-container' id='contact'>
                <div className='section-subHeading'>
                    <p>Say Hello</p>
                </div>

                <h2 className='section-title'>Contact</h2>
                <div data-aos='zoom-in-right' className='section-value about-text'>

                    <form onSubmit={sendEmail}>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Name" name='name' />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Email" name='email' type='email' />
                            </Col>
                        </Row>
                        <Form.Control className='my-3' name='subject' placeholder="Subject" />
                        <Form.Control
                            as="textarea"
                            name='message'
                            placeholder="Leave a message here"
                            style={{ height: '100px' }}
                        />

                        <Button className='btn btn-primary mt-2' type="submit">
                            Submit
                        </Button>

                    </form>
                </div>

            </div>



        </div>
    );
};

export default Contact;