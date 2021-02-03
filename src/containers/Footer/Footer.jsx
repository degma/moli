import { Link } from "react-router-dom"
import Logo from "../../assets/moli.png"
import InstagramIcon from "../../assets/instagram.svg"
import FacebookIcon from "../../assets/facebook.svg"

import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left-col">
                    <img src={Logo} className="footer-logo" />
                </div>
                <div className="right-col">
                    <h4>INFORMACIÓN</h4>
                    <ul>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/envios">Zonas de Envío</Link></li>
                        <li><Link to="/orden">Seguimiento del Pedido</Link></li>
                    </ul>
                </div>
                <div className="follow-us-col">
                    <h4>SEGUINOS EN</h4>
                    <ul>
                        <li>
                            <img src={InstagramIcon} /> <img src={FacebookIcon} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-poweredby">
                <p>Sitio desarrollado por<a href="mailto:martin.degraf@gmail.com"> Martín Degraf.</a></p>
            </div>
        </div>
    )
}

export default Footer;