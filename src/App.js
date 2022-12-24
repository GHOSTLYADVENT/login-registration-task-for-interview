import React, { useState } from 'react';
import './App.css';
import Register from './components/register';
import Login from './components/login';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
      <div className="App">
      {
        currentForm === 'login' ? <Login onFormChange={toggleForm} /> : <Register onFormChange={toggleForm} />
      }
      </div>
      );
}

export default App;
