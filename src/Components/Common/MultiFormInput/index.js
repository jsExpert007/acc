import React, { useState } from 'react';
import './style.scss';
import _ from 'lodash';

export default function MultiFormInput({
  className = '',
  isLabel = true,
  label,
  placeholder,
  validation,
  value,
  onChange,
}) {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`multi-input-component ${className}`}>
      {isLabel ? <div className={`label ${isFocused ? 'active' : ''} `}>{label}</div> : null}
      <div className={`input-container 
        ${isFocused ? 'active' : ''} 
        ${!isFocused && validation === false && !_.isEmpty(value) ? 'error-input' : ''}`
      } >
        <textarea
          className='main-input'
          placeholder={placeholder}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div >
  );
}
