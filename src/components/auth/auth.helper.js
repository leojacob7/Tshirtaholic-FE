import axios from 'axios';
import { UNIQUE_EMAIL_ERROR } from '../../utils';

export const signUpUser = async (signUpData) => {
	const { name, email, password } = signUpData;
	try {
		const userData = await axios.post('/api/signup', {
			name,
			email,
			password,
		});

		return userData.data;
	} catch (error) {
		const {
			response: {
				data: { type, errors },
			},
		} = error;
		if (type === UNIQUE_EMAIL_ERROR) {
			console.log(`error here`, errors);
			return { error: errors };
		}
		console.log(`error here`, errors);
	}
};

export const signInUser = async (signInData) => {
	const { email, password } = signInData;
	try {
		if (!email || !password) {
			throw new Error({
				error: 'Empty email or password',
			});
		}
		const userData = await axios.post('/api/signin', {
			email,
			password,
		});

		// TODO: this is getData api move it to the required component
		// const getUserData = await axios.get(
		// 	`/api/user/${userData.data.body.user.id}`,
		// 	{
		// 		headers: {
		// 			Accept: 'application/json',
		// 			'Content-Type': 'application/json',
		// 			// Authorization: 'Bearer ' + userData.data.body.token, //the token is a variable which holds the token
		// 		},
		// 	}
		// );

		// TODO: this is a test get token file need to remove it
		// const newData = await axios.get(`/api/getToken`, {
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json',
		// 		// Authorization: 'Bearer ' + userData.data.body.token, //the token is a variable which holds the token
		// 	},
		// });

		return { data: userData.data, status: userData.status };
	} catch (err) {
		console.log(`error here`, err.response);
		return 'Incorrect username or password';
	}
};

export const signOut = async () => {
	try {
		const { message } = await axios.post('/api/signOut');
		if (message !== 'User signOut') {
			throw new Error('Signout unsuccessfull');
		}
		return true;
	} catch (error) {
		console.log(`error`, error);
		return false;
	}
};

export const isLoggedIn = async () => {
	try {
		const { data, status } = await axios.get(`/api/getToken`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
		console.log('sign out successful');
		if (status === 200) {
			console.log('sign out successful inside check status');
			return { userData: data.user, userSignedIn: true };
		}
		throw new Error({ message: 'Unable to fetch data' });
	} catch (error) {
		console.log(`error`, error);
		return { userSignedIn: false };
	}
};
