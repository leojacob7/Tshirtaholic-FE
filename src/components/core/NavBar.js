import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, defaultState } from '../../store/GlobalState';
import { signOut } from '../auth/auth.helper';
import Avatar from 'react-avatar';

function NavBar() {
	const [authState, setAuthState] = useContext(AuthContext);

	let navigate = useNavigate();
	const signOutUser = async () => {
		await signOut();
		setAuthState(defaultState);
		navigate('/signIn');
	};

	const conditionallyRenderProductLinks = () => {
		if (authState._id !== '') {
			return (
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/home">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/home/product">
						Products
					</Nav.Link>
				</Nav>
			);
		}
	};

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Link to="/home">
					<Navbar.Brand>T-Shirtaholic</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						{conditionallyRenderProductLinks()}
					</Nav>
					{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
					{/* <Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto"></Nav>
					</Navbar.Collapse> */}
					{authState._id !== '' ? (
						<Nav className="ml-auto d-flex justify-content-center align-items-center">
							<Nav.Link as={Link} to="/home/profile">
								<Avatar name={authState.name} size={40} round />
							</Nav.Link>
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
