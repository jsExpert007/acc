import React from 'react';
import { TextBtn } from 'src/Components/Common';
import './style.scss';

export default function SuggestionUserItem({
  info,
  onFollow
}) {

  const {
    avatar,
    name,
    des
  } = info


  return (
    <div className='suggestion-user-item-component'>
      <img src={avatar} alt='avatar' className='avatar' />
      <div className='name-description'>
        <div className='name'>{name}</div>
        <div className='description'>{des}</div>
      </div>
      <TextBtn
        btnText={'+ Follow'}
        onClick={() => onFollow(info)}
      />
    </div >
  );
}