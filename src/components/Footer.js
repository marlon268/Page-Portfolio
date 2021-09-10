import React from 'react';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';
import twitter from '../assets/Twitter.svg';
import github from '../assets/Github.svg';

export const Footer = () => {
   return (
      <footer>
         <h2>Social media</h2>
         <div>
            <a
               href="https://www.facebook.com/marlon.varon.71/"
               target="_blank"
               rel="noreferrer"
            >
               <img src={facebook} alt="facebook" />
            </a>
            <a
               href="https://www.instagram.com/marlon.varon.dev/"
               target="_blank"
               rel="noreferrer"
            >
               <img src={instagram} alt="instagram" />
            </a>
            <a
               href="https://twitter.com/Marlon90947519"
               target="_blank"
               rel="noreferrer"
            >
               <img src={twitter} alt="twitter" />
            </a>
            <a
               href="https://github.com/marlon268"
               target="_blank"
               rel="noreferrer"
            >
               <img src={github} alt="github" />
            </a>
         </div>
      </footer>
   );
};
