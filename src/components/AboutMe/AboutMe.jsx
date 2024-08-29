import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import './AboutMe.css';

export const AboutMe = () => {
  return (
    <section className="about-me">
      <Container>
        <Row>
          {/* Education Section */}
          <Col md={6} className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3>High School</h3>
                  <p><strong>School Name:</strong> XYZ High School</p>
                  <p><strong>Course:</strong> Science Stream</p>
                  <p><strong>Year:</strong> 2015 - 2018</p>
                  <p className="description">
                    Participated in various science competitions and held the position of class representative.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3>College</h3>
                  <p><strong>University:</strong> ABC University</p>
                  <p><strong>Course:</strong> BSc in Computer Science</p>
                  <p><strong>Year:</strong> 2018 - 2022</p>
                  <p className="description">
                    Graduated with honors, focusing on software development and data science. Completed several key projects.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* Experience Section */}
          <Col md={6} className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-timeline">
              <div className="experience-item">
                <FaLaptopCode className="experience-icon" />
                <Card className="experience-card">
                  <Card.Body>
                    <Card.Title>Software Developer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Tech Corp</Card.Subtitle>
                    <Card.Text><strong>Time:</strong> 2022 - Present</Card.Text>
                    <Card.Text>
                      Developed full-stack web applications using React and Node.js. Collaborated with cross-functional teams to deliver projects on time.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="experience-item">
                <FaBriefcase className="experience-icon" />
                <Card className="experience-card">
                  <Card.Body>
                    <Card.Title>Internship</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Startup Inc</Card.Subtitle>
                    <Card.Text><strong>Time:</strong> Summer 2021</Card.Text>
                    <Card.Text>
                      Assisted in developing mobile applications and gained hands-on experience in Agile methodologies.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="experience-item">
                <FaUserGraduate className="experience-icon" />
                <Card className="experience-card">
                  <Card.Body>
                    <Card.Title>Freelance Developer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Self-Employed</Card.Subtitle>
                    <Card.Text><strong>Time:</strong> 2020 - 2021</Card.Text>
                    <Card.Text>
                      Worked on various freelance projects including websites and small business management tools.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
