import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StoreIcon from "@mui/icons-material/Store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateProductForm from "../components/CreateProductForm";
import ProductsTable from "../components/ProductsTable";
import CustomersTable from "../components/CustomersTable";
import OrdersTable from "../components/OrdersTable";
import AdminDashboard from "../components/AdminDashboard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <StoreIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <PeopleIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ReceiptIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <AddCircleOutlineIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ marginTop: "auto" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (

      <div className="flex h-[100vh]">
        <CssBaseline />
        <div className="w-[15%] border border-r-gray-300 h-full">
          {drawer}
        </div>
          <div className="w-[85%]">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/admin/product/create" element={<CreateProductForm />}/>
            <Route path="/admin/products" element={<ProductsTable />} />
            <Route path="/admin/orders" element={<OrdersTable />} />
            <Route path="/admin/customers" element={<CustomersTable />} />
          </Routes>
          </div>
      </div>
  );
};

export default Admin;
