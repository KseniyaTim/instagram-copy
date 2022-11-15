import React from 'react';
import './ProfileStories.css'
import { STORY_ELEMENTS } from '../../consts/storyElements';
import SingleProfile from './SingleProfile/SingleProfile';

const ProfileStories = () => {
    return (
        <div>
            <div id='storiesContainer'>
                {STORY_ELEMENTS.map( (element, index) => 
                <SingleProfile
                key={index}
                profileName={element.name}
                ProfilePic={element.PFPic}
                />
                 )}
            </div>
        </div>
    );
};

export default ProfileStories;