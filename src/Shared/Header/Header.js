import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo/mathman.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const [user, loading, error] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img style={{ width: '150px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        <Nav.Link href="/home#services" style={{ color: '#E5E4E2' }}>Services</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to="/about" className='me-2'>About Me</Nav.Link>
                        {!user ? <Nav.Link as={CustomLink} to="/login">Login</Nav.Link> : <p onClick={handleSignOut} className='my-auto d-inline text-white text-opacity-50'>Log Out</p>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;