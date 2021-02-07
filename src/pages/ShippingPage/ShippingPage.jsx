import Pilar from "../../assets/pilar.png"

import "./ShippingPage.css"

const ShippingPage = () => {
    return (
        <div className="shipping-container">
            <h1>Zonas de Envío</h1>
            <div className="shipping-content">
                <img src={Pilar} className="shipping-mapa" alt="Mapa del Partido de Pilar" />
                <p>Hacemos envíos en Pilar y alrededores. Por favor hace tu pedido con anticipación! </p>
            </div>
        </div>
    )
}

export default ShippingPage