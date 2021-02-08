import { useState } from "react"
import { getFirestore } from "../../firebase"
import CustomButton from "../../components/CustomButton"
import EmailIcon from "../../assets/email.svg"
import WAIcon from "../../assets/whatsapp.svg"

import "./ContactPage.css"

const formInitialState = {
    name: '',
    email: '',
    message: ''
}

const ContactPage = () => {
    const [form, setForm] = useState(formInitialState)
    const [submitted, setSubmitted] = useState(false)
    const [errorForm, setErrorForm] = useState(false)
    const db = getFirestore()

    let contactForm = {
        name: form.name,
        email: form.email,
        message: form.message
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([form.name, form.email, form.message].includes("")) {
            return setErrorForm(true)
        } else {
            setErrorForm(false)
        }
        db.collection('contact')
            .add(contactForm)
            .then(({ id }) => {
                setSubmitted(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="contact-container">
            <h1>Contacto</h1>
            <div className="contact-container-content">
                <div className="contact-container-left">
                    <p>
                        <img src={WAIcon} alt="Whatsapp" /> +5491153862223
                    </p>
                    <p>
                        <img src={EmailIcon} alt="Email" /> moli.pilar@gmail.com
                    </p>
                </div>
                <div className="contact-container-form">
                    <h2>Contactanos</h2>
                    {!submitted ? (
                        <form onSubmit={handleSubmit}>
                            <input placeholder="Nombre" type="text" name="name" onChange={handleChange} required />
                            <input placeholder="Email" type="email" name="email" onChange={handleChange} required />
                            <input placeholder="Mensaje" type="text" name="message" className="message-box" onChange={handleChange} required />
                            { errorForm ?
                                (
                                    <p className="contact-form-error">Por favor complete todos los campos.</p>
                                ) :
                                (
                                    <p>""</p>
                                )
                            }
                            <CustomButton
                                buttontxt="ENVIAR"
                            />
                        </form>
                    ) : (
                            <>
                                <h3>¡Recibimos tu consulta!</h3>
                                <p>Te vamos a estar contactando a la brevedad.</p>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}


export default ContactPage