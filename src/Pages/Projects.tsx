import React from "react";
import ProjectItem from "../Components/ProjectItem.js";
import "../styles/Projects.css";
import { projectList } from "../Helpers/ProjectList.js";

function Projects() {
  return (
    <div className="container py-5">
  <h1 className="text-center mb-4">My Personal Projects</h1>

  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {projectList.map((project) => (
      <div key={project.name} className="col">
        <ProjectItem
          image={project.image}
          name={project.name}
          about={project.about}
          link={project.link}
        />
      </div>
    ))}
  </div>
</div>

  
  );
}

export default Projects;
