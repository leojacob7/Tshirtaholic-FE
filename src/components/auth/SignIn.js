import React, { useState, useEffect, useContext } from 'react';
import { signInUser } from './auth.helper';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/GlobalState';

function SignIn({ callback }) {
	const [signInData, setsignInData] = useState({ email: '', password: '' });
	const [emailError, setEmailError] = useState('emptyState');
	const [passwordError, setPasswordError] = useState('emptyState');
	const [signInerror, setsignInerror] = useState('');
	const [authState, setAuthState] = useContext(AuthContext);

	let navigate = useNavigate();

	useEffect(() => {
		const { email, password } = signInData;
		if (email.length <= 0 && password <= 0) {
			return;
		}
		const emailError = 'Please enter a valid email';
		const passwordError = 'Password should be at least 8 characters';
		setEmailError('');
		setPasswordError('');
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			setEmailError(emailError);
			// seterror({ ...error, email: emailError });
		}
		if (password.length < 8) {
			setPasswordError(passwordError);
			// seterror({ ...error, password: passwordError });
		}
	}, [signInData]);

	const onSubmit = async () => {
		if (emailError.length === 0 && passwordError.length === 0) {
			console.log('SignIn without any error');
			const data = await signInUser(signInData);
			if (!data || data.status === 200) {
				setsignInData({
					password: '',
					email: '',
				});
				const {
					data: {
						body: { user },
					},
				} = data;
				setEmailError('emptyState');
				setPasswordError('emptyState');
				setAuthState(user);
				callback(true);
				navigate('/');
			} else {
				setsignInerror(data);
			}
		} else {
			setEmailError('Please enter a valid email');
			setPasswordError('Password should be at least 8 characters');
		}
	};

	const renderErrorBanner = () => (
		<div className="d-flex flex-column w-30 h-10 justify-content-center align-items-center">
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
		</div>
	);

	const renderSignInErrorBanner = () => {
		return (
			signInerror.length > 0 && (
				<div
					className="alert alert-danger h-3 d-inline-block p-1"
					role="alert"
				>
					{signInerror}
				</div>
			)
		);
	};

	return (
		<div className="component-signInContainer d-flex flex-column flex-align-items-center flex-justify-content-center">
			<h1>Sign In</h1>
			<input
				type="email"
				placeholder="email"
				value={signInData.email}
				name="email"
				onChange={(e) => {
					setsignInData({
						...signInData,
						email: e.target.value,
					});
				}}
			/>
			<input
				type="password"
				placeholder="password"
				value={signInData.password}
				name="password"
				onChange={(e) => {
					setsignInData({
						...signInData,
						password: e.target.value,
					});
				}}
			/>
			<button className="submit" onClick={onSubmit}>
				Login
			</button>

			{renderErrorBanner()}
			{renderSignInErrorBanner()}
		</div>
	);
}

export default SignIn;
