import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../store/GlobalState';
import SignInSignUpContainer from '../auth/SignInSignUpContainer';
import PageNotFound from '../core/PageNotFound';
import HomePage from '../HomePage';
const MyRoute = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/signIn" element={<SignInSignUpContainer />} />
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default MyRoute;
