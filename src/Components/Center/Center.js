import React from 'react';
import './Center.css'
import CenterHead from './CenterHead/CenterHead';
import ProfileStories from '../ProfileStories/ProfileStories'

const Center = () => {
    return (
        <div className='center_container center_container::-webkit-scrollbar'>
            <ProfileStories/>
            <CenterHead/>
        </div>
    );
};

export default Center;