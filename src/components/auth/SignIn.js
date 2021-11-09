import React from 'react';

function SignIn() {
	return (
		<div className="component-signInContainer">
			<h1>Sign In</h1>
			<input type="text" placeholder="email" />
			<input type="text" placeholder="password" />
			<button className="submit">Login</button>
		</div>
	);
}

export default SignIn;
