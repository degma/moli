
import "./OrderItems.css"

const OrderItems = ({items}) => {
    return (
        <div>
            {
                items.map(item => (
                    <div className="order-items-container">
                        <div className="order-items-img">
                            <img src={item.pictureUrl} alt={item.name}/>
                        </div>
                        <div className="order-items-detail">
                            <p>{item.name}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio unitario: {item.price}</p>
                        </div>
                        <div className="order-items-total">
                            <p>$ {item.price * item.quantity}</p>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}


export default OrderItems