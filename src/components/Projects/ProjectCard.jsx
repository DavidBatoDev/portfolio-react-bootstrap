import { Col } from "react-bootstrap";
import './Projects.css';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4} className="project-card">
      <div className="proj-imgbx">
        <img className="proj-img" src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <a target="_blank" href={link}> {title}</a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
