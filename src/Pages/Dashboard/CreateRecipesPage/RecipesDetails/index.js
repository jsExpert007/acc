import React from 'react';
import { DropDownSelect, MultiFormInput } from 'src/Components';
import './style.scss';

export default function RecipesDetails({
  subCategories,
  recipesInfo,
  onChangeRecipes,
}) {

  const recipeTypeName = subCategories.find((e) => e.id === recipesInfo.recipe_type_id)?.name || "";

  return (
    <div className="recipes-details-component">
      <div className="container recipes-details-container">
        <DropDownSelect 
          label={'Recipe Type'}
          dropListInfo={subCategories}
          value={recipeTypeName}
          onSelect={e => onChangeRecipes('recipe_type_id', e.id)}
        />
        <MultiFormInput
          label={'Ingredients'}
          className={'ingredients-input'}
          placeholder={'Write Ingredients here...........'}
          value={recipesInfo.ingredients}
          onChange={e => onChangeRecipes('ingredients', e)}
        />
        <MultiFormInput
          label={'SubTitles'}
          placeholder={'Exp: Rice ≠ Quinoa'}
          value={recipesInfo.subtitles}
          onChange={e => onChangeRecipes('subtitles', e)}
        />
        <MultiFormInput
          label={'Steps'}
          className={'steps-input'}
          placeholder={'Write Steps here...........'}
          value={recipesInfo.steps}
          onChange={e => onChangeRecipes('steps', e)}
        />
        <MultiFormInput
          label={'About'}
          placeholder={'about'}
          value={recipesInfo.about}
          onChange={e => onChangeRecipes('about', e)}
        />
        <MultiFormInput
          label={'Nutrition '}
          placeholder={'Calories if you know can fill out if not system will auto fill.'}
          value={recipesInfo.nutrition}
          onChange={e => onChangeRecipes('nutrition', e)}
        />
        <MultiFormInput
          label={'Tag'}
          placeholder={'Exp: Chicken , mild, healthy, etc'}
          value={recipesInfo.tag}
          onChange={e => onChangeRecipes('tag', e)}
        />
        <MultiFormInput
          label={"Exp: Blender , Pot, Pan...."}
          placeholder={'Write Steps here...........'}
          value={recipesInfo.tools}
          onChange={e => onChangeRecipes('tools', e)}
        />
        <MultiFormInput
          label={'Notes'}
          placeholder={'notes'}
          value={recipesInfo.notes}
          onChange={e => onChangeRecipes('notes', e)}
        />
      </div>
    </div>
  );
}
