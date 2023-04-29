import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
const Project = () => {
  return (
    <div>
      <Grid container alignItems={"flex-start"} spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          {/* <Box
            sx={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              paddingTop: "66.25%",
              boxShadow: " -8px 8px 0px 0px rgba(136, 146, 176, .2)",
              borderRadius: "5px",
            }}
          >
            <iframe 
                 data-aos="fade-up" 
                
                 data-aos-duration={`500`}
                 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                }} src="https://www.youtube-nocookie.com/embed/wstwjQ1yqWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
           
          </Box> */}
          <Box
            sx={{
              maxWidth: "470px",
              width: "100%",
              boxShadow: " -8px 3px 8px 0px rgba(136, 146, 176, .2)",
            }}
          >
            <img
              style={{
                maxWidth: "470px",
                width: "100%",
                objectFit: "cover",
              }}
              src="https://i.ibb.co/VQ5cBbY/Screenshot-211.png"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box data-aos="fade-up" data-aos-duration={`500`}>
            <Typography
              variant="p"
              color="white"
              fontWeight={"bold"}
              fontSize="17px"
              sx={{
                borderLeft: "5px solid  yellowgreen",
                padding: "0 0 0 5px",
              }}
            >
              Qawmi University
            </Typography>

            <Typography
              sx={{
                color: "#8892b0",
                "&:hover": {
                  color: "#8892B0",
                },
              }}
              fontSize="14px"
              mt={0.5}
            >
              It fills the gap of Islamic knowledge in the modern era by teaching knowledge about islam online
            </Typography>
          </Box>

          <Box mt={2} data-aos="fade-up" data-aos-duration={`700`}>
            <Typography
              variant="p"
              color="white"
              fontWeight={"bold"}
              fontSize="17px"
            >
              What Problem it solves
            </Typography>

            <Typography color={"#8892b0"} fontSize="14px" mt={0.5}>
              The platform i created provides them to manage their students and provide them resources to learn. In other word, It is a complete learning management system.
            </Typography>
          </Box>

          <Box mt={2} data-aos="fade-up" data-aos-duration={`850`}>
            <Typography
              variant="p"
              color="white"
              fontWeight={"bold"}
              fontSize="17px"
            >
              Features
            </Typography>

            <Typography color={"#8892b0"} fontSize="14px" mt={0.5}>
              Recorded, Live and Private course selling - Room based teaching system - Personalized chatting app - Integrated SMS and Email System - Automated Attendance system - Assignment, Quiz, Note system
            </Typography>
          </Box>

          <Grid
            data-aos="fade-up"
            data-aos-duration={`1000`}
            container
            mt={2}
            justifyContent={"space-between"}
          >
            <Grid item xs={12} sm={9}>
              <Grid container>
                <Grid item xs={4} sm={4}>
                  <Typography
                    color={"#8892b0"}
                    fontSize="14px"
                    mt={0.5}
                    sx={{
                      border: "1px solid  #CCD6F6",
                      display: "inline-block",
                      padding: "2px 4px",
                      borderRadius: "3px",
                    }}
                  >
                    ReactJs
                  </Typography>
                </Grid>

                <Grid item xs={4} sm={4}>
                  <Typography
                    color={"#8892b0"}
                    fontSize="14px"
                    mt={0.5}
                    sx={{
                      border: "1px solid  #CCD6F6",
                      display: "inline-block",
                      padding: "2px 4px",
                      borderRadius: "3px",
                    }}
                  >
                    MaterialUI
                  </Typography>
                </Grid>

                <Grid item xs={4} sm={4}>
                  <Typography
                    color={"#8892b0"}
                    fontSize="14px"
                    mt={0.5}
                    sx={{
                      border: "1px solid  #CCD6F6",
                      display: "inline-block",
                      padding: "2px 4px",
                      borderRadius: "3px",
                    }}
                  >
                    Redux-Toolkit
                  </Typography>
                </Grid>

                <Grid item xs={4} sm={4}>
                  <Typography
                    color={"#8892b0"}
                    fontSize="14px"
                    mt={0.5}
                    sx={{
                      border: "1px solid  #CCD6F6",
                      display: "inline-block",
                      padding: "2px 4px",
                      borderRadius: "3px",
                    }}
                  >
                    NodeJS
                  </Typography>
                </Grid>

                <Grid item xs={4} sm={4}>
                  <Typography
                    color={"#8892b0"}
                    fontSize="14px"
                    mt={0.5}
                    sx={{
                      border: "1px solid  #CCD6F6",
                      display: "inline-block",
                      padding: "2px 4px",
                      borderRadius: "3px",
                    }}
                  >
                    MongoDB
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={3}>
              <Box
                ml={1}
                sx={{
                  marginTop: { xs: 3, sm: 1 },
                }}
              >
                <Stack direction={"row"} justifyContent={"space-evenly"}>
                  <Box>
                    <a href="/">
                      <BsCodeSlash
                        style={{
                          color: "white",
                          fontSize: "25px",
                          fontWeight: "700",
                        }}
                      />
                    </a>
                  </Box>
                  <Box ml={2}>
                    <a href="/">
                      <RiComputerLine
                        style={{
                          color: "white",
                          fontSize: "25px",
                          fontWeight: "700",
                        }}
                      />
                    </a>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
