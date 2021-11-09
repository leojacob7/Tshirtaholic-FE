import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Link to="/home">
						<Navbar.Brand>T-Shirtaholic</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
