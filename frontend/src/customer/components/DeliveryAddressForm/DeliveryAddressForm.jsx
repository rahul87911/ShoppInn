import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const formData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      address1: data.get('address1'),
      address2: data.get('address2'),
      city: data.get('city'),
      state: data.get('state'),
      zip: data.get('zip'),
      country: data.get('country'),
      phone: data.get('phone'),
    };

    console.log('Address:', formData);
  };

  return (
    <div>
      <Grid container spacing={4}>
        {/* Address Selection and Delivery Section */}
        <Grid item xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }} size='large' variant='contained'>
              Deliver
            </Button>
          </div>
        </Grid>

        {/* Delivery Address Form Section */}
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address Line 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address2"
                    name="address2"
                    label="Address Line 2"
                    fullWidth
                    autoComplete="shipping address-line2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: 'RGB(145 85 253)' }}
                    type="submit"
                    fullWidth
                  >
                    Save Address
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
