import { Outlet } from 'react-router-dom'
import React from 'react';

import { Container } from '@mui/material';

import Navbar from 'components/Navbar';
import PageTitle from 'components/PageTitle';

interface LayoutProps {
  title: string
}

const Layout = ({title}: LayoutProps) => {
  return (
    <React.Fragment>
      <Navbar/>
      <PageTitle title={title} />
      <Container component="main" maxWidth="lg" sx={{ mt: 2 }} >
        <Outlet />
      </Container>
    </React.Fragment>
  )
}

export default Layout
