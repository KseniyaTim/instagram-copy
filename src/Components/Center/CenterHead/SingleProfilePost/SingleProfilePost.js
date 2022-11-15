import React from 'react';
import './SingleProfilePost.css'
import CommentSection from '../../CommentSection/CommentSection';

const SingleProfilePost = ({postName, postPic, mainPost}) => {
    return (
        <div className='largeScreenProfileWrapper'>
            <div className='single_header'>
                <div className='left_side'>
                    <img className='profile_pic' src={postPic} alt='profile'/>
                    <div className='profile_name'>{postName}</div>
                </div>
                    <div className='more_icon'>
                        <svg  aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                    </div>
            </div>
            <div>
                <img className='main_picture' src={mainPost} alt='main post'/>
            </div>
            <CommentSection/>
            <div className='num_likes'>
                <div >liked by <span className='bold'>angelina</span> and <span className='bold'>30,210 </span>others</div>
            </div>
            <div className='comments_wrapper'>
                <div className='bold'>{postName}</div>
                <div className='caption'>just happy to be here</div>
            </div>
            <div className='comments_wrapper'>
                <div className='gray'>view all 3,421 comments</div>
            </div>
            <div className='comments_wrapper'>
                <div className='gray'>5 days ago</div>
            </div>
        </div>
    );
};

export default SingleProfilePost;