import React, { useState } from 'react';
import './Search.css';

export default function Search({ onChange, value }) {
  return (
    <div className='search'>
      <input
        type='search'
        name='search'
        placeholder='Search...'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
