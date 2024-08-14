import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../customer/components/nav/Navigation'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import OrderDetails from '../customer/components/Order/OrderDetails'
import Order from '../customer/components/Order/Order'
import Products from '../customer/components/Products/Products'


const CustomerRouter = () => {
 return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Products/>}></Route>
            <Route path='/product/:productID' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderID' element={<OrderDetails/>}></Route>
            
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
 )
}

export default CustomerRouter
