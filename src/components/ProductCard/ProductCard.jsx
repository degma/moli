
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemQuantity from '../ItemQuantity'
import AddCartButton from '../AddCartButton'
import './ProductCard.css'


const ProductCard = ({ name, description, price, picture, url, pictureUrl }) => {
    let [quantity, setQuantity] = useState(0)

    function handleChange(a) {
        if (a === "m") {
            setQuantity(quantity - 1)
        }
        if (a === "p") {
            setQuantity(quantity + 1)
        }
    }
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
                {/* <p className="product-description">{description}</p> */}
                <h2 className="product-card-price">${price}</h2>
                <footer className="footer-buttons">
                    <AddCartButton buttontxt="AGREGAR" />
                    <ItemQuantity onChange={handleChange} value={quantity} />
                </footer>
            </div>
        </div>
    )
}
export default ProductCard