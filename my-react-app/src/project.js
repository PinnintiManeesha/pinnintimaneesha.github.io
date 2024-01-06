import React from 'react';
import './project.css';
import tech from './tech.jpeg';
import Contact from './contact';
function Projects({ projects }) {
  console.log(projects);
  return (
    <div className='pro-div'>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <div className={`projectcontainer ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="projecttext">
                <strong>{project.name}</strong>
                <p>{project.description}</p>
                 <button  className="viewbutton">  <a href={`http://${project.link}`} target="_blank" rel="noopener noreferrer">
    View Project
  </a></button>
              </div>
              <div className="projectimage">
              <img src={tech} className="imageel" alt="image" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Projects;
