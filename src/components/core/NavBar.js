import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, defaultState } from '../../store/GlobalState';
import { signOut } from '../auth/auth.helper';

function NavBar() {
	const [authState, setAuthState] = useContext(AuthContext);

	let navigate = useNavigate();
	const signOutUser = async () => {
		await signOut();
		setAuthState(defaultState);
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
						<Link to="/home">Home</Link>
						<Link to="/home/product">Products</Link>
					</Nav>
					{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
					{/* <Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto"></Nav>
					</Navbar.Collapse> */}
					{authState._id !== '' ? (
						<Nav className="ml-auto">
							<Nav.Link onClick={signOutUser}>Signout</Nav.Link>
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
