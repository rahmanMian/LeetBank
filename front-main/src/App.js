import './App.css';
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
    {/* <div className="App">
      <header className="App-header">
      <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      </div>
      <AddQuestion /> */}
      <LoginPage />
    </>
  );
}

export default App;
