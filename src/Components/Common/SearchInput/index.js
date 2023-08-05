import React from 'react';
import './style.scss';
import SearchIcon from 'src/Assets/Images/Icons/search-icon.svg';
import { ReactSVG } from 'react-svg';

export default function SearchInput({
  className = '',
  type = "text",
  placeholder = 'Search',
  value,
  onChange,
}) {

  return (
    <div className={`search-input-component ${className}`}>
      <ReactSVG src={SearchIcon} className="search-icon" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
}
