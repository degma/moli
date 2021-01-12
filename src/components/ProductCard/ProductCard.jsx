
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ItemQuantity from '../ItemQuantity'
import AddCartButton from '../AddCartButton'
import './ProductCard.css'


const ProductCard = ({ name, description, price, url, pictureUrl, handleAddCart }) => {
    const [quantity, setQuantity] = useState(0)
    let history = useHistory()

    return (
        <div className="product-card">
            <Link to={`/productos/${url}`} >
                <div className="card-image">
                    <img src={pictureUrl} className="product-picture" />
                </div>
            </Link>
            <div className="product-details">
                <Link to={`/productos/${url}`} >
                    <h1 className="product-card-title">{name}</h1>
                </Link>
                <h2 className="product-card-price">${price}</h2>
                <footer className="footer-buttons">
                    <AddCartButton buttontxt="COMPRAR" handleClick={() => history.push(`/productos/${url}`)} />
                </footer>
            </div>
        </div>
    )
}
export default ProductCard