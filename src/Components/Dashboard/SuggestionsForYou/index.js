import React from 'react';
import './style.scss';
import SuggestionUserItem from './SuggestionUserItem';
import { SuggestionUsers } from './SuggestionUsers';

export default function SuggestionsForYou() {

  const onFollow = () => { };

  return (
    <div className='suggestions-for-you-component'>
      <h4>Suggestions For You</h4>
      <div className='user-list-container'>
        {SuggestionUsers.map((item, index) => (
          <SuggestionUserItem
            key={index}
            info={item}
            onFollow={onFollow}
          />
        ))}
      </div>
    </div>
  );
}