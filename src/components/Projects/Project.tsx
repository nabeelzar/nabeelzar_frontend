import React, { useState, useEffect } from "react";
import "./project.scss";
import ProjectCard from "./ProjectCard";
import project_image from "../../assets/code.png";

import axios from "axios";

export interface Technology {
  id: number;
  name: string;
  img_path: string | null;
}

export interface ProjectImages {
  id: number;
  img_path: string | null;
  main: boolean;
}

export interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  date_started: string;
  date_completed: string | null;
  technologies: Technology[];
  project_images: ProjectImages[];
}

const Project = () => {
  const [projects, setProjects] = useState<ProjectCardProps[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getNewProjects = async () => {
    setLoading(true);
    console.log("This is running");
    await axios
      .get(`https://api.nabeelzar.com/projects/`)
      .then((res) => {
        console.log(res);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log("we hit an error");
        setError(err);
      });

    setLoading(false);
  };

  useEffect(() => {
    getNewProjects();
  }, [setProjects]);

  //const projects = [
  //  {
  //    id: 1,
  //    name: "Test Project",
  //    description: "This is a test project",
  //    date_started: "2022-10-07",
  //    date_completed: null,
  //    technologies: [
  //      {
  //        id: 1,
  //        name: "Python",
  //        img_path: null,
  //      },
  //    ],
  //    project_images: [
  //      {
  //        id: 1,
  //        img_path: "https://api.nabeelzar.com/media/images/download.png",
  //        main: true,
  //      },
  //    ],
  //  },
  //];

  return (
    <div className="projectContainer">
      <div className="projectCardContainer">
        {projects?.map((project: ProjectCardProps) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              date_started={project.date_started}
              date_completed={project.date_completed}
              technologies={project.technologies}
              project_images={project.project_images}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
