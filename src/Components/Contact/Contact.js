import { Stack, TextareaAutosize, TextField } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import React, { useEffect } from "react";

const Contact = () => {
  const Swal = require("sweetalert2");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_huvt3xs",
        "template_462lx2i",
        e.target,
        "user_zQrfSKjbCinBkUhYs7MbD"
      )
      .then(
        (result) => {
          console.log(result.text);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "message sent",
            showConfirmButton: false,
            timer: 1500,
          });

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="custom-container" id="contact">
        <div className="section-subHeading">
          <p>Say Hello</p>
        </div>

        <h2 className="section-title">Contact</h2>
        <div className="section-value ">
          <form onSubmit={sendEmail}>
            <Stack direction={{xs:'column',sm:'row'}} spacing={1}>
              <TextField
              data-aos="fade-up" 
              data-aos-duration="500"
              fullWidth
                hiddenLabel
                placeholder="Name"
                id="filled-size-small"
                sx={{
                  background: "rgba(204, 214, 246, .2)",
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                  borderRadius: "10px",
                }}
                color={"white"}
                variant="filled"
                name="name"
              />

              <TextField
              data-aos="fade-up" 
              data-aos-duration="500"
              fullWidth
                hiddenLabel
                placeholder="Email"
                type="email"
                id="filled-size-small"
                sx={{
                  background: "rgba(204, 214, 246, .2)",
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                  borderRadius: "10px",
                }}
                color={"white"}
                variant="filled"
                name="email"
              />
            </Stack>
            
            <TextField
             data-aos="fade-up" 
             data-aos-duration="700"
              fullWidth
              hiddenLabel
              placeholder="Subject"
              id="filled-size-small"
              sx={{
                background: "rgba(204, 214, 246, .2)",
                "& .MuiInputBase-root": {
                  color: "white",
                },
                borderRadius: "10px",
                my:"7px"

              }}
              color={"white"}
              variant="filled"
              name="subject"
            />

            <TextareaAutosize
             data-aos="fade-up" 
             data-aos-duration="900"
              aria-label="minimum height"
              minRows={8}
              placeholder="Write your message"
              name="message"
              style={{
                width: "96%",
                backgroundColor: "rgba(204, 214, 246, .2)",
                border: "none",
                borderRadius: "10px",
                padding: "10px 20px",
                color: "white",
                outline: "none",
              }}
            />

            <button className="gen-btn resume-btn"
            type='submit'
            data-aos="fade-up" 
            data-aos-duration="1000"
            >
                Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
