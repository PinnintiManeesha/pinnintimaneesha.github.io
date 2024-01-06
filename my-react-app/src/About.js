import React from 'react';
import './home.css';
import Girlimage from './Girlimage.jpeg';
import { useNavigate } from 'react-router-dom';



function About() {
    const navigate = useNavigate();
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
  </div>
  );
}

export default About;