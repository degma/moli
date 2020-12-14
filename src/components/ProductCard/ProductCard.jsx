
import { useEffect, useState } from 'react'
import ItemQuantity from '../ItemQuantity'
import AddCartButton from '../AddCartButton'
import './ProductCard.css'

const ProductCard = ({ name, description, price }) => {
    let [quantity, setQuantity] = useState(0)
    function handleChange(a) {
        if (a==="m"){
            if(quantity>0){
                setQuantity(quantity--)
                console.log(quantity)
            }
        }
        if(a==="p"){
            setQuantity(quantity++)
            console.log(quantity)
        }
    }
    useEffect(()=> console.log(quantity),[quantity])
    return (
        <div className="product-card">
            <div className="card-image"></div>
            <div className="product-description">
                <h1>{name}</h1>
                <p>{description}</p>
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