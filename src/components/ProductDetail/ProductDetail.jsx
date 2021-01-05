import ItemQuantity from '../ItemQuantity'
import { useState } from 'react'
import AddCartButton from '../AddCartButton'
import { useHistory } from 'react-router-dom'

import './ProductDetail.css'

const ProductDetail = ({ item }) => {
    let history = useHistory();
    let [quantity, setQuantity] = useState(0)

    function handleChange(a) {
        if (a === "m") {
            setQuantity(quantity - 1)
        }
        if (a === "p") {
            setQuantity(quantity + 1)
        }
    }

    function handleClickBuy(url){
        console.log(url)
        history.push('/carrito')
    }

    return (
        <article className="product-detail">
            <img src={item.pictureUrl} className="product-detail-picture" alt={item.name}/>
            <div className="product-info">
                <h1 className="product-detail-name">{item.name}</h1>
                <p className="product-detail-price">$ {item.price}</p>
                <p className="product-detail-description">{item.description}</p>
                <div className="product-detail-addbuttons">
                    <ItemQuantity onChange={handleChange} value={quantity} />
                    <AddCartButton buttontxt="COMPRAR" handleClick={ handleClickBuy}/>
                </div>
            </div>
        </article>
    )
}

export default ProductDetail;