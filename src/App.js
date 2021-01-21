import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
import CheckoutPage from "./pages/CheckoutPage";
import { Store } from "./store";

function App() {
  const [data, setData] = useState({
    cart: {
      total: 0,
      itemsQty: 0,
      items: [],
    },
  });
  const windowResize = (e) => {
    console.log(e);
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
  }, []);

  return (
    <Store.Provider value={[data, setData]}>
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
            <Route path="/productos/:productId?">
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
            <Route path="/checkout">
              <CheckoutPage />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Store.Provider>
  );
}

export default App;
