import React, { useState } from 'react';
import './style.scss';
import _ from 'lodash';
import { ReactSVG } from 'react-svg'

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
    <div className="input-component">
      <div className={`input-container ${className} ${!isFocused && validation === false && !_.isEmpty(value) ? 'error-input' : ''}`} >
        <div className='input-content'>
          {icon && <ReactSVG src={icon} className='left-icon' />}
          <div className='label-input'>
            {(isFocused || value || isLabel) ? <div className='label'>{label || placeholder}</div> : null}
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
        </div>
      </div >
    </div >
  );
}
