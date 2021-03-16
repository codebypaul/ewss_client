import React from 'react';
import { Navbar, Nav} from 'react-bootstrap'

export default function Navigation(props) {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand href="/">EWSS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <div className="container">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                </div>

                {
                        props.isAuth 
                        ? <div className="navbar-nav ml-auto d-flex">
                            <li className="nav-item">
                                <Nav.Link href="/profile">Profile</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <span onClick={props.handleLogout} className="logout-link">Logout</span>
                            </li>
                        </div>
                        : <div className="navbar-nav ml-auto d-flex">
                            <li className="nav-item">
                                <Nav.Link href="/signup">Create Account</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="/login">Login</Nav.Link>
                            </li>
                        </div>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

