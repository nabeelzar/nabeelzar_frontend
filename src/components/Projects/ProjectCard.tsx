import React from "react";
import "./projectcard.scss";
import { ProjectCardProps, Technology, ProjectImages } from "./Project";
import defaultImage from "../../assets/NZK.png";

const getMainImage = (project_images: ProjectImages[]): string => {
  let mainImage = defaultImage;
  for (var value of project_images) {
    if (value.main === true) {
      mainImage = value.img_path;
      console.log();
      return mainImage;
    }
  }

  return mainImage;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  date_started,
  date_completed,
  technologies,
  project_images,
}) => {
  let image = getMainImage(project_images);
  return (
    <div className="projectCard">
      <div className="projectImageContainer">
        <img
          className="projectImage"
          // src="https://picsum.photos/200/300"
          src={image}
          alt={name}
        />
      </div>
      <div className="textContainer">
        <div className="cardTitle">{name}</div>
        <div className="cardDescription">{description}</div>

        <div className="technologyContainer">
          {technologies.map((tech, index) => {
            return (
              <div key={tech.id} className="technology">
                {tech.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
