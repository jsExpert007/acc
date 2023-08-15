import React, { useState } from 'react';
import './style.scss';
import { useParams } from 'react-router-dom'
import AddRecipesImg from './AddRecipesImg';
import AddRecipesDetail from './AddRecipesDetail';
import MoreInfo from './MoreInfo';
import { AddRecipesList } from 'src/Constant';

export default function AddRecipesPage() {

  let { add_id } = useParams();

  const title = AddRecipesList.find((e) => e.id === add_id)?.name || "";

  const [addInfo, setAddInfo] = useState({
    tag: '',
    notes: '',
    tools: '',
    about: '',
  });

  const onChangeAddInfo = (field, value) => {
    setAddInfo({
      ...addInfo,
      [field]: value,
    });
  };

  return (
    <div className="add-recipes-page">
      <div className='container'>
        <AddRecipesImg
          title={title}
        />
        <AddRecipesDetail
          addInfo={addInfo}
          onChangeAddInfo={onChangeAddInfo}
        />
        <MoreInfo />
      </div>
    </div>
  );
}
