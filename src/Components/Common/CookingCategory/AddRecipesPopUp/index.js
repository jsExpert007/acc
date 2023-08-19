import React from 'react';
import './style.scss';
import _ from 'lodash'
import { useSelector } from 'react-redux';
import CloseIcon from "src/Assets/Images/Icons/add.svg";

export default function AddRecipesPopUp({
  className = '', onClick, onClose
}) {

  const {
    category_list
   } = useSelector(
     state => state.Category,
   );

  return (
    <div className={`add-recipe-pop-up-component ${className}`}>
      <div className='header center'>
        <div>Add Recipe</div>
        <img src={CloseIcon} alt='close-icon' className='close-icon' onClick={onClose} />
      </div>
      <div className='body'>
        {!_.isEmpty(category_list) && category_list.map((item, index) => (
          <li
            key={index}
            className={'item'}
            onClick={() => onClick(item)}>
            {`Add ${item.category_name}`}
          </li>
        ))}
      </div>
    </div>
  );
}