import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Seller/Login';
import Home from './components/Home';
import Register from './components/Auth/Seller/Register';
import Error from './components/Auth/Error';
import LoginU from './components/Auth/User/LoginU';
import RegisterU from './components/Auth/User/RegisterU';
import LoginD from './components/Auth/Delivery/LoginD';
import RegisterD from './components/Auth/Delivery/RegisterD';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        {/* seller route */}
            <Route path="seller/register" element={<Register />} />
            <Route path='seller/login' element={<Login />} />

        {/* Buyer route */}
            <Route path="user/register" element={<RegisterU />} />
            <Route path='user/login' element={<LoginU />} />

        {/* Delivery route */}
            <Route path="delivery/register" element={<RegisterD />} />
            <Route path='delivery/login' element={<LoginD />} />

        <Route path ='*' element={<Error />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

