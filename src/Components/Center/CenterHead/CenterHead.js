import React from 'react';
import './CenterHead.css'
import {STORY_ELEMENTS} from '../../../consts/storyElements'
import SingleProfilePost from './SingleProfilePost/SingleProfilePost'

const CenterHead = () => {
    return (
        <div className='post_header_container'>
            {STORY_ELEMENTS.map( (element, index) => 
            <SingleProfilePost
            key={index}
            postName={element.name}
            postPic={element.PFPic}
            mainPost={element.post}
            />)}
        </div>
    );
};

export default CenterHead;