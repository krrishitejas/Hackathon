import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserRegistration from './components/UserRegistration';
import LoginForm from './components/LoginForm';
import IdentityDocumentUpload from './components/IdentityDocumentUpload';
import React from 'react';
import axios from 'axios';

const api = axios.create
({
  baseURL: 'https://your-backend-api.com/api',
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <UserRegistration />
        <LoginForm />
        <IdentityDocumentUpload />
      </header>
    </div>
  );
}

export default App;

