import './style.scss';
import {
  RecipesCategory,
  FilterSearch,
  RecipesDetail,
  AllRecipes,
} from 'src/Components';

export default function RecipesPage() {

  return (
    <div className="recipes-page">
      <RecipesCategory />
      <FilterSearch
        className='filter-search'
      />
      <RecipesDetail />
      <AllRecipes />
    </div>
  );
}
