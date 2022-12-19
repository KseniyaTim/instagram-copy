import React from 'react';
import './header.css'

const UserHeader = () => {
    return (
        <div className='headerWrapper'>
            <span className='filler'>w</span>
            <span className='userName'>username</span>
            <span class="material-symbols-outlined settingsIcon">
                settings
            </span>

        </div>
    );
};

export default UserHeader;