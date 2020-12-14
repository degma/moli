
import ProductCard from '../../components/ProductCard'
import './ProductList.css'


const ProductList = ({ title, children }) => (
    <div className="product-list-container">
        <h1>{title}</h1>
        <div className="product-card-list">
            <ProductCard  name="Sandwiches de Miga Tradicionales" description="DESC" price="100"/>
            <ProductCard  name="Sandwiches de Miga Tradicionales" description="DESC" price="100"/>
            <ProductCard  name="Sandwiches de Miga Tradicionales" description="DESC" price="100"/>
            <ProductCard  name="Sandwiches de Miga Tradicionales" description="DESC" price="100"/>
        </div>
    </div>
)

export default ProductList