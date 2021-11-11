import React, { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/GlobalState';
import { isLoggedIn } from './auth/auth.helper';
import Base from './core/Base';
import HomePage from './HomePage';
import ProductPage from './ProductPage';

function SignedInPageRelative() {
	const [authState, setAuthState] = useContext(AuthContext);
	let navigate = useNavigate();
	useEffect(() => {
		async function performAuthRedirection() {
			const data = await isLoggedIn();
			if (data.userSignedIn) {
				setAuthState(data.userData);
				return navigate('/home');
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
				<Route path="/product" element={<ProductPage />} />
			</Routes>
		</Base>
	);
}

export default SignedInPageRelative;
