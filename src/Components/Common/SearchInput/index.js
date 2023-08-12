import React from 'react';
import './style.scss';
import SearchIcon from 'src/Assets/Images/Icons/search-icon.svg';

export default function SearchInput({
  className = '',
  type = "text",
  placeholder = 'Search',
  value,
  onChange,
}) {

  return (
    <div className={`search-input-component ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
      <div className='search-icon-content center '>
        <img src={SearchIcon} alt='search-icon' className='search-icon' />
      </div>
    </div>
  );
}
