import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AddQuestion} from './add/addQuestion.jsx';
import {LoginPage} from './login/loginPage.jsx';
import React, { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <>
   
   <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login-to-app" element={<AddQuestion />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
