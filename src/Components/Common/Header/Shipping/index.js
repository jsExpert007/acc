import React from 'react';
import './style.scss';
import ShippingIcon from 'src/Assets/Images/Icons/shipping-icon.png'

export default function Shipping() {

  return (
    <div className='shipping-component'>
      <img src={ShippingIcon} alt='shipping-icon' className='shipping-icon' />
      <div className='shipping-num center'>3</div>
    </div>
  );
}