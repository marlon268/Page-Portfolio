import React from 'react';

import html from '../assets/vscode-icons_file-type-html.svg';
import css3 from '../assets/vscode-icons_file-type-css.svg';
import sass from '../assets/vscode-icons_folder-type-light-sass.svg';
import js from '../assets/JS.svg';
import react from '../assets/logos_react.svg';
import redux from '../assets/logos_redux.svg';
import webpack from '../assets/logos_webpack.svg';
import schoolJs from '../assets/escuelaJs.PNG';
import courseReact from '../assets/courseofReact.jpg';
import courseWebpack from '../assets/webpack.PNG';
import courseScrum from '../assets/scrum.PNG';

export const Skills = () => {
   return (
      <div className="animation">
         <div className="skills_habilities">
            <div>
               <h1>Skills and Certificates</h1>
            </div>
            <div>
               <div className="skills_habilities-logo">
                  <h2>HTML</h2>
                  <img src={html} alt="HTML" />
               </div>
               <div className="skills_habilities-logo">
                  <h2>CSS3</h2>
                  <img src={css3} alt="CSS3" />
               </div>
               <div className="skills_habilities-logo">
                  <h2>SASS</h2>
                  <img src={sass} alt="SASS" />
               </div>
               <div className="skills_habilities-logo">
                  <h2>JavaScript</h2>
                  <img src={js} alt="JavaScript" />
               </div>
               <div className="skills_habilities-logo">
                  <h2>React</h2>
                  <img src={react} alt="React" />
               </div>
               <div className="skills_habilities-logo">
                  <h2>Redux</h2>
                  <img src={redux} alt="Redux" />
               </div>
               <div className="skills_habilities-logo">
                  <h2>WebPack</h2>
                  <img src={webpack} alt="WebPack" />
               </div>
            </div>
         </div>

         <div className="skills_studies">
            <div className="skills_studies-logo">
               <img src={schoolJs} alt="JavaScript School" />
            </div>
            <div className="skills_studies-logo">
               <img src={courseReact} alt="React from zero to expert" />
            </div>
            <div className="skills_studies-logo">
               <img src={courseWebpack} alt="webpack course" />
            </div>
            <div className="skills_studies-logo">
               <img src={courseScrum} alt="scrum professional course" />
            </div>
         </div>
      </div>
   );
};
