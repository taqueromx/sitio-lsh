import React from 'react';
import './card.style.css';

export const Card = ({name, description}) => (
    <div className="card-container">
        <h2>{ name }</h2>
        <p>{ description }</p>
    </div>
);