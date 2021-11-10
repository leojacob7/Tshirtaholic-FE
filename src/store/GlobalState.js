import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const defaulState = {
	_id: '',
	name: '',
	email: '',
	token: '',
	role: '',
};

export const AuthProvider = (props) => {
	const [authState, setAuthState] = useState(defaulState);

	return (
		<AuthContext.Provider value={[authState, setAuthState]}>
			{props.children}
		</AuthContext.Provider>
	);
};
