import { Routes, Route } from 'react-router-dom';
import { Header, } from 'src/Components';
import {
  DashboardHomePage,
  RecipesPage
} from 'src/Pages';


function DashboardRoutes() {
  return (
    <div>
      <Header isDashboard />
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<DashboardHomePage />} />
          <Route exact path="/recipes" element={<RecipesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardRoutes;
