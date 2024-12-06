import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../../style.scss';
import Logo from '../../assets/Logo.png';


const UserHeader = () => {
  return (
    <header>
        <div classNmae='container py-3'>
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Navbar.Brand as={Link} to="/" className = 'logo'><img src={Logo} alt="Logo" className="logo-img" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/DeveloperDashboard" className = 'nav-link'>Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/AdminOngoing"className = 'nav-link'>Ongoing events</Nav.Link>
                    <Nav.Link as={Link} to="/pendingRequests" className = 'nav-link'>Pending requests</Nav.Link>
                    <Nav.Link as={Link} to="/inquiries" className = 'nav-link'>Inquiries</Nav.Link>
                    <Nav.Link as={Link} to="/developer" className = 'nav-link'>User Account</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
    
  )
}

export default UserHeader
