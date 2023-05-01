import { Box } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Project from "./Project";
import "./Projects.css";

const projects = [
  {
    name:"IOindex SMA",
    subtitle:"It is a SAAS model student management system that helps to grow coaching centres quickly without hassle.",
    thumbnail:"https://i.ibb.co/dWJ33yZ/Screenshot-235.png",
    solution:"It provides 360 degree solution for student management with the help of Attendance, Student Registration, Exam Management, Fee Management  and Expense Management modules.",
    features:[
      "Students overview with advanced search features and integrated personal SMS system",
      "Automated attendance system and instant message to the absent students' parent",
      "create exam ,make result and send result to the parents with integrated SMS system ",
      "Exam results pdf creation with React-pdf to print-out instantly",
      "A full secured fee management system with due clearance system and creation of receipt",
      "Sending notice with  one click to a batch and integrated advertising module for future",
      "Expense management with date-wise expense-income overview module."
    ],
    techs: [
      "ReactJS",
      "Material UI",
      "Redux Toolkit",
      "RTK query",
      "ExpressJS",
      "MongoDB",
    ],
   live:"https://sma.ioindex.net/"
  },
  {
    name: "Qawmi University",
    subtitle:
      "It fills the gap of Islamic knowledge in the modern era by teaching knowledge about islam online.",
    thumbnail: "https://i.ibb.co/VQ5cBbY/Screenshot-211.png",
    solution:
      "The platform i created helps them to create courses and grab more users to learn. In other word, It is a complete learning management system.",
    features: [
      "Course creation and publishing based on recorded,live and private.",
      "Integrated two payment gateways for safe payment.",
      "Room based live class system integration in the student dashboard.",
      "A minimal chat application integration for room and personal based communication.",
      "An integrated ranking system as per the performance of students",
      "Multiple role based authentication system",
      "Multi-language system with react i18n"
    ],
    techs: [
      "ReactJS",
      "Material UI",
      "Redux Toolkit",
      "ExpressJS",
      "Socket IO",
      "MongoDB",
    ],
    live: "https://qawmiuniversity.com/",
  },
 
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="custom-container" id="project">
      <div className="section-subHeading">
        <p>Take a look at my</p>
      </div>

      <h2 className="section-title">Projects</h2>

      <Box sx={{ marginTop: { sm: 3, xs: 1 }, position: "relative" }}>
        {projects.map((item) => (
          <Project key={item.name} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default Projects;
