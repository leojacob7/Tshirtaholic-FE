import React, { useState, useEffect, useContext } from 'react';
import Base from './core/Base';
import { AuthContext } from '../store/GlobalState';
import { useNavigate } from 'react-router-dom';

function HomePage() {
	const [authState, setAuthState] = useContext(AuthContext);
	let navigate = useNavigate();
	useEffect(() => {
		console.log(`authState`, authState);
		if (authState._id === '') {
			navigate('/signIn');
		}
	}, []);
	return (
		<Base>
			<div>{JSON.stringify(authState)}</div>
		</Base>
	);
}

export default HomePage;
