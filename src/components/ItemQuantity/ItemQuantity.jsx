
import './ItemQuantity.css'
import Minus from '../../assets/minus.svg'
import Plus from '../../assets/plus.svg'

const ItemQuantity = ({ value = 0, onChange }) => {
    
    function handleChange(e) {
        return onChange(e)
    } 

    return (
        <div className="item-quantity-container">
            <button className="add-remove-buttons" disabled={ value === 0 } onClick={() => handleChange("m")}>
                <img className="add-remove-icons" src={Minus} />
            </button>
            <p className="quantity-value">{value}</p>
            <button className="add-remove-buttons" disabled={ value === 30 } onClick={() => handleChange("p")}>
                <img className="add-remove-icons" src={Plus} />
            </button>
        </div>
    )
}

export default ItemQuantity