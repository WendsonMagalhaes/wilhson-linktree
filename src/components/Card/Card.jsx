import React, { useState } from "react";
import "./Card.css";

const Card = ({ image, title, description }) => {

    return (
        <div className="project-card">
            <img src={image} alt="#" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
