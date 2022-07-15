import React from 'react';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/Signin/Signin';
import Slack from '../pages/Slack/Slack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={ } /> */}
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='slack' element={<Slack />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
