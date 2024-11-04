import React from 'react';
import './style.scss';

export default function AccSwitch({
  className = '',
  value,
  onChange,
}) {

  return (
    <div className={`acc-switch-component v-c ${className} ${value ? 'active' : 'inActive'}`}
      onClick={onChange}>
      <div className={`circle `} />
    </div>
  );
}