import axios from 'axios';

export const updateProfileDetails = async (profile, userId) => {
	const { name } = profile;

	try {
		const { data, status } = await axios.put(`/api/user/${userId}`, {
			name,
		});

		if (status !== 200) {
			throw new Error({ isUpdated: false });
		}

		return {
			isUpdated: true,
			data,
		};
	} catch (error) {}
};
