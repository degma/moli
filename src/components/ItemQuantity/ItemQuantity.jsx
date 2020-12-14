
import './ItemQuantity.css'
import Minus from '../../assets/minus.svg'
import Plus from '../../assets/plus.svg'

const ItemQuantity = ({ value = 0, onChange }) => {
    
    function handleChange(e) {
        return onChange(e)
    } 

    return (
        <div className="item-quantity-container">
            <button className="add-remove-buttons" onClick={() => handleChange("m")}>
                <img className="add-remove-icons" src={Minus} />
            </button>
            <p>{value}</p>
            <button className="add-remove-buttons" onClick={() => handleChange("p")}>
                <img className="add-remove-icons" src={Plus} />
            </button>
        </div>
    )
}

export default ItemQuantity