import { Routes, Route } from 'react-router-dom';
import { Header, } from 'src/Components';
import {
  DashboardHomePage,
  RecipesPage,
  FoodPornPage,
  MemberFeedPage,
  FoodStoragePage,
} from 'src/Pages';


function DashboardRoutes() {
  return (
    <div>
      <Header isDashboard />
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<DashboardHomePage />} />
          <Route exact path="/recipes" element={<RecipesPage />} />
          <Route exact path="/food-porn" element={<FoodPornPage />} />
          <Route exact path="/member-feed" element={<MemberFeedPage />} />
          <Route exact path="/food-storage" element={<FoodStoragePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardRoutes;
