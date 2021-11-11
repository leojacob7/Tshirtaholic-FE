import React, { useContext, useState } from 'react';
import Avatar from 'react-avatar';
import { Card, Button } from 'react-bootstrap';
import { AuthContext } from '../store/GlobalState';
import { updateProfileDetails } from './profile-page-helper';

function ProfilePage() {
	const [authState, setAuthState] = useContext(AuthContext);
	const [profileData, setprofileData] = useState({ name: authState.name });
	const [isProfileUpdated, setisProfileUpdated] = useState(false);
	const [isDirty, setisDirty] = useState(false);

	const makeProfileFieldDirty = (val) => {
		if (authState.name !== val) {
			setisDirty(true);
		} else {
			setisDirty(false);
		}
	};

	const updateProfileData = async () => {
		console.log('inside click');
		if (profileData !== '' && authState.name !== profileData.name) {
			const data = await updateProfileDetails(profileData, authState._id);

			const { isUpdated } = data;
			console.log(`isUpdated`, data);
			if (isUpdated) {
				setisProfileUpdated(true);
				setAuthState({
					...authState,
					name: profileData.name,
				});
			}
		}
	};

	const renderUpdateButton = () => {
		console.log(`renderUpdateButton`, isProfileUpdated);
		return (
			<div
				className="alert alert-success h-3 d-inline-block p-1 mt-2"
				role="alert"
			>
				Profile has been updated!!!
			</div>
		);
	};

	console.log(`isProfileUpdated`, isProfileUpdated);
	return (
		<div className="container m-5 w-100">
			<div className="jumbotron d-flex align-items-center justify-content-center">
				<Card
					style={{ width: '70%' }}
					className="d-flex align-items-center p-5 cardShadow justify-content-center"
				>
					<Avatar name={authState.name} size={150} round />
					<Card.Body className="d-flex align-items-center h-100 justify-content-center flex-column">
						<Card.Title>Profile Details</Card.Title>
						<input
							className="w-80"
							type="text"
							value={profileData.name}
							onChange={(e) => {
								makeProfileFieldDirty(e.target.value);
								setprofileData({
									...profileData,
									name: e.target.value,
								});
							}}
						/>
						{isDirty && (
							<Button
								variant="primary"
								onClick={updateProfileData}
							>
								Update Profile
							</Button>
						)}

						{isProfileUpdated && renderUpdateButton()}
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default ProfilePage;
