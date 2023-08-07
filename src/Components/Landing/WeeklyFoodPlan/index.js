import React from 'react';
import './style.scss';
import {
  WeekPeriod,
  WeeklyFoodItem,
} from 'src/Components';
import { categories } from './categories';

export default function WeeklyFoodPlan() {

  return (
    <div className='weekly-food-plan-component'>
      <WeekPeriod />
      <div className='weekly-food-plan-container'>
        <div className='title'>Weekly Food Plan</div>
        <div className='week-food-list'>
          {categories.map((item, index) => (
            <WeeklyFoodItem 
              key={index}
              info={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}