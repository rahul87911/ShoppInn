import { Grid } from '@mui/material'
import React from 'react'
import Achievement from './Achievement'

const AdminDashboard = () => {
  return (
    <div className=''>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Achievement/>
        </Grid>
      </Grid>

    </div>
  )
}

export default AdminDashboard