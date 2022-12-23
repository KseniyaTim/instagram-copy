import React from 'react';
import './user.css'
import UserHeader from './UserHeader/UserHeader';
import UserBody from './UserBody/UserBody';
import UserNavbar from './UserNavbar/UserNavbar';
import UserPosts from './UserPosts/UserPosts'

const User = () => {

    return (
        <div className='userWrapper'>
            <UserHeader/>
            <UserBody/>
            <UserNavbar/>
            <UserPosts/>
        </div>
    );
};

export default User;