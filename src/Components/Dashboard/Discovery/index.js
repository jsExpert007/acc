import React from 'react';
import './style.scss';

const DiscoveryInfo = [
  "holiday cooking", "left over rice recipe", "chicken soup"
]

export default function Discovery() {

  return (
    <div className='discovery-component'>
      <h4>Discovery#</h4>
      <div className='discovery-list-container'>
        {DiscoveryInfo.map((item, index) => (
          <div className='item' key={index}>
            {`# ${item}`}
          </div>
        ))}
      </div>
    </div>
  );
}