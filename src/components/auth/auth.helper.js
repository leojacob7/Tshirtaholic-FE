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
