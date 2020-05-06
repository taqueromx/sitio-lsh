import React from 'react';
// Importing styles
import './searchBox.style.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        tpye='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);