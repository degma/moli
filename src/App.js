import "./App.css";
import Navbar from "./components/Navbar/";
import Product from "./containers/Product";
import ProductList from "./containers/ProductList/";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      {/* <ProductList title="Catálogo de productos" /> */}
      <Product />
    </div>
  );
}

export default App;
