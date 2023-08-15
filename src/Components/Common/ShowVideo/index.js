import React from 'react';
import './style.scss';

export default function ShowVideo({
  className = '',
  isDefaultView
}) {

  return (
    <div className={`show-video-component ${className}`}>
      <div>

      </div>
      <div className={`video-content ${isDefaultView ? '' : 'long-view'}`}>

      </div>
    </div>
  );
}