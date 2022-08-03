import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { styled } from '@mui/material';

const AppBody = styled('div')({
  display: 'flex',
  height: '100vh',
});

const Slack = () => {
  return (
    <div>
      <Header />
      <AppBody>
        <Sidebar />
      </AppBody>
    </div>
  );
};

export default Slack;
