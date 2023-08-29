import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Error from './components/Auth/Error';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path='Login' element={<Login />} />
        <Route path ='*' element={<Error />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

