import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { COLORS } from "../../constants/theme";
import "./Skills.css";

const language = [
  {
    name: "Javascript",
    logo: "https://i.ibb.co/0f6XW7Y/download-removebg-preview.png",
  },
  {
    name: "Typescript",
    logo: "https://i.ibb.co/25X76mZ/typescript2034-removebg-preview.png",
  },
];

const frontend = [
  {
    name: "Next JS",
    logo: "https://i.ibb.co/K9ns464/png-transparent-next-js-hd-logo-removebg-preview.png",
  },
  {
    name: "React JS",
    logo: "https://i.ibb.co/y6fmh24/584830f5cef1014c0b5e4aa1.png",
  },
  {
    name: "HTML",
    logo: "https://i.ibb.co/4NtcXf0/html.png",
  },
];

const uiDevelopment = [
  {
    name: "Tailwind CSS",
    logo: "https://i.ibb.co/CmJydcY/channels4-profile-removebg-preview.png",
  },
  {
    name: "Material UI",
    logo: "https://i.ibb.co/dj7YP1J/png-transparent-material-ui-logo-removebg-preview.png",
  },
  {
    name: "Bootstrap",
    logo: "https://i.ibb.co/1ZqT0yP/bootstrap-logo.png",
  },
  {
    name: "CSS",
    logo: "https://i.ibb.co/L529Jq0/css3-logo.png",
  },
];

const Backend = [
  {
    name: " Express JS & Mongoose",
    logo: "https://i.ibb.co/2tx8Wpm/express-logo-removebg-preview.png",
  },
  {
    name: "Node JS",
    logo: "https://i.ibb.co/H2qShvv/1280px-Node-js-logo-svg.png",
  },
];

const Database = [
  {
    name: "MongoDB",
    logo: "https://i.ibb.co/hd5DMTd/Mongo-DB-Emblem-removebg-preview.png",
  },
];

const Utils = [
  {
    name: "Redux & Redux Toolkit",
    logo: "https://i.ibb.co/VYp1342/redux-removebg-preview.png",
  },
  {
    name: "RTK Query",
    logo: "https://i.ibb.co/hd5DMTd/Mongo-DB-Emblem-removebg-preview.png",
  },
];

const versionControl = [
  {
    name: "Git",
    logo: "https://i.ibb.co/RT7RWH9/Git-Icon-1788-C.png",
  },
  {
    name: "Github",
    logo: "https://i.ibb.co/WGR9v8d/github-removebg-preview.png",
  },
];

const Skills = () => {
  useEffect(() => {}, []);

  return (
    <div className="custom-container" id="skills">
      <div className="section-subHeading">
        <p>Check Out My</p>
      </div>

      <h2 className="section-title">Skills</h2>
      <div className="section-value skills-container">
        <div data-aos="fade-up" data-aos-duration={`100`}>
          <Typography
            sx={{
              borderBottom: 1,
              borderColor: COLORS.white,
              color: COLORS.white,
            }}
          >
            Programming Language
          </Typography>
          <List>
            {language.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    color: COLORS.white,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: COLORS.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      className="logo"
                      width={"20px"}
                      style={{}}
                      src={item.logo}
                      loading="lazy"
                    />{" "}
                  </Box>{" "}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <div  data-aos="fade-up"  data-aos-duration={`500`}>
          <Typography
            sx={{
              borderBottom: 1,
              borderColor: COLORS.white,
              color: COLORS.white,
            }}
          >
            Frontend Techs
          </Typography>
          <List>
            {frontend.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    color: COLORS.white,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: COLORS.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      className="logo"
                      width={"20px"}
                      style={{}}
                      src={item.logo}
                      loading="lazy"
                    />{" "}
                  </Box>{" "}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <div data-aos="fade-up" data-aos-duration={`500`}>
          <Typography
            sx={{
              borderBottom: 1,
              borderColor: COLORS.white,
              color: COLORS.white,
            }}
          >
            User Interface
          </Typography>
          <List>
            {uiDevelopment.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    color: COLORS.white,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: COLORS.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      className="logo"
                      width={"20px"}
                      style={{}}
                      src={item.logo}
                      loading="lazy"
                    />{" "}
                  </Box>{" "}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <div  data-aos="fade-up" data-aos-duration={`500`}>
          <Typography
            sx={{
              borderBottom: 1,
              borderColor: COLORS.white,
              color: COLORS.white,
            }}
          >
            Backend Techs
          </Typography>
          <List>
            {Backend.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    color: COLORS.white,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: COLORS.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      className="logo"
                      width={"20px"}
                      style={{}}
                      src={item.logo}
                      loading="lazy"
                    />{" "}
                  </Box>{" "}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <div data-aos="fade-up" data-aos-duration={`500`}>
          <Typography
            sx={{
              borderBottom: 1,
              borderColor: COLORS.white,
              color: COLORS.white,
            }}
          >
            Backend Techs
          </Typography>
          <List>
            {Backend.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    color: COLORS.white,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: COLORS.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      className="logo"
                      width={"20px"}
                      style={{}}
                      src={item.logo}
                      loading="lazy"
                    />{" "}
                  </Box>{" "}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <div data-aos="fade-up" data-aos-duration={`500`}>
          <Typography
            sx={{
              borderBottom: 1,
              borderColor: COLORS.white,
              color: COLORS.white,
            }}
          >
            Databases
          </Typography>
          <List>
            {Database.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    color: COLORS.white,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: COLORS.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      className="logo"
                      width={"20px"}
                      style={{}}
                      src={item.logo}
                      loading="lazy"
                    />{" "}
                  </Box>{" "}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <div data-aos="fade-up" data-aos-duration={`500`}>
          <Typography
            sx={{
              borderBottom: 1,
              borderColor: COLORS.white,
              color: COLORS.white,
            }}
          >
            Utils
          </Typography>
          <List>
            {Utils.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    color: COLORS.white,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: COLORS.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      className="logo"
                      width={"20px"}
                      style={{}}
                      src={item.logo}
                      loading="lazy"
                    />{" "}
                  </Box>{" "}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <div data-aos="fade-up" data-aos-duration={`500`}>
          <Typography
            sx={{
              borderBottom: 1,
              borderColor: COLORS.white,
              color: COLORS.white,
            }}
          >
            Version Control
          </Typography>
          <List>
            {versionControl.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    color: COLORS.white,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: COLORS.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      className="logo"
                      width={"20px"}
                      style={{}}
                      src={item.logo}
                      loading="lazy"
                    />{" "}
                  </Box>{" "}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Skills;
