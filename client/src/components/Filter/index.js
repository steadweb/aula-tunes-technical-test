import React from 'react';
import './Filter.css';

const filters = [
  {
    value: 'top-albums',
    label: 'Top Albums',
  },
  {
    value: 'top-songs',
    label: 'Top Songs',
  },
  {
    value: 'hot-tracks',
    label: 'Hot Tracks',
  },
  {
    value: 'new-releases',
    label: 'New Release',
  },
  {
    value: 'coming-soon',
    label: 'Coming Soon',
  },
];

function Filter({ onChange, value }) {
  return (
    <div className='filter'>
      <select onChange={(e) => onChange(e.target.value)} defaultValue={value}>
        {filters.map((filter) => (
          <option key={filter.value} value={filter.value}>
            {filter.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
