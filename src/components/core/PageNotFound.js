import React, { useContext } from 'react';
import { AuthContext } from '../../store/GlobalState';

function PageNotFound() {
	const authState = useContext(AuthContext);
	console.log(`context`, authState);
	return <div>OOPS!!! page not found</div>;
}

export default PageNotFound;
