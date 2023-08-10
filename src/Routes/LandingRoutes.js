import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from 'src/Components';
import {
  LandingPage,

  TermsPage,
  PolicyPage,
  FaqPage,
} from 'src/Pages';

function LandingRoutes() {
  return (
    <div>
      <Header />
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route exact path="/terms" element={<TermsPage />} />
          <Route exact path="/privacy-policy" element={<PolicyPage />} />
          <Route exact path="/faqs" element={<FaqPage />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default LandingRoutes;
