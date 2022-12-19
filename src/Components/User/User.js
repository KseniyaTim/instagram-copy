import React from 'react';
import './user.css'
import UserHeader from './UserHeader/UserHeader';
import UserBody from './UserBody/UserBody';
import UserNavbar from './UserNavbar/UserNavbar';

const User = () => {

    return (
        <div className='userWrapper'>
            <UserHeader/>
            <UserBody/>
            <UserNavbar/>
        </div>
    );
};

export default User;