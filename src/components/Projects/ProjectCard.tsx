import React from "react";
import "./projectcard.scss";

interface Props {
  title: string;
  description: string;
  image_url: string;
  technologies: string[];
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  image_url,
  technologies,
}) => {
  return (
    <div className="projectCard">
      <div className="projectImageContainer">
        <img className="projectImage" src={image_url} alt={title} />
      </div>
      <div className="cardTitle">{title}</div>
      <div className="cardDescription">{description}</div>

      <div className="technologyContainer">
        {technologies.map((tech, index) => {
          return <div className="technology">{tech}</div>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
