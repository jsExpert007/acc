import React, { useState } from 'react';
import './style.scss';
import _ from 'lodash';
import ArrowUpIcon from 'src/Assets/Images/Icons/arrow-up.svg';

export default function CategoryDropDown({
  className = '',
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
    <div className={`category-drop-down-component ${className}`}>
      <div className='select-header v-c' onClick={onToggleDropList} >
        <div className='value'>{value}</div>
        <img src={ArrowUpIcon} className={`${isDropList ? "arrow-up" : "arrow-down"}`} />
      </div>
      {(isDropList && !_.isEmpty(dropListInfo)) &&
        <div className='drop-list-container shadow-object'>
          {dropListInfo.map((item, index) => (
            <div
              key={index}
              className='drop-list-item'
              onClick={() => onClick(item)}>
              {item.category_name}
            </div>
          ))}
        </div>
      }
    </div >
  );
}
