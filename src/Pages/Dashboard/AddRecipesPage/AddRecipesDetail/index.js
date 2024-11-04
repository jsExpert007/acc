import React from 'react';
import './style.scss';
import { ContinueBtn, FormInput } from 'src/Components';

export default function AddRecipesDetail({
  addInfo,
  onChangeAddInfo
}) {

  return (
    <div className="add-recipes-detail-component">
      <div className='name'>Name</div>

      <div className='ingredients-content center'>
        <div className='ingredients'>Ingredients</div>
        <li>Substitutions</li>
        <li>Steps</li>
        <li>Steps</li>
      </div>
      <div className='detail-content'>
        <div className='btn-list'>
          <ContinueBtn
            className='add-btn'
            btnText='+ Add Directions'
          />
          <ContinueBtn
            className='add-btn'
            btnText='+ Add Ingredients'
          />
          <ContinueBtn
            className='add-btn'
            btnText='+ Add Video'
          />
          <ContinueBtn
            className='add-btn'
            btnText='+ Add Substitute'
          />
          <ContinueBtn
            className='add-btn'
            btnText='+ Sources'
          />
          <ContinueBtn
            className='add-btn'
            btnText='Drink Type'
          />
        </div>
        <div className='input-list'>
          <FormInput
            isLabel
            className='detail-input'
            label={"Tag"}
            placeholder={'Exp: healthy , detox , gluten free, etc'}
            value={addInfo.tag}
            onChange={e => onChangeAddInfo('tag', e)}
          />
          <FormInput
            isLabel
            className='detail-input'
            label={"Notes"}
            placeholder={'Notes'}
            value={addInfo.notes}
            onChange={e => onChangeAddInfo('notes', e)}
          />
          <FormInput
            isLabel
            className='detail-input'
            label={"Tools & Equipment's Needed"}
            placeholder={'Exp: Blender , Pot, Pan....'}
            value={addInfo.tools}
            onChange={e => onChangeAddInfo('tools', e)}
          />
          <FormInput
            isLabel
            className='detail-input'
            label={"About"}
            placeholder={'About'}
            value={addInfo.about}
            onChange={e => onChangeAddInfo('tools', e)}
          />
          <ContinueBtn
            className='done-btn'
            btnText='Done'
          />
        </div>
      </div>
    </div>
  );
}
