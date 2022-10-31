import { Box } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleBtnClick = (id) => {
    setModalShow(true);
    setId(id);
  };

  return (
    <div className="custom-container" id="project">
      <div className="section-subHeading">
        <p>Take a look at my</p>
      </div>

      <h2 className="section-title">Projects</h2>

      <Box sx={{ marginTop: { sm: 3, xs: 1 } }}>
        <Project />
      </Box>
    </div>
  );
};

export default Projects;
