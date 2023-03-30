import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Navbar, Card, Container} from 'react-bootstrap';
import '../assets/css/footer.css';



const Footer = () => {
  return (
    <div className='Footer'>
      <Container className='FooterContainer'>
        <div className='footer-copyright'>
            <p>&copy; 2023 MangaVerse. All Rights Reserved.</p>
        </div>
       </Container>
    </div>   
  )
};

export default Footer;