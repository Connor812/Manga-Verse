import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Navbar, Card, Container} from 'react-bootstrap';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <Navbar className='Footer' bg='dark' variant='dark' expand='xxl'>
        <Card.Body>
            <Card.Title className='FooterTitle'>&copy; 2023 MangaVerse. All Rights Reserved.</Card.Title>
        <Card.Footer>
    <h3>Footer</h3>
        </Card.Footer>
        </Card.Body>
    </Navbar>
  )
};

export default Footer;