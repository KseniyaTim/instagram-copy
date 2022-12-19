import React from 'react';
import './userNavbar.css'

const UserNavbar = () => {
    return (
        <div className='userNavbarWrapper'>
            <span class="material-symbols-outlined icon">
                apps
            </span>
            <span class="material-symbols-outlined icon">
                format_list_bulleted
            </span>
            <span class="material-symbols-outlined icon">
                location_on
            </span>
            <span class="material-symbols-outlined icon">
                account_box
            </span>
        </div>
    );
};

export default UserNavbar;