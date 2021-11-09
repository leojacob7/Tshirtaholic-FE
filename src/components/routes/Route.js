import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInSignUpContainer from '../auth/SignInSignUpContainer';
const MyRoute = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/signIn" exact element={<SignInSignUpContainer />} />
			<Route path="*" element={<div>OOPS you reached a 404 page</div>} />
		</Routes>
	</BrowserRouter>
);

export default MyRoute;
