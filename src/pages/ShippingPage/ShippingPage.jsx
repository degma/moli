import Pilar from "../../assets/pilar.png"

import "./ShippingPage.css"

const ShippingPage = () => {
    return (
        <div className="shipping-container">
            <h1>Zonas de Envío</h1>
            <div>
                <img src={Pilar} className="shipping-mapa" />
            </div>
        </div>
    )
}

export default ShippingPage