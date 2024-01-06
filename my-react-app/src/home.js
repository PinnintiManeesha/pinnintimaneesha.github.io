import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Girlimage from './Girlimage.jpeg';
import Projects from './project.js';
import "./home.css";
import Contact from './contact.js';

function Home({ projects, updateProjects }) {
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();  
  const addProject = () => {
    const newProject = {
      name: projectName,
      link: projectLink,
      description: description,
    };

    const newProjects = [...projects, newProject];
    updateProjects(newProjects);

    setProjectName('');
    setProjectLink('');
    setDescription('');
  };

  useEffect(() => {
    
    updateProjects(projects);
  }, [projects, updateProjects]);

  return (
    <div>
      <div className="cont">
        <div className='des'>
          <h1 className="headelement">UI/UX Designer</h1>
          <h1 className="main-head">Hello, my name <br/> 
          is Maneesha Pinninti</h1>
          <p className="main-paragraph">Short text with details about you.<br/> What you do or your professional career. You can add <br/> more information on the about page</p>
          <button className="projectbutton" onClick={() => navigate('/projects')}>
            Projects
          </button>
          <button className="transparent-button linkedinbutton">LinkedIn</button>
        </div>
        <div className="img-section">
          <img src={Girlimage} className="App-logo image" alt="logo" />
        </div>
      </div>
      <div className="form-element">
        <form>
          <h1 class="formhead">Add Project</h1>
          <label for="projectname">Project Name </label>
          <input type="text" id="projectname" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          <label for="projectlink">Project link </label>
          <input type="text" id="projectlink" value={projectLink} onChange={(e) => setProjectLink(e.target.value)} />
          <label for="description"> Description </label>
          <textarea rows="5" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="button" className="add-button" onClick={addProject}>
            Add
          </button>
        </form>
      </div>
      {projects && projects.length > 0 && (
        <Projects projects={projects} />
      )}
      <Contact/>
    </div>
  );
}

export default Home;
