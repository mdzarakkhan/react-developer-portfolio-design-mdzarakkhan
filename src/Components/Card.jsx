import React from 'react';
import './card.scss';

const Card = (props) => {
    return (
        <>
            <div className="card animate">

                <div className="card-body">
                    <div className="plan-name">
                        {props.name}
                    </div>

                    <div className="plan-description">
                        <div className="plan-price month">
                            {props.price}<sub> {props.time} </sub></div>
                        <p>{props.description}</p>
                    </div>

                    <div className="plan-description specs">

                        <i className="fa-solid fa-circle-notch" style={{ color:'#4C9196'}}></i> {props.line1}<br />
                        <i className="fa-solid fa-circle-notch" style={{ color: '#4C9196' }}></i> {props.line2}<br />
                        <i className="fa-solid fa-circle-notch" style={{ color: '#4C9196' }}></i> {props.line3}<br />
                        <i className="fa-solid fa-circle-notch" style={{ color: '#4C9196' }}></i> {props.line4}<br />
                        <i className="fa-solid fa-circle-notch" style={{ color: '#4C9196' }}></i> {props.line5}<br />
                        <i className="fa-solid fa-circle-notch" style={{ color: '#4C9196' }}></i> {props.line6}<br />

                        
                    </div>

                    
                </div>
            </div>

        </>
    )
}

export default Card;