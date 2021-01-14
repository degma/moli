import CartIcon from '../../assets/shopping-cart.svg'
import { Link } from "react-router-dom"
import './CartWidget.css'

const CartWidget = ({ value = 0, total = 0 }) => (
    <Link to="/carrito">
        <div className="cart-widget-container">
            <div className="cart-icon-container">
                <img src={CartIcon} alt="icono del carrito" className="cart-icon" />
                {value > 0 ?
                    (<div className="items">{value}</div>)
                    :
                    ""
                }
            </div>
            {/* <div className="cart-text-and-total">
                <h4>Mi Carrito</h4>
                <p className="cart-total">${total}</p>
            </div> */}
        </div>
    </Link>

)


export default CartWidget