import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from 'src/Components';
import {
  LandingPage,
} from 'src/Pages';

function LandingRoutes() {
  return (
    <div>
      <Header />
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default LandingRoutes;
