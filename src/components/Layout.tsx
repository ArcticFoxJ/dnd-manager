import { Outlet } from 'react-router-dom'
import React from 'react';

import { Container } from '@mui/material';

import Navbar from 'components/Navbar';

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Container component="main" maxWidth="lg" sx={{ mt: 2 }} >
          <Outlet />
      </Container>
    </React.Fragment>
  )
}

export default Layout
