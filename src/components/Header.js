import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { NavModal } from './NavModal';

import logo from '../assets/file-icons_wolfram.svg';
import amburguer from '../assets/hamburger-button.svg';

const customStyles = {
   overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(34, 40, 49, 0.9)',
   },
   content: {
      position: 'absolute',
      top: '10%',
      left: '25%',
      right: '25%',
      bottom: '65%',
      border: '1px solid black',
      background: 'rgba(34, 40, 49, 1)',
      overflow: 'none',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '20%',
      outline: 'none',
      padding: '20px',
   },
};

ReactModal.setAppElement('#root');

export const Header = () => {
   const [view, setview] = useState(false);

   const openModal = () => {
      setview(true);
   };

   const closeModal = () => {
      setview(false);
   };

   return (
      <header>
         <div>
            <button onClick={openModal}>
               <img src={amburguer} alt="nav" />
            </button>
         </div>
         <ReactModal
            isOpen={view}
            onRequestClose={closeModal}
            className="modal"
            style={customStyles}
         >
            <NavModal closeModal={closeModal} />
         </ReactModal>
         <div className="header_name">
            <h1>Marlon Varon</h1>
         </div>
         <div className="header_logo">
            <img src={logo} alt="Logo" />
         </div>
      </header>
   );
};
