import { Grid, Box } from '@mui/material';
import React from 'react';
import Achievement from './Achievement';
import MonthlyOverview from './MonthlyOverview';
import ProductsTable from './ProductsTable'

const AdminDashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Achievement />
        </Grid>

        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid>
          <ProductsTable/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminDashboard;
