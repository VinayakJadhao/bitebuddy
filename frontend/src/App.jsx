import { useState } from 'react';
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LogIn from './screens/LogIn';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle/';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import MyOrder from './screens/MyOrder';
import ProfilePage from './screens/ProfilePage';  // <-- Import ProfilePage here

import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<LogIn />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path='/Signup' element={<Signup />} />
            <Route exact path='/profile' element={<ProfilePage />} />
            <Route exact path="/myorder/profile" element={<ProfilePage />} />
            
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
