import { Grid, Typography, TextField, Button } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <Grid container sx={{ bgcolor: "black", color: "white", py: 5 }} className="mt-10">
        
        {/* ShopInn Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            ShopInn
          </Typography>
          <Typography variant="body2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            Careers
          </Typography>
          <Typography variant="body2" gutterBottom>
            Press & Media
          </Typography>
          <Typography variant="body2">
            Privacy Policy
          </Typography>
        </Grid>

        {/* Customer Service */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Customer Service
          </Typography>
          <Typography variant="body2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            FAQs
          </Typography>
          <Typography variant="body2" gutterBottom>
            Shipping & Returns
          </Typography>
          <Typography variant="body2">
            Order Tracking
          </Typography>
        </Grid>

        {/* Follow Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            Facebook
          </Typography>
          <Typography variant="body2" gutterBottom>
            Instagram
          </Typography>
          <Typography variant="body2" gutterBottom>
            Twitter
          </Typography>
          <Typography variant="body2">
            LinkedIn
          </Typography>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Newsletter
          </Typography>
          <Typography variant="body2" gutterBottom>
            Subscribe to get the latest news, offers, and updates.
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Your Email Address"
            fullWidth
            sx={{ bgcolor: "white", borderRadius: 1, mb: 2, height: 35 }}
            inputProps={{ style: { color: "black", fontSize: "0.875rem", padding: "8px" } }}
          />
          <Button variant="contained" sx={{ bgcolor: "#ff6600", color: "white", height: 35, fontSize: "0.875rem" }}>
            Subscribe
          </Button>
        </Grid>
        
      </Grid>
      <Grid container justifyContent="center" sx={{ bgcolor: "black", color: "gray", py: 2 }}>
        <Typography variant="body2">
          © 2024 ShopInn. All rights reserved.
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
