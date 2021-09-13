import React from 'react';
import img from '../assets/Tech Life Remote Life.png';

export const Home = () => {
   return (
      <div className="main animation">
         <h1 className="home_title">Frontend Developer</h1>
         <h2 className="home_content">
            Hi, I'm a frontend developer. passionate about programming and web
            development
         </h2>
         <img className="home-img" src={img} alt="woman in the phone" />
      </div>
   );
};
