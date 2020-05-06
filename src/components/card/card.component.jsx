import React from 'react';
import './card.style.css';

export const Card = ({key, description}) => (
    <div className="card-container">
        <h2>{ key }</h2>
        <p>{ description }</p>
    </div>
);