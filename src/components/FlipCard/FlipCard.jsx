import React from 'react';
import './FlipCard.css'; // O CSS será importado em um arquivo separado.

const FlipCard = ({ images, title, description, isVertical = false }) => {
    return (
        <div className={`flip ${isVertical ? 'flip-vertical' : ''}`}>
            <div
                className="front"
                style={{
                    backgroundImage: `url(${images})`,
                }}
            >
            </div>
            <div className="back">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};



export default FlipCard;
