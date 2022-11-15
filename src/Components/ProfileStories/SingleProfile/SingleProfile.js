import React from 'react';
import './SingleProfile.css'

const SingleProfile = ({ profileName, ProfilePic }) => {
    return (
        <div id='singleProfileContainer'>
            <div className='picture_border'>
                 <img className='cursorStyle singlePic' src={ProfilePic} alt='profile' />
             </div>
            <div className='cursorStyle' id='singleName'>{profileName}</div>
        </div>
    );
};

export default SingleProfile;