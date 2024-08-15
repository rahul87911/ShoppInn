
import './App.css';
import Navigation from './customer/components/nav/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Products from './customer/components/Products/Products';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order'
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './routers/CustomerRouter';
import AdminRouter from './routers/AdminRouter';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/*' element={<CustomerRouter/>}></Route>
      <Route path='/admin/*' element={<AdminRouter/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
