
import './ProductCard.css'

const ProductCard = ({ name, description, price }) => (
    <div className="product-card">
        <div className="card-image"></div>
        <div className="card-header">
            <h1>{name}</h1>
            <h2>${price}</h2>
        </div>
        <p>{description}</p>
    </div>
)

export default ProductCard