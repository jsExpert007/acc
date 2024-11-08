import React, { useState } from 'react';
import './style.scss';
import _ from 'lodash';
import ArrowUpIcon from 'src/Assets/Images/Icons/arrow-up.svg';

export default function DropDownSelect({
  className = '',
  label,
  placeholder = "Please Select",
  value,
  dropListInfo,
  onSelect,
}) {

  const [isDropList, setIsDropList] = useState(false);

  const onToggleDropList = () => setIsDropList(!isDropList);
  const onClick = (item) => {
    setIsDropList(false);
    onSelect(item);
  }

  return (
    <div className={`drop-down-select-component ${className}`}>
      <div className='label'>{label}</div>
      <div className='select-header v-c' onClick={onToggleDropList} >
        <div className='main-description-content'>
          {value ? (
            <div className='value'>{value}</div>
          ) : (
            <div className='placeholder-des'>{placeholder}</div>
          )}
        </div>
        <img src={ArrowUpIcon} alt='arrow-icon' className={`${isDropList ? "arrow-up" : "arrow-down"}`} />
      </div>
      {(isDropList && !_.isEmpty(dropListInfo)) && <div className='drop-list-container shadow-object'>
        {dropListInfo.map((item, index) => (
          <div
            key={index}
            className='drop-list-item'
            onClick={() => onClick(item)}>
            {item.name}
          </div>
        ))}
      </div>}
    </div >
  );
}
