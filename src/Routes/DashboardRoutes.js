import { Routes, Route } from 'react-router-dom';
import { AuthHeader } from 'src/Components';
import {
  DashboardHomePage,
} from 'src/Pages';


function DashboardRoutes() {
  return (
    <div>
      <AuthHeader />
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<DashboardHomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardRoutes;
