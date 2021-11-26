/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';

import { UserCircle } from '../../assets/svg-icons';

import './style.scss';

export const MainHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>
          <Nav>
            <Link to="/" class="nav-link">
              Home
            </Link>
            <Link to="/about" class="nav-link">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>

        <Dropdown align="start">
          <Dropdown.Toggle variant="link" style={{ boxShadow: 'none' }}>
            <UserCircle />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="/login" class="dropdown-item">
              Login
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};
