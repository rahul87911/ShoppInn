
import './App.css';
import Navigation from './customer/components/nav/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Products from './customer/components/Products/Products';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
    <Navigation/>
   <div>
    {/* <HomePage/>  */}
     {/* <Products/> */}
     {/* <ProductDetails/> */}
     {/* <Cart/> */}
     {/* <Checkout /> */}
   </div>
   <Footer/>
    </div>
  );
}

export default App;
