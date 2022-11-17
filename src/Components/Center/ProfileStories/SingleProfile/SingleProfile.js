import React from 'react';
import './SingleProfile.css'

const SingleProfile = ({ profileName, ProfilePic }) => {
    return (
        <div className='single_profile_container'>
            <div className='picture_border'>
                 <img className='cursorStyle singlePic' src={ProfilePic} alt='profile' />
             </div>
            <div className='cursorStyle single_name'>{profileName}</div>
        </div>
    );
};

export default SingleProfile;