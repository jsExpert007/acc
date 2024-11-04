import React from 'react';
import './style.scss';

export default function WeekPeriod({
  className = '',
}) {

  return (
    <div className={`week-period-component ${className}`}>
      <div className='date'>{`08/20/2023 - 08/26/2023`}</div>
    </div>
  );
}