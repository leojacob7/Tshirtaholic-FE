import React, { useState, useEffect } from 'react';
import { signUpUser } from './auth.helper';

function SignUp({ callback }) {
	const [signUpData, setsignUpData] = useState({
		name: '',
		password: '',
		email: '',
	});
	// const [error, seterror] = useState({ name: '', email: '', password: '' });
	const [nameError, setNameError] = useState('emptyState');
	const [emailError, setEmailError] = useState('emptyState');
	const [passwordError, setPasswordError] = useState('emptyState');
	const [signUperror, setsignUperror] = useState('');

	const isNameError = () => {
		return nameError.length > 0 && nameError !== 'emptyState';
	};

	const isPasswordError = () => {
		return passwordError.length > 0 && passwordError !== 'emptyState';
	};

	const isEmailError = () => {
		return emailError.length > 0 && emailError !== 'emptyState';
	};

	useEffect(() => {
		const { name, email, password } = signUpData;
		if (name.length <= 0 && email.length <= 0 && password <= 0) {
			return;
		}
		const nameError = 'Name should be greater than 2 character';
		const emailError = 'Please enter a valid email';
		const passwordError = 'Password should be at least 8 characters';
		setNameError('');
		setEmailError('');
		setPasswordError('');
		if (name.length < 3) {
			setNameError(nameError);
			// seterror({ ...error, name: nameError });
		}
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			setEmailError(emailError);
			// seterror({ ...error, email: emailError });
		}
		if (password.length < 8) {
			setPasswordError(passwordError);
			// seterror({ ...error, password: passwordError });
		}
	}, [signUpData]);

	const canSubmit = () => {
		return (
			passwordError.length !== 0 &&
			emailError.length !== 0 &&
			nameError.length !== 0
		);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (
			nameError.length === 0 &&
			emailError.length === 0 &&
			passwordError.length === 0
		) {
			//'SignUp Data success'
			const data = await signUpUser(signUpData);
			if (!data.error) {
				setsignUpData({
					name: '',
					password: '',
					email: '',
				});
				setNameError('emptyState');
				setEmailError('emptyState');
				setPasswordError('emptyState');
				callback(true);
				console.log('SignUp successful');
			} else {
				console.log('signup error');
				setsignUperror(data.error);
			}
		} else {
			setNameError('Name should be greater than 2 character');
			setEmailError('Please enter a valid email');
			setPasswordError('Password should be at least 8 characters');
		}
	};
	return (
		<div className="component-signUpContainer">
			<h1>Create Acount</h1>
			{/* <form
				className="d-flex justify-content-center flex-column align-items-center w-100"
				action=""
			> */}
			<input
				className={isNameError() ? 'errorForm' : ''}
				type="text"
				value={signUpData.name}
				placeholder="name"
				onChange={(e) => {
					e.preventDefault();
					setsignUpData({ ...signUpData, name: e.target.value });
				}}
			/>
			<input
				className={isEmailError() ? 'errorForm' : ''}
				type="text"
				value={signUpData.email}
				placeholder="email"
				onChange={(e) => {
					e.preventDefault();
					setsignUpData({ ...signUpData, email: e.target.value });
				}}
			/>
			<input
				className={isPasswordError() ? 'errorForm' : ''}
				type="password"
				value={signUpData.password}
				placeholder="password"
				onChange={(e) => {
					setsignUpData({
						...signUpData,
						password: e.target.value,
					});
				}}
			/>
			<button
				className={`submit ${!canSubmit() ? 'submit-disabled' : ''}`}
				onClick={onSubmit}
			>
				Sign Up
			</button>
			{/* <div>{signUpData}</div> */}
			{/* </form> */}
			<div className="d-flex flex-column w-30 h-10 justify-content-center align-items-center">
				{nameError.length > 0 && nameError !== 'emptyState' && (
					<div
						className="alert alert-danger h-3 d-inline-block p-1"
						role="alert"
					>
						{nameError}
					</div>
				)}
				{emailError.length > 0 && emailError !== 'emptyState' && (
					<div
						className="alert alert-danger h-2 d-inline-block p-1"
						role="alert"
					>
						{emailError}
					</div>
				)}
				{passwordError.length > 0 && passwordError !== 'emptyState' && (
					<div
						className="alert alert-danger h-3 d-inline-block p-1"
						role="alert"
					>
						{passwordError}
					</div>
				)}
				{signUperror.length > 0 && (
					<div
						className="alert alert-info h-3 d-inline-block p-1"
						role="alert"
					>
						{signUperror}
					</div>
				)}
			</div>
		</div>
	);
}

export default SignUp;
