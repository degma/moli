
import ProductCard from '../../components/ProductCard'
import Triple from '../../assets/img/triple.jpg'
import './ProductList.css'


const ProductList = ({ title }) => (
    <div className="product-list-container">
        <h1>{title}</h1>
        <div className="product-card-list">
            <ProductCard  name="Sandwiches de Miga Tradicionales" description="Descripción" price="100" picture={Triple}/>
            <ProductCard  name="Sandwiches de Miga Tradicionales" description="Descripción" price="100" picture={Triple}/>
            <ProductCard  name="Sandwiches de Miga Tradicionales" description="Descripción" price="100" picture={Triple}/>
            <ProductCard  name="Sandwiches de Miga Tradicionales" description="Descripción" price="100" picture={Triple}/>
            
        </div>
    </div>
)

export default ProductList