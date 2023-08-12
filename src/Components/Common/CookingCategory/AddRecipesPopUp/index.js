import React from 'react';
import './style.scss';
import CloseIcon from "src/Assets/Images/Icons/add.svg";

const AddList = [
  { id: "1", name: "Add Recipe" },
  { id: "2", name: "Add Drink Recipe" },
  { id: "3", name: "Add Sauce Recipe" },
  { id: "4", name: "Add Season Recipe" },
  { id: "5", name: "Add Food Hack" },
  { id: "6", name: "Add Personal Care Recipe" },
  { id: "7", name: "Import from Web" },
  { id: "8", name: "Scan from Photo" },
  { id: "9", name: "Scan from PDF" },
]

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
        {AddList.map((item, index) => (
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