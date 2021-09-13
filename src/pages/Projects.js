import React from 'react';
import jorunalApp from '../assets/journal-app-marlon.herokuapp.com_.png';
import calendarApp from '../assets/mern-calendar-marlon.herokuapp.com_.png';

export const Projects = () => {
   return (
      <div className="main animation">
         <div className="projects-title">
            <h1>Projects</h1>
         </div>
         <div className="projects">
            <div className="projects-info">
               <h2>JournalApp</h2>
               <p>resources with which this website was made</p>
               <p>React, Redux, SASS, Firebase </p>
               <a
                  href="https://github.com/marlon268/journal-app"
                  target="_blank"
                  rel="noreferrer"
               >
                  Repository in GitHut
               </a>
            </div>

            <img src={jorunalApp} alt="JournalApp" />
         </div>
         <div className="projects">
            <div className="projects-info">
               <h2>CalendarApp</h2>
               <p>resources with which this website was made</p>
               <p>React, Redux, SASS, Node, Express </p>
               <div className="projects-links">
                  <a
                     href="https://github.com/marlon268/calendar-App"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Repository in GitHut of frontend
                  </a>
                  <a
                     href="https://github.com/marlon268/calendar-App-Backend"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Repository in GitHut of backend
                  </a>
               </div>
            </div>

            <img src={calendarApp} alt="CalendarApp" />
         </div>
      </div>
   );
};
