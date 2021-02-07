import AddCartButton from "../../components/AddCartButton"
import "./ContactPage.css"
import EmailIcon from "../../assets/email.svg"
import WAIcon from "../../assets/whatsapp.svg"


const ContactPage = () => {
    return (
        <div className="contact-container">
            <h1>Contacto</h1>
            <div className="contact-container-content">
                <div className="contact-container-left">
                    <p>
                        <img src={WAIcon} alt="Whatsapp" /> 5491153862223
                    </p>
                    <p>
                        <img src={EmailIcon} alt="Email" /> moli.pilar@gmail.com
                    </p>
                </div>
                <div className="contact-container-form">
                    <h2>Contactanos</h2>
                    <form>
                        <input placeholder="Nombre" />
                        <input placeholder="Email" />
                        <input placeholder="Mensaje" className="message-box" />
                    </form>
                    <AddCartButton buttontxt="ENVIAR" />
                </div>
            </div>
        </div>
    )
}


export default ContactPage