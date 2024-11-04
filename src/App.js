import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader'
import { EventEmitter } from 'src/Utils/Events';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { LandingRoutes, DashboardRoutes } from 'src/Routes';
import { useDispatch } from 'react-redux';
import {
  // Sidebar,
  AllModals,
} from 'src/Components';
import { getCategories, } from 'src/Redux/Actions';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const override = {
  position: 'absolute',
  top: '50%',
  left: '50%',
};




function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  EventEmitter.subscribe('isLoading', (event) => setLoading(event));

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        {/* <Sidebar /> */}
        <div className="content">
          <Routes>
            <Route exact path="/dashboard/*" element={<DashboardRoutes />} />
            <Route exact path="/*" element={<LandingRoutes />} />
          </Routes>
        </div>
        <AllModals />
        <div className={loading ? "overlay-loader" : "d-none"}>
          <BeatLoader
            cssOverride={override}
            size={30}
            color={"#FF8000"}
            loading={loading}
          />
        </div>
        <NotificationContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
