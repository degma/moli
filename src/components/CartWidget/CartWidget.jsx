import CartIcon from '../../assets/shopping-cart.svg'
import './CartWidget.css'

const CartWidget = ({ value = 0}) => (
    <div className="cart-widget-container">
        <div className="items">{value}</div>
        <img src={CartIcon} alt="icono del carrito" className="cart-icon"/>
    </div>
)


export default CartWidget