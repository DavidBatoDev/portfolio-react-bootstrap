import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/proj1.png";
import projImg2 from "../../assets/img/proj2.png";
import projImg3 from "../../assets/img/proj3.png";
import projImg4 from "../../assets/img/proj4.png";
import projImg5 from "../../assets/img/proj5.png";
import projImg6 from "../../assets/img/proj7.png";
import './Projects.css';

export const Projects = () => {

  const projects = [
    
    {
      title: "Chat Application (ChatApp)",
      description: "Built using MERN stack, uses Socket.io for real-time chat functionality",
      imgUrl: projImg1,
      link: "https://github.com/DavidBatoDev/chat-application-mongodb"
    },
    {
      title: "PUP Alumni Portal For Graduates (PUPAG)",
      description: "Built using React as a Frontend, Uses PHP Laravel, MySql for Database, Websocket for real-time notification",
      imgUrl: projImg6,
      link: "https://github.com/DavidBatoDev/oop-scam-app"
    },
    {
      title: "Real-estate Website (DavidEstate)",
      description: "Built using React as a Frontend, Express as a Backend, MongoDB for Database, JWT for Authentication, Redux for State Management",
      imgUrl: projImg2,
      link: "https://github.com/DavidBatoDev/real-estate-mongodb"
    },
    {
      title: "Blog Website (Technoquatro)",
      description: "Built using React as a Frontend, Uses Firebase Storage, Database and Athentication",
      imgUrl: projImg3,
      link: "https://github.com/DavidBatoDev/technoquatro-firebase"
    },
    {
      title: "E-commerce Website (Ecom)",
      description: "Built using MySQL, Express, React, Node.js, polishing my skills in state management",
      imgUrl: projImg4,
      link: "https://github.com/DavidBatoDev/ecommerce-mysql"
    },
    {
      title: "Student Curicullar Activity Manager (SCAM)",
      description: "Built using Tkinter as a Frontend, Uses Flask Blueprint Structure, SQLAlchemy for Database, Websocket for real-time notes",
      imgUrl: projImg5,
      link: "https://github.com/DavidBatoDev/oop-scam-app"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="projects-section">
              <h2>Projects</h2>
              <p>
                I've gained hands-on experience in full stack web development, working on various projects that showcase my skills across the entire web development spectrum. To explore more of my work, feel free to visit my GitHub: <a href="https://github.com/DavidBatoDev?tab=repositories">DavidBatoDev</a>, 
                where you can see a range of projects I've contributed to and developed.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="section">
                    <p>Frontend projects will be listed here.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Backend projects will be listed here.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
