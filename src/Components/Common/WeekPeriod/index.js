import React from 'react';
import './style.scss';

export default function WeekPeriod({
  className = '',
}) {

  return (
    <div className={`week-period-component ${className}`}>
      <div className='date'>{`01/08/2023 - 01/14/2023`}</div>
    </div>
  );
}