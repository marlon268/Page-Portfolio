import React from 'react';
import jorunalApp from '../assets/journal-app-marlon.herokuapp.com_.png';
import calendarApp from '../assets/mern-calendar-marlon.herokuapp.com_.png';

export const Projects = () => {
   return (
      <div className="animation">
         <div className="title">
            <h1>Projects</h1>
         </div>
         <div className="projects">
            <h2>JournalApp</h2>
            <p>resources with which this website was made</p>
            <p>React, Redux, SASS, Firebase </p>
            <img src={jorunalApp} alt="JournalApp" />
         </div>
         <div className="projects">
            <h2>CalendarApp</h2>
            <p>resources with which this website was made</p>
            <p>React, Redux, SASS, Node, Express </p>
            <img src={calendarApp} alt="CalendarApp" />
         </div>
      </div>
   );
};
