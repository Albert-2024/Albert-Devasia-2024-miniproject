import React, {BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Error from './pages/Error';
import Form from './components/Form';
// import SignUp from './pages/Seller/SignUp';
import SignUp from './pages/Buyer/SignUp'
import SignIn from './pages/Seller/SignIn'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user,setUser] = useState (null)
  const [reg,setReg] = useState(null)
 
  return (
    <div className="App">
      <header className="App-header">
        {/* <BrowserRouter>
        <Routes>
          <Route path='signup' element={<SignUp setUser={setReg}/>}/>
          <Route path='login' element={<SignIn setUser={setUser} />}/>
          <Route path='*' element={<Error/>}/>
        </Routes> */}
        
        {/* </BrowserRouter> */}
       <SignUp />
      </header>
    </div>
  );
}

export default App;
