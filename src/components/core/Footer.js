import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Footer() {
	return (
		<div className="fixed-bottom w-100 h-10">
			<Navbar bg="dark" variant="dark" expand="lg">
				<Nav className="m-auto d-flex justify-content-center align-items-center">
					<Nav.Link href="#home">Thank you for visiting!</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}

export default Footer;
