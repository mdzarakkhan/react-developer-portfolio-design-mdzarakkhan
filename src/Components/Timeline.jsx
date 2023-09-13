import React from 'react';
import './timeline.scss';

const Timeline = (props) => {
    return (

        <>
            <div className='timeline clearfix'>
                <div className='timeline-item clearfix'>
                    <h5 className='item-period'>{props.time}</h5>
                    <span className='item-company'>{props.place}</span>
                    <h4 className='item-title'>{props.post}</h4>
                    <p className='text'>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Timeline;