import React from 'react';
import './fiverrcard.scss';

const FiverrCard = (props) => {
    return (
        <>
            <a href={props.FiverrCardUrl} target='_blank' rel="noreferrer">
                <div className="card animate" >
                    <img src={props.FiverrCardImage} className="border-bottom card-img-top" alt='fiverr gigs'/>
                    <div className="card-body">
                        <div className="card-title plan-name">{props.FiverrCardTitle}</div>
                    </div>
                </div>
            </a>
        </>
    )
}



export default FiverrCard;