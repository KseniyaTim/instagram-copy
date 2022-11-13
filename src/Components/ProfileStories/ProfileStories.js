import React from 'react';
import './ProfileStories.css'
import { STORY_ELEMENTS } from '../../consts/storyElements';
import SingleProfile from './SingleProfile/SingleProfile';

const ProfileStories = () => {
    return (
        <div id='storiesContainer'>
            {/* i need to have about 5 pictures of people to look like stories */}
            {STORY_ELEMENTS.map( (element, index) => 
            <SingleProfile
            key={index}
            profileName={element.name}
            ProfilePic={element.PFPic}
            />
            )}
        </div>
    );
};

export default ProfileStories;