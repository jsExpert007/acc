import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader'
import { EventEmitter } from 'src/Utils/Events';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { LandingRoutes, DashboardRoutes } from 'src/Routes';
import {
  Sidebar,
  NoteModal,
} from 'src/Components';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const override = {
  position: 'absolute',
  top: '50%',
  left: '50%',
};

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  EventEmitter.subscribe('isLoading', (event) => setLoading(event));

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route exact path="/*" element={<LandingRoutes />} />
            <Route exact path="/dashboard/*" element={<DashboardRoutes />} />
          </Routes>
        </div>
        <NoteModal />
        <div className={loading ? "overlay-loader" : "d-none"}>
          <BeatLoader
            cssOverride={override}
            size={30}
            color={"#1BD0A5"}
            loading={loading}
          />
        </div>
        <NotificationContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
