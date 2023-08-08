import React from "react";
import ProjectItem from "../Components/ProjectItem.js";
import "../styles/Projects.css";
import { projectList } from "../Helpers/ProjectList.js";

function Projects() {
  return (
    <div>
      <h1 className="flex items-center justify-center flex-col text-center pt-20
        pb-6 " > My Personal Projects</h1>

        <div className="project-list">
          {projectList.map((project) => {
            return (
                <div className="ProjectItem">
              <ProjectItem
                image={project.image}
                name={project.name}
                about={project.about}
                link ={project.link}
              ></ProjectItem>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Projects;
