import React from 'react';
import './style.scss';
import CloseIcon from "src/Assets/Images/Icons/add.svg";
import { AddRecipesList } from 'src/Constant';

export default function AddRecipesPopUp({
  className = '', onClick, onClose
}) {

  return (
    <div className={`add-recipe-pop-up-component ${className}`}>
      <div className='header center'>
        <div>Add Recipe</div>
        <img src={CloseIcon} alt='close-icon' className='close-icon' onClick={onClose} />
      </div>
      <div className='body'>
        {AddRecipesList.map((item, index) => (
          <li
            key={index}
            className={'item'}
            onClick={() => onClick(item)}>
            {item.name}
          </li>
        ))}
      </div>
    </div>
  );
}