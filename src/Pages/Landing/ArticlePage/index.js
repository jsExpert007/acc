import React from 'react';
import './style.scss';
import { categories } from './categories';
import ArticleItem from './ArticleItem';

export default function ArticlePage() {

  return (
    <div className='article-page'>
      <h2>Article's</h2>
      <div className='articles-list container'>
        {categories.map((item, index) => (
          <ArticleItem
            key={index}
            info={item}
          />
        ))}
      </div>
    </div>
  );
}