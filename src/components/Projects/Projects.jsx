import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.jpg";
import './Projects.css';

export const Projects = () => {

  const projects = [
    {
      title: "Chat Application (ChatApp)",
      description: "Built using MERN stack, uses Socket.io for real-time chat functionality",
      imgUrl: projImg1,
    },
    {
      title: "E-commerce Website (Ecom)",
      description: "Built using MySQL, Express, React, Node.js, polishing my skills in state management",
      imgUrl: projImg1,
    },
    {
      title: "Blog Website (Technoquatro)",
      description: "Built using React as a Frontend, Uses Firebase Storage, Database and Athentication",
      imgUrl: projImg1,
    },
    {
      title: "Blog Website (Technoquatro)",
      description: "Built using React as a Frontend, Uses Firebase Storage, Database and Athentication",
      imgUrl: projImg1,
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
