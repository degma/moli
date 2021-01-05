
import './AddCartButton.css'

const AddCartButton = ({ buttontxt, handleClick }) => {

    return (
        <button className="add-button" alt="Agregar al Carrito" onClick={handleClick}>{buttontxt}</button>
    )
}

export default AddCartButton