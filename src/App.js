import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import ShippingPage from "./pages/ShippingPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

function App() {
  
  const windowResize = (e)=>{
    console.log(e)
  }

  useEffect(() => {
    window.addEventListener('resize',windowResize)
  }, [])

  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/productos">
            <ProductsPage />
          </Route>
          <Route path="/productos/:productName?">
            <ProductPage />
          </Route>
          <Route path="/contacto">
            <ContactPage />
          </Route>
          <Route path="/categoria/:categoryName?">
            <CategoryPage />
          </Route>
          <Route path="/carrito">
            <CartPage />
          </Route>
          <Route path="/envios">
            <ShippingPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
