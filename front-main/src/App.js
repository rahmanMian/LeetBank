import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AddQuestion} from './add/addQuestion.jsx';
import {LoginPage} from './login/loginPage.jsx';
import { ProtectedRoutes } from './login/routes/protectedRoutes.jsx';
import { ProtectedLogin } from './login/routes/protectedLogin.jsx';
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
        <Route path="/" element={
          <ProtectedLogin>
          <LoginPage />
          </ProtectedLogin>
        } />
        <Route path="/login-to-app" element={
          <ProtectedRoutes>
           <AddQuestion />
          </ProtectedRoutes>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
