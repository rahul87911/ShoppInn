import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const menu=[
    {name: "Dashboard", path:"/admin"},
    {name: "Products", path:"/admin/products"},
    {name: "Customers", path:"/admin/customers"},
    {name: "Orders", path:"/admin/orders"},
    {name: "AddProduct", path:"/admin/product/create"},
]

const Admin = () => {
    const theme=useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);
    const navigate=useNavigate();

  return (
    <div></div>
  )
}

export default Admin