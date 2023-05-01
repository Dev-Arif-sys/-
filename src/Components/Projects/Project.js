import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { RiComputerLine } from "react-icons/ri";
const Project = ({ item }) => {
  return (
    <div id='projects'>
      <Grid
        container
        alignItems={"flex-start"}
        spacing={2}
        mb={{ xs: 8, md: 14 }}
      >
        <Grid item xs={12} sm={12} md={6}>
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
              src={item.thumbnail}
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
              {item.name}
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
              {item.subtitle}
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
              {item.solution}
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
            <ul>
              {item.features.map((feature) => (
                <li
                  style={{ color: "#8892b0", fontSize: "14px" }}
                  key={feature}
                >
                  <Typography color={"#8892b0"} fontSize="14px">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
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
                  {/* <Box>
                    <a href="/">
                      <BsCodeSlash
                        style={{
                          color: "white",
                          fontSize: "25px",
                          fontWeight: "700",
                        }}
                      />
                    </a>
                  </Box> */}
                  <Box ml={2}>
                    <a target="_blank" href={item.live}>
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
