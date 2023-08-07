import React, { useState } from 'react';
import './style.scss';
import MailIcon from "src/Assets/Images/Icons/mail-box.png";

export default function JoinNewsLetter({
  className = '', onClick
}) {

  const [email, setEmail] = useState("");

  const onChangeMail = (v) => setEmail(v);

  return (
    <div className={`join-news-letter-component ${className}`}>
      <input 
        className='news-letter-input'
        placeholder="Email" 
        value={email} 
        onChange={e => onChangeMail(e.currentTarget.value)}
      />
      <div className='bar' />
      <div className='send-mail-btn center' onClick={onClick}>
        <img src={MailIcon} alt='mail-icon' />
      </div>
    </div>
  );
}