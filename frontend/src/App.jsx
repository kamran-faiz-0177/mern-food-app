import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Dashboard from './Admin/AdminPage/Dashboard';
import { useSelector } from 'react-redux';
import PageNotFound from './Pages/PageNotFound';
import Cart from './Pages/Cart';


const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        {
          isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path='/signin' element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          )
        }
      </Routes>
    </BrowserRouter>
  );
};

export default App;