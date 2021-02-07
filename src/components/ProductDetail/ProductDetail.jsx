import ItemQuantity from '../ItemQuantity'
import { useState, useContext, useEffect } from 'react'
import AddCartButton from '../AddCartButton'
import RemoveIcon from "../../assets/remove.svg"


import './ProductDetail.css'
import { Store } from '../../store'


const ProductDetail = ({ item }) => {

    const [quantity, setQuantity] = useState(0)
    const [data, setData] = useContext(Store)
    const itemInCart = data.cart.items.find(e => e.id === item.id)

    function handleChange(a) {
        if (a === "m") {
            setQuantity(quantity - 1)
        }
        if (a === "p") {
            setQuantity(quantity + 1)
        }
    }

    function removeFromCart() {
        console.log(item)

        if (itemInCart.quantity > 0) {
            const filteredItems = data.cart.items.filter(e => e.id !== item.id)
            console.log("filtered items", filteredItems)
            setData({
                ...data,
                cart: {
                    ...data.cart,
                    itemsQty: data.cart.itemsQty - itemInCart.quantity,
                    total: data.cart.total - (itemInCart.quantity * itemInCart.price),
                    items:
                        filteredItems

                }
            })
        }
    }

    function handleClickBuy(qty) {

        const addedItem = item

        if (qty === 0) {
            return
        }

        if (itemInCart) {
            addedItem.quantity = itemInCart.quantity + qty
            const filteredItems = data.cart.items.filter(e => e.id !== itemInCart.id)
            setData({
                ...data,
                cart: {
                    ...data.cart,
                    itemsQty: data.cart.itemsQty + qty,
                    total: data.cart.total + (qty * addedItem.price),
                    items: [
                        ...filteredItems,
                        addedItem
                    ]
                }
            })

        } else {
            addedItem.quantity = qty
            setData({
                ...data,
                cart: {
                    ...data.cart,
                    itemsQty: data.cart.itemsQty + qty,
                    total: data.cart.total + ( qty * addedItem.price),
                    items: [
                        ...data.cart.items,
                        addedItem
                    ]
                }
            })
        }
        setQuantity(0)
    }

    useEffect(() => {
        console.log(data.cart)
    })

    return (
        <article className="product-detail">
            <img src={item.pictureUrl} className="product-detail-picture" alt={item.name} />
            <div className="product-info">
                <h1 className="product-detail-name">{item.name}</h1>
                <p className="product-detail-price">$ {item.price}</p>
                <p className="product-detail-description">{item.description}</p>
                <div className="product-detail-addbuttons">
                    <ItemQuantity onChange={handleChange} value={quantity} />
                    <AddCartButton buttontxt="Agregar al Carrito" handleClick={() => handleClickBuy(quantity)} />
                </div>

                {
                    itemInCart ?
                        (<div className="product-detail-addedunits"> {itemInCart.quantity} unidad{itemInCart.quantity > 1 ? "es" : ''} en el Carrito <button onClick={removeFromCart}><img src={RemoveIcon} alt="Eliminar productos del carrito"/></button></div>)
                        :
                        ""
                }
            </div>
        </article>
    )
}

export default ProductDetail;