
import './AddCartButton.css'

const AddCartButton = ({ buttontxt, handleClick, primary }) => {

    return (
        <button className={`add-button ${primary ? "color-primary" : ""}`} alt="Agregar al Carrito" onClick={handleClick}>{buttontxt}</button>
    )
}

export default AddCartButton