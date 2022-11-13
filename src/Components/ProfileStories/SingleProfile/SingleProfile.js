import React from 'react';
import './SingleProfile.css'

const SingleProfile = ({ profileName, ProfilePic }) => {
    return (
        <div id='singleProfileContainer'>

            <img id='singlePic' src={ProfilePic} alt='profile' />
            <div>{profileName}</div>
        </div>
    );
};

export default SingleProfile;