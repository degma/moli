import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AddCartButton from '../../components/AddCartButton'
import ItemQuantity from '../../components/ItemQuantity'
import { Store } from '../../store'

import "./CartPage.css"

const CartPage = () => {
    const [data, setData] = useContext(Store)
    const history = useHistory()

    function removeItem(item) {
        const filteredItems = data.cart.items.filter(e => e.id !== item.id)
        setData({
            ...data,
            cart: {
                ...data.cart,
                itemsQty: data.cart.itemsQty - item.quantity,
                items: [
                    ...filteredItems
                ]
            }
        })
    }

    function removeCart() {
        setData({
            ...data,
            cart: {
                ...data.cart,
                itemsQty: 0,
                items: []
            }
        })
    }

    function handleChange(action, item) {
        const changedItem = item

        if (item.quantity === 1 && action === "m") {
            removeItem(item)
        } else {
            const qty = (action === "m" ? changedItem.quantity - 1 : changedItem.quantity + 1)
            console.log(qty)
            changedItem.quantity = qty
            const filteredItems = data.cart.items.filter(e => e.id !== changedItem.id)
            const orderedItems = [...filteredItems, changedItem].sort()
            setData({
                ...data,
                cart: {
                    ...data.cart,
                    itemsQty: data.cart.itemsQty + (action === "m" ? -1 : 1),
                    items: orderedItems
                }
            })
        }



    }


    return (
        <div>
            { data.cart.items.length ? (
                <div className="cart-container">
                    <table className="cart-table">
                        <thead className="cart-table-header">
                            <tr>
                                <th className="cart-product-thumbnail"></th>
                                <th className="cart-product-name">Producto</th>
                                <th className="cart-product-price">Precio</th>
                                <th className="cart-product-quantity">Cantidad</th>
                                <th className="cart-product-total">Total</th>
                                <th className="cart-product-remove"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.cart.items.sort().map(item => (
                                    <tr className="cart-prods-row">
                                        <td className="cart-product-thumbnail">
                                            <img className="cart-product-picture" src={item.pictureUrl} />
                                        </td>
                                        <td className="cart-product-name">{item.name}</td>
                                        <td className="cart-product-price">$ {item.price}</td>
                                        <td className="cart-product-quantity">
                                            <ItemQuantity value={item.quantity} onChange={(e) => handleChange(e, item)} />
                                        </td>
                                        <td className="cart-product-total">$ {item.quantity * item.price}</td>
                                        <td className="cart-product-remove">
                                            <AddCartButton buttontxt="Eliminar" handleClick={() => removeItem(item)} />
                                        </td>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>

                    <div className="cart-prods-footer-row">
                        <AddCartButton buttontxt="BORRAR CARRITO" handleClick={removeCart} />
                        <h1>TOTAL: $ {data.cart.items.reduce((acc, i) => acc + i.price * i.quantity, 0)}</h1>
                    </div>
                </div>
            ) :
                (
                    <div className="cart-no-prods">
                        <h1> NO HAY PRODUCTOS </h1>
                        <p> Antes de finalizar la compras tenes que agregar productos.</p>
                        <AddCartButton buttontxt="CONTINUAR NAVEGANDO" handleClick={() => history.push('/')} />
                    </div>
                )
            }
        </div>
    )
}

export default CartPage