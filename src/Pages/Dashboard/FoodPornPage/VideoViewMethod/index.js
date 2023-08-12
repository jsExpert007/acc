import React, { useState } from 'react';
import './style.scss';
import { AccSwitch, SearchInput } from 'src/Components';

export default function VideoViewMethod({
  className = '',
  isDefaultView,
  onChange
}) {

  return (
    <div className={`video-view-method-component v-c ${className}`}>
      <div className='method'>Default view</div>
      <AccSwitch 
        value={isDefaultView}
        onChange={onChange}
      />
      <div className='method'>Long view</div>
    </div>
  );
}
