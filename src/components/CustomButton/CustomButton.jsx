
import './CustomButton.css'

const CustomButton = ({ buttontxt, handleClick, primary, disabled = false }) => {

    return (
        <button disabled={disabled} className={`add-button ${primary ? "color-primary" : ""}`} alt="Agregar al Carrito" onClick={handleClick}>{buttontxt}</button>
    )
}

export default CustomButton