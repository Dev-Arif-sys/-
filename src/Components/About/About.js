import { Box, Stack } from "@mui/material";
import "aos/dist/aos.css";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="custom-container" id="about">
      <div className="section-subHeading">
        <p>some info</p>
      </div>

      <h2 className="section-title">About Me</h2>
      <Box
        data-aos="fade-up"
        data-aos-duration="800"
        sx={{
          marginBottom: "-30px",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
          justifyContent="center"
          alignItems={{
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
          }}
          spacing={5}
          className="section-value about-text"
        >
          <div>
            <p className="about-text" style={{ fontSize: "15px" }}>
              As a skilled front-end developer with one year of experience, I
              have a solid understanding of a range of technologies, including
             <span style={{color:'wheat'}}> JavaScript, Material UI, Bootstrap, Sass, ReactJS, React Router,
              RTK Query, Axios, Nodejs, Expressjs, MongoDB, Mongoose </span>. My expertise in these areas allows me to
              create visually stunning and highly functional user interfaces
              that engage and delight users.
            </p>
            <p className="about-text" style={{ fontSize: "15px" }}>
              Throughout my career, I have honed my ability to work
              collaboratively with cross-functional teams to deliver projects on
              time and on budget. I am skilled in identifying and
              troubleshooting complex problems.
            </p>
          </div>
          <Box
            data-aos="fade-left"
            data-aos-duration="800"
            sx={{
              boxShadow: "-9px -9px 0px 0px rgba(136, 146, 176, .2)",
              padding: "0",
              borderRadius: "8px",
            }}
          >
            <img
              className="about-gif"
              src="https://i.ibb.co/zZnYsH6/coding.gif"
              loading="lazy"
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default About;
