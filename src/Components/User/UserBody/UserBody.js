import React from 'react';
import './userBody.css'
import dog from '../../../images/dog1.png'

const UserBody = () => {
    return (
        <div className='userBodyWrapper'>
            <div className='profileHeader'>
                <img className='userProfile' src={dog} alt='dog'></img>
                <div>
                    <div className='mainNum'>3431</div>
                    <div>posts</div>
                </div>
                <div>
                    <div className='mainNum'>6530</div>
                    <div>followers</div>
                </div>
                <div>
                    <div className='mainNum'>217</div>
                    <div>following</div>
                </div>
            </div>
            <div className='userBioWrapper'>
                <div className='userBio'>
                    <div className='userBioTitle'>Your Name</div>
                    <div>Your bio goes here...</div>
                    <div>and here too.</div>
                    <a href='https://www.youtube.com/watch?v=jzJA257aaDU'>yoursite.com</a>
                </div>

            </div>

        </div>
    );
};

export default UserBody;