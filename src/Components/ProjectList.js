import React, { useState } from 'react';

const ProjectList = ({ projects }) => {
  const [projectList, setProjectList] = useState(projects);

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projectList.map(project => (
          <li key={project.id}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
