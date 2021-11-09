import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Base({ children, title }) {
	return (
		<div className="vh-100">
			<NavBar />
			<div className="jumbotron jumbotron-fluid h-100">{children}</div>
			<Footer />
		</div>
	);
}
