import React, { useState } from 'react';
import Base from '../core/Base';
import SignIn from './SignIn';
import SignUp from './SignUp';

function SignInSignUpContainer() {
	const [toggleLeftOverlay, settoggleLeftOverlay] = useState(true);
	const [signInSuccessFull, setSignInSuccessFull] = useState(false);
	const [signUpSuccessFull, setSignUpSuccessFull] = useState(false);

	const changeContextOfAuth = (isSignUpSuccess) => {
		if (isSignUpSuccess) {
			settoggleLeftOverlay(true);
			setSignUpSuccessFull(true);
		}
	};

	const redirectOnSignIn = (isSignInSuccess) => {
		if (isSignInSuccess) {
			setSignInSuccessFull(true);
		}
	};

	return (
		<Base>
			<div className="modalContainer">
				<div className="scontainer" id="container">
					<div
						className={`form-container sign-up-container  ${
							toggleLeftOverlay ? 'no-signin' : 'signin-active'
						}`}
					>
						<SignUp callback={changeContextOfAuth} />
					</div>
					<div
						className={`form-container sign-in-container  ${
							toggleLeftOverlay ? 'signUp-active' : 'no-signUp'
						}`}
					>
						{signUpSuccessFull && (
							<div
								className="alert alert-success h-3 d-inline-block p-1 mt-2"
								role="alert"
							>
								Sign up successfull! Please sign in to continue
							</div>
						)}
						<SignIn callback={redirectOnSignIn} />
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div
								className={`overlay-panel overlay-left ${
									toggleLeftOverlay
										? 'overlay-left-active'
										: 'no-left-overlay-active'
								}`}
							>
								<h1>Hello World</h1>
								<button
									className="ghost"
									id="signUp"
									onClick={() =>
										settoggleLeftOverlay(!toggleLeftOverlay)
									}
								>
									Sign Up
								</button>
							</div>
							<div
								className={`overlay-panel overlay-right  ${
									toggleLeftOverlay
										? 'no-right-overlay-active'
										: 'overlay-right-active'
								}`}
							>
								<h1>Welcome Back</h1>
								<button
									className="ghost"
									id="signUp"
									onClick={() =>
										settoggleLeftOverlay(!toggleLeftOverlay)
									}
								>
									Sign In
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Base>
	);
}

export default SignInSignUpContainer;
