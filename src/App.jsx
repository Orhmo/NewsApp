import './index.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import TopNavBar from './components/TopNavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import News from './pages/News';
import NewsPage from './content/NewsPage';
import Categories from './layouts/categories/CategoriesSection';

function App() {
  return (
    <>
      <Router>
        <TopNavBar />
        <Logo />
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/news' exact element={<News />} />
            <Route path='/categories' exact element={<Categories />} />
            <Route path='/news/:id' element={<NewsPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
