import { Link, useHistory } from 'react-router-dom'
import CustomButton from '../CustomButton'
import './ProductCard.css'


const ProductCard = ({ id, name, price , pictureUrl }) => {
    let history = useHistory()

    return (
        <div className="product-card">
            <Link to={`/productos/${id}`} >
                <div className="card-image">
                    <img src={pictureUrl} className="product-picture" alt={name}/>
                </div>
            </Link>
            <div className="product-details">
                <Link to={`/productos/${id}`} >
                    <h1 className="product-card-title">{name}</h1>
                </Link>
                <h2 className="product-card-price">${price}</h2>
                <footer className="footer-buttons">
                    <CustomButton buttontxt="AGREGAR AL CARRITO" handleClick={() => history.push(`/productos/${id}`)} />
                </footer>
            </div>
        </div>
    )
}
export default ProductCard