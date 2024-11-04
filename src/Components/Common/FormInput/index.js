import React, { useState } from 'react';
import './style.scss';
import _ from 'lodash';

export default function FormInput({
  className = '',
  type = "text",
  icon,
  isLabel,
  label,
  placeholder,
  validation,
  maxLength,
  value,
  onChange,
}) {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`input-component ${className}`}>
      {isLabel ? <div className='label'>{label || placeholder}</div> : null}
      <div className={`input-container ${!isFocused && validation === false && !_.isEmpty(value) ? 'error-input' : ''}`} >
        {icon && (
          <div className='left-icon-content center'>
            <img src={icon} alt='left-icon' className='left-icon' />
          </div>
        )}
        <input
          type={type}
          className={`main-input`}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          maxLength={maxLength}
          onChange={e => onChange(e.currentTarget.value)}
        />
      </div>
    </div >
  );
}
