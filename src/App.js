import "./App.css";
import Navbar from "./components/Navbar/";
import ProductList from "./containers/ProductList/";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <ProductList title="Catálogo de productos" />
    </div>
  );
}

export default App;
