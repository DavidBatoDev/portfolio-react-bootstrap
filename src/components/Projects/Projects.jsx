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
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="projects-section">
              <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
