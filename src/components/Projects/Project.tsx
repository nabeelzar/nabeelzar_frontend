import React, { useState } from "react";
import "./project.scss";
import ProjectCard from "./ProjectCard";
import project_image from "../../assets/code.png";

const Project = () => {
  const projects = [
    [
      {
        id: 1,
        name: "Test Project",
        description: "This is a test project",
        date_started: "2022-10-07",
        date_completed: null,
        technologies: [
          {
            id: 1,
            name: "Python",
            img_path: null,
          },
        ],
        project_images: [
          {
            id: 1,
            img_path: "https://api.nabeelzar.com/media/images/download.png",
            main: true,
          },
        ],
      },
    ],
  ];

  return (
    <div className="projectContainer">
      <div className="projectCardContainer">
        <ProjectCard
          title="Test_Project"
          description="This is test description blah blah blah. The value of this project comes in the fact that it is literally not a real project whatsoever and that is interesting because I have to write a long description to the project"
          image_url={project_image}
          technologies={["Python", "React"]}
        />
      </div>
    </div>
  );
};

export default Project;
