import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import NewsFeed from './pages/NewsFeed';
import NotFound from './pages/NotFound';
import Notification from './pages/Notification';
import Signup from './pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/feed" element={<NewsFeed />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
