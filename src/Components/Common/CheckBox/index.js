import React from 'react';
import './style.scss';
import { ReactSVG } from "react-svg";
import CheckIcon from "src/Assets/Images/Icons/check-icon.svg";

export default function CheckBox({
  className = '', isCheck, onClick
}) {

  return (
    <div 
      className={`check-box-component center ${className} ${isCheck ? 'check' : ''}`}
      onClick={onClick}>
      <ReactSVG src={CheckIcon} />
    </div>
  );
}