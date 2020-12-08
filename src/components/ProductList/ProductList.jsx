

import './ProductList.css'

const ProductList = ({ title, children }) => (
    <div className="product-list-container">
        <h1>{title}</h1>
        <div className="product-card-list">
            {children}
        </div>
    </div>
)

export default ProductList