import React, { useContext } from 'react';
import { AuthContext } from '../store/GlobalState';

function HomePage() {
	const [authState] = useContext(AuthContext);
	return (
		// <Base>
		<div>{JSON.stringify(authState)}</div>
		// </Base>
	);
}

export default HomePage;
