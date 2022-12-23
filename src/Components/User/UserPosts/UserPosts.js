import React from 'react';
import './userPosts.css'
import Grid from '@mui/material/Grid';
import { USER_POSTS } from '../../../consts/posts'


const UserPosts = () => {
    return (

        <Grid container columnSpacing={0.5} className='userPostsWrapper'>
            {USER_POSTS.map((element, index) => (
                <Grid item xs={4} key={index} >
                    <img className='userPost' src={element} alt='post' />
                </Grid>
            ))}
        </Grid>

    );
};

export default UserPosts;