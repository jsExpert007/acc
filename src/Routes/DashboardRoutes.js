import { Routes, Route } from 'react-router-dom';
import { Header, } from 'src/Components';
import {
  DashboardHomePage,
  RecipesPage,
  AddRecipesPage,
  FoodPornPage,
  MemberFeedPage,
  FoodStoragePage,

  PolicyPage,
  ProfilePage,
} from 'src/Pages';


function DashboardRoutes() {
  return (
    <div>
      <Header isDashboard />
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<DashboardHomePage />} />
          <Route exact path="/recipes" element={<RecipesPage />} />
          <Route exact path="/add-recipes/add_id/:add_id" element={<AddRecipesPage />} />
          <Route exact path="/food-porn" element={<FoodPornPage />} />
          <Route exact path="/member-feed" element={<MemberFeedPage />} />
          <Route exact path="/food-storage" element={<FoodStoragePage />} />

          <Route exact path="/privacy-policy" element={<PolicyPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />

        </Routes>
      </div>
    </div>
  );
}

export default DashboardRoutes;
