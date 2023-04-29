import { Box, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { useEffect } from "react";
import { COLORS } from "../../constants/theme";
import "./Experience.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="custom-container" id="experience">
      <div className="section-subHeading">
        <p>some info</p>
      </div>

      <h2 className="section-title">Experience</h2>
      <Box sx={{ marginTop: { sm: 3, xs: 1 } }}>
        <Stack direction={"row"} spacing={{ xs: 1, md: 3 }}>
          <Box
            sx={{
              width: "30px",

              display: "flex",
              marginTop: 1,
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "18px", color: COLORS.white }}>
              1.
            </Typography>
          </Box>
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              style={{ lineHeight: "15px" }}
              className="exp-title"
            >
              <div style={{ color: COLORS.white }}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "1px",
                    color: COLORS.white,
                  }}
                >
                  Web Application Developer
                </p>

                <p>
                  IOindex technologies | Dhaka, Bangladesh | October-2022 to
                  Present
                </p>
              </div>
            </div>

            <Box data-aos="fade-up" data-aos-duration="500">
              <Typography
                sx={{
                  color: "#8892b0",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  mt: 1,
                }}
              >
                I work as a full stack developer, leading a team of frontend
                developers while using my expertise in React.js, Tailwind CSS,
                RTK Query, and Redux to create impressive user interfaces that
                enhance the overall user experience. Additionally, I develop
                REST APIs for a large SAAS product, utilizing Node.js and
                Express.js to build scalable and efficient solutions. Ensuring
                the application is optimized for speed and scalability and all
                the code is documented. Learn new technologies/tools and
                implement as required by the application. Troubleshooting and
                debugging application issue.
              </Typography>
            </Box>
          </div>
        </Stack>
      </Box>
      {/* experience 2 */}
      <Box sx={{ marginTop: { sm: 3, xs: 1 } }}>
        <Stack direction={"row"} spacing={{ xs: 1, md: 3 }}>
          <Box
            sx={{
              width: "30px",

              display: "flex",
              marginTop: 1,
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "18px", color: COLORS.white }}>
              2.
            </Typography>
          </Box>
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              style={{ lineHeight: "15px" }}
              className="exp-title"
            >
              <div style={{ color: COLORS.white }}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "1px",
                  }}
                >
                  Full Stack Developer
                </p>

                <p className="company-name">
                  Qawmi University | Rajshahi, Bangladesh | May-2022 to
                  September 2022
                </p>
              </div>
            </div>

            <Box data-aos="fade-up" data-aos-duration="500">
              <Typography
                sx={{
                  color: "#8892b0",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  mt: 1,
                }}
              >
                As a full stack developer, I developed modern user interfaces
                with a focus on user experience, utilizing technologies such as
                React.js, Axios, React Router, Material UI, and Sass. I also
                implemented a multilingual system, as well as features such as
                authentication, authorization, SMS gateway integration, and
                DataTables. In addition, I created a REST API, integrated
                payment gateways, and developed a course-selling system.
                Additionally, I have experience building an audio app and
                utilizing technologies such as Express.js, Mongoose, and
                MongoDB.
              </Typography>
            </Box>
          </div>
        </Stack>
      </Box>
    </div>
  );
};

export default Experience;
