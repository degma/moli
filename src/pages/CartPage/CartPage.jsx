import { useContext } from 'react'
import { Store } from '../../store'

import "./CartPage.css"

const CartPage = () => {
    const [data, setData] = useContext(Store)
    return (
        <div>
            <h1 >CARRITO DE COMPRAS</h1>

            <ul>
                {data.cart.items.map(e => <li>{e.quantity} - {e.name}</li>)}
            </ul>
        </div>
    )
}

export default CartPage