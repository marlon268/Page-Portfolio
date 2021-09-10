import React from 'react';
import { Link } from 'react-router-dom';

import home from '../assets/Home.svg';
import skills from '../assets/skills.svg';
import projects from '../assets/emojione_building-construction.svg';

export const NavModal = ({ closeModal }) => {
   return (
      <nav>
         <Link to="/" onClick={closeModal}>
            <div>
               <img src={home} alt="Home" />
               <h2>Home</h2>
            </div>
         </Link>
         <Link to="/skills" onClick={closeModal}>
            <div>
               <img src={skills} alt="skills" />
               <h2>Skills</h2>
            </div>
         </Link>
         <Link to="/projects" onClick={closeModal}>
            <div>
               <img src={projects} alt="projects" />
               <h2>Projects</h2>
            </div>
         </Link>
      </nav>
   );
};
