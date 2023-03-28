import React, { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
// import Dashboard from '../'

import Auth from '../utils/auth';


const NavApp = () => {

    const [showLinks, setShowLinks] = useState(false);

 return (
    <>
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          MangaVerse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
          <Nav className='ml-auto d-flex'>
            <Nav.Link as={Link} to='/'>
              Search For Manga and Anime
            </Nav.Link>
            {/* if user is logged in show saved books and logout */}
            {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to='/dashboard'>
                  Checkout your Saved or Favourited Anime and Manga!
                </Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={() => setShowLinks(true)}>Login/Sign Up</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        <Routes>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
  </>
)};

export default NavApp