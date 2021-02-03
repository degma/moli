import { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Breadcumbs.css"

const Breadcumbs = ({ product }) => {

    return (
        <div className="breadcumbs-container">
            { product ? (
                <p>
                    <Link to="/">Inicio</Link> / <Link to={`/categoria/${product.category}`}>{product.category.replace(/-/g, " ")}</Link> / {product.name}
                    </p>
            ) : ("")}
        </div>
    )
}

export default Breadcumbs