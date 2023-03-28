import React from 'react';
import Auth from '../utils/auth';


const Profile = () => {
    const userData = Auth.loggedIn ? Auth.getProfile() : null;
	return (
				<h1>{userData.data.firstName}'s Profile</h1>
	)
}

export default Profile;