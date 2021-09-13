import React from 'react';

import { Link } from 'react-router-dom';

import home from '../assets/Home.svg';
import skills from '../assets/skills.svg';
import projects from '../assets/emojione_building-construction.svg';

export const Nav = () => {
   return (
      <nav>
         <Link to="/">
            <div>
               <img src={home} alt="Home" />
               <h2>Home</h2>
            </div>
         </Link>
         <Link to="/skills">
            <div>
               <img src={skills} alt="skills" />
               <h2>Skills</h2>
            </div>
         </Link>
         <Link to="/projects">
            <div>
               <img src={projects} alt="projects" />
               <h2>Projects</h2>
            </div>
         </Link>
      </nav>
   );
};
