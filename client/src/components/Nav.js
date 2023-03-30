import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Auth from '../utils/auth';

const NavApp = () => {
const userData = Auth.loggedIn() ? Auth.getProfile() : null

 return (
    <>
    <Navbar bg='dark' variant='dark' expand='xl'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          MangaVerse
        </Navbar.Brand>
        </Container>
        <Container>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
          <Nav className='ml-auto d-flex'>
            <Nav.Link as={Link} to='/'>
              Search For Manga and Anime
            </Nav.Link>
            {/* if user is logged in show Profile and Logout */}
            {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to='/profile'>
                  {userData.data.firstName}'s Profile
                </Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
              <Nav.Link as={Link} to='/signUp' >Signup</Nav.Link>
              <Nav.Link as={Link} to='/login' >Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  </>
)};

export default NavApp