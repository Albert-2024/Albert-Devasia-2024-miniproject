import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements,
 Route, Router, RouterProvider} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreens from './screens/ProductScreens';


const route = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index={true} path="/" element={< HomeScreen />} />
    <Route path="/product/:id" element={< ProductScreens />} />
  </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={route} />

  </React.StrictMode>
);

reportWebVitals();
