import React, { useState } from 'react';
import './style.scss';
import FilterIcon from 'src/Assets/Images/Icons/filter-dark-icon.svg';
import SearchIcon from 'src/Assets/Images/Icons/search-icon.svg';
import { CategoryDropDown } from 'src/Components';

export default function FilterSearch({
  className = '',
  currentCategory,
  dropListInfo,
  onSelectCategory,
  searchText,
  onChangeSearchText
}) {

  return (
    <div className={`filter-search-component ${className}`}>
      <div className='search-content v-c'>
        <CategoryDropDown
          className='category-drop-down'
          value={currentCategory?.category_name}
          dropListInfo={dropListInfo}
          onSelect={onSelectCategory}
        />
        <input
          className='search-input'
          placeholder="Search"
          value={searchText}
          onChange={e => onChangeSearchText(e.currentTarget.value)}
        />
        <div className='search-icon-content center '>
          <img src={SearchIcon} alt='search-icon' className='search-icon' />
        </div>
      </div>
      <div className='filter-content v-c'>
        <img src={FilterIcon} alt='filter-icon' className='filter-icon' />
        <div className='filter'>Filter</div>
      </div>
    </div>
  );
}