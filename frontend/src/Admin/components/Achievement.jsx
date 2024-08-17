import React from "react";
import { Button, Card, CardContent, styled, Typography, Box } from "@mui/material";

// Styled components for images
const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achievement = () => {
  return (
    <Card sx={{ position: "relative", bgcolor: "#242B2E", color: "white", overflow: "visible" }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography variant="h6" sx={{ letterSpacing: ".25px", mb: 1 }}>
            One For All
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Congratulations🎉...
          </Typography>
          <Typography variant="h5" sx={{ my: 2 }}>
            200.5k
          </Typography>
          <Button size="small" variant="contained" sx={{ borderRadius: "20px" }}>
            View Sales
          </Button>
        </Box>
        <TriangleImg src="https://ecommerce-codewithzosh.vercel.app/images/misc/triangle-dark.png" alt="Triangle Decoration" />
        <TrophyImg src="https://media.istockphoto.com/id/1168757141/vector/gold-trophy-with-the-name-plate-of-the-winner-of-the-competition.jpg?s=612x612&w=0&k=20&c=ljsP4p0yuJnh4f5jE2VwXfjs96CC0x4zj8CHUoMo39E=" alt="Trophy" />
      </CardContent>
    </Card>
  );
};

export default Achievement;
