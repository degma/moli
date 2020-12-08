import "./App.css";
import Navbar from "./components/Navbar/";
import ProductList from "./components/ProductList/";
import ProductCard from "./components/ProductCard/";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <ProductList title="Catálogo de productos">
        <ProductCard
          name="Sandwiches Triples Tradicionales"
          description="Sandwiches de Miga Tradicionales x 12 unidades."
          price="100"
        />
        <ProductCard
          name="Sandwiches Triples Especiales"
          description="Sandwiches de Miga Especiales x 12 unidades."
          price="200"
        />
        <ProductCard
          name="Chips y Pancitos Integrales"
          description="Chips y pancitos recien horneados x 6 unidades."
          price="200"
        />
      </ProductList>
    </div>
  );
}

export default App;
