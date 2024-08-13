import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react';

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Box>
            <Avatar className="text-white mb-16" sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={11}>
          <div className="space-y-2 ml-3">
            <div>
              <p className="flex font-semibold text-lg">Rahul</p>
              <p className="flex opacity-70 text-sm">April 4, 2023</p>
            </div>
            <div className='flex'>

            <Rating value={3.5} name="half-rating" readOnly precision={0.5} />
            </div>
            <p className="flex mt-2 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
