import React, { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../store/GlobalState';
import { isLoggedIn } from './auth/auth.helper';
import Base from './core/Base';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import ProfilePage from './ProfilePage';

function SignedInPageRelative() {
	const [authState, setAuthState] = useContext(AuthContext);
	let navigate = useNavigate();
	let location = useLocation();
	useEffect(() => {
		async function performAuthRedirection() {
			const data = await isLoggedIn();
			if (data.userSignedIn) {
				setAuthState(data.userData);
				return navigate(location.pathname);
			}
			if (!data.userSignedIn || authState._id === '') {
				navigate('/signIn');
			}
		}
		performAuthRedirection();
	}, []);
	return (
		<Base>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/product" element={<ProductPage />} />
			</Routes>
		</Base>
	);
}

export default SignedInPageRelative;
