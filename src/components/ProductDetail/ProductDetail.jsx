import ItemQuantity from '../ItemQuantity'
import { useState } from 'react'
import AddCartButton from '../AddCartButton'

import './ProductDetail.css'

const ProductDetail = ({ item }) => {
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
        <article className="product-detail">
            <img src="http://placehold.it/500x600" className="product-detail-picture" />
            <div className="product-info">
                <h1 className="product-detail-name">{item.name}</h1>
                <p className="product-detail-price">$ {item.price}</p>
                <p className="product-detail-description">{item.description}</p>
                <div className="product-detail-addbuttons">
                    <ItemQuantity onChange={handleChange} value={quantity} />
                    <AddCartButton buttontxt="Agregar al Carrito"/>
                </div>
            </div>
        </article>
    )
}

export default ProductDetail;