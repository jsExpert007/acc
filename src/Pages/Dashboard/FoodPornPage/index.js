import React, { useState } from 'react';
import './style.scss';
import { LeftInfoContainer, SearchInput, FollowsNewRecipes, ShowVideo } from 'src/Components';
import VideoViewMethod from './VideoViewMethod';

export default function FoodPornPage() {

  const [searchText, setSearchText] = useState('');
  const [isDefaultView, setIsDefaultView] = useState(true);

  const onChangeSearch = (v) => setSearchText(v);

  const onChangeView = () => setIsDefaultView(!isDefaultView);

  return (
    <div className="food-porn-page">
      <SearchInput
        className='search-input mx-auto'
        value={searchText}
        onChange={onChangeSearch}
      />
      <VideoViewMethod
        isDefaultView={!isDefaultView}
        onChange={onChangeView}
      />
      <LeftInfoContainer
        leftChildren={<FollowsNewRecipes />}
        className={'right-content'}
      >
        <ShowVideo
          isDefaultView={isDefaultView}
        />
      </LeftInfoContainer>
    </div>
  );
}
