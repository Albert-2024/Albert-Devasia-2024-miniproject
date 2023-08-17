import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Error from './components/Auth/Error';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
       <Route path='/' element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path ='*' element={<Error />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

