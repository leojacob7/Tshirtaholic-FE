import React, { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, defaulState } from '../../store/GlobalState';
import { signOut } from '../auth/auth.helper';

function NavBar() {
	const [authState, setAuthState] = useContext(AuthContext);
	let navigate = useNavigate();
	const signOutUser = () => {
		setAuthState(defaulState);
		signOut();
		navigate('/signIn');
	};
	return (
		<Navbar bg="dark" variant="dark" expand="sm">
			<Container>
				<Link to="/home">
					<Navbar.Brand>T-Shirtaholic</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Products</Nav.Link>
					</Nav>
					{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
					{/* <Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto"></Nav>
					</Navbar.Collapse> */}
					{authState._id !== '' ? (
						<Nav className="ml-auto">
							<Link to="/home">
								<Nav.Link
									className="ml-auto"
									onClick={signOutUser}
								>
									Signout
								</Nav.Link>
							</Link>
						</Nav>
					) : (
						''
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
		// </div>
	);
}

export default NavBar;
