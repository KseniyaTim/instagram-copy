import React from 'react';
import {STORY_ELEMENTS} from '../../../consts/storyElements'
import SingleProfilePost from './SingleProfilePost/SingleProfilePost'

const CenterHead = () => {
    return (
        <div>
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