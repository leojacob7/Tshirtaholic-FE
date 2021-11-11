import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../store/GlobalState';
import SignInSignUpContainer from '../auth/SignInSignUpContainer';
import PageNotFound from '../core/PageNotFound';
// import HomePage from '../HomePage';
import SignedInPageRelative from '../SIgnedInPageRelative';
const MyRoute = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/signIn" element={<SignInSignUpContainer />} />
					<Route path="/home/*" element={<SignedInPageRelative />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default MyRoute;
