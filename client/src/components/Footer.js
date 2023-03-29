import React from 'react';
import {Container} from 'react-bootstrap';


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