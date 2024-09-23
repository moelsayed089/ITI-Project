
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import Layout from './page/Layout';
import Products from './page/Products';
import ProductDetails from './page/ProductDetails';
import About from './page/About';
import ProductCrud from './page/ProductCrud';
import Productdetailscrud from './page/productdetailscrud';

function App() {
  return (
    <>
    
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path='about'  element={<About />} />
          <Route path="productcrud" element={<ProductCrud />} />
          <Route path="product" element={<Products />} />
          <Route path="productdetails/:id" element={<ProductDetails />} />
          <Route path="productdetailscrud/:id" element={<Productdetailscrud />} />
      </Route>



      <Route path="login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
