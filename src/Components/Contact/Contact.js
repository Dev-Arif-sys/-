import { Box, Stack, Typography } from "@mui/material";
import "aos/dist/aos.css";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="custom-container" id="contact">
        <div className="section-subHeading">
          <p>Say Hello</p>
        </div>

        <h2 className="section-title">Contact</h2>
        <div className="section-value ">
          <Box
            sx={{
              background: "#525F79",
              mt: 2,
              py: 5,
              px: 3,
              borderRadius: 2,
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{
                color: "rgb(240, 232, 232)",
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                },
              }}
              spacing={1}
              href="mailto:arifru.contact@gmail.com"
              component={"a"}
            >
              <MdEmail size={20} />
              <Typography> arifru.contact@gmail.com</Typography>
            </Stack>

            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{
                color: "rgb(240, 232, 232)",
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                },
              }}
              spacing={1}
              mt={1}
              target="_black"
              component={"a"}
              href="https://wa.me/01757895698"
            >
              <IoLogoWhatsapp size={20} />
              <Typography> +8801757-895698</Typography>
            </Stack>
            <Box sx={{ marginTop: 1, display: { xs: "block", md: "none" } }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{
                  color: "rgb(240, 232, 232)",
                  textDecoration: "none",
                  "&:hover": {
                    color: "white",
                  },
                }}
                spacing={1}
                mt={1}
                target="_black"
                component={"a"}
                href="https://www.linkedin.com/in/mdariful-islam/"
              >
                {" "}
                <FaLinkedinIn size={18} />
                <Typography> LinkedIn</Typography>
              </Stack>

              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{
                  color: "rgb(240, 232, 232)",
                  textDecoration: "none",
                  "&:hover": {
                    color: "white",
                  },
                }}
                spacing={1}
                mt={1}
                target="_black"
                component={"a"}
                href="https://github.com/Dev-Arif-sys"
              >
                <FiGithub size={20} />
                <Typography> Github</Typography>
              </Stack>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Contact;
