import React from 'react';
import './style.scss';

export default function OrPolicy({
  className = '',
}) {

  return (
    <div className={`or-policy-component ${className}`}>
      <div className='policy'>By continuing, you agree to our Terms of use, Terms of Service, and Privacy Policy.</div>

    </div>
  );
}