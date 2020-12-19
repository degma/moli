
import { useEffect, useState } from 'react'
import ItemQuantity from '../ItemQuantity'
import AddCartButton from '../AddCartButton'
import './ProductCard.css'


const ProductCard = ({ name, description, price, picture }) => {
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
            <div className="card-image">
                <img src={picture} className="product-picture" />
            </div>
            <div className="product-details">
                <h1>{name}</h1>
                <p className="product-description">{description}</p>
                <h2>${price}</h2>
                <footer className="footer-buttons">
                    <AddCartButton />
                    <ItemQuantity onChange={handleChange} value={quantity} />
                </footer>
            </div>
        </div>
    )
}
export default ProductCard