import React from 'react';
import './style.scss';
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

export default function PhoneNumberInput({
  value, onChange, label = '', className = ''
}) {

  return (
    <div className={`phone-input-component ${className}`}>
      <div className={`phone-input-container ${label ? 'label-container' : ''}`}>
        {label ? <div className='label'>{label}</div> : null}
        {/* <PhoneInput
          placeholder={'Phone Number'}
          inputClass="w-100 phone"
          dropdownClass="drop-down"
          buttonClass="buttonClass"
          country={'us'}
          value={value}
          onChange={e => onChange(e)}
        /> */}
      </div>
    </div>
  );
}
