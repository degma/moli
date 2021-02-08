import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../../components/CustomButton'
import { getFirestore } from '../../firebase'
import firebase from 'firebase/app'
import { Store } from '../../store'
import './Checkout.css'

const CheckoutPage = () => {
    const history = useHistory()
    const db = getFirestore()
    const [data, setData] = useContext(Store)
    const [confirmed, setConfirmed] = useState(false)
    const [orderId, setOrderId] = useState("")
    const initialFormState = {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        shipping: "",
        address: "",
        payment: "",
        creditCard: "",
        ccName: "",
        ccCVC: "",
        ccExp: ""

    }
    const [formData, setFormData] = useState(initialFormState)

    let newOrder = {
        customer: formData,
        items: data.cart.items,
        total: data.cart.items.reduce((acc, item) => acc + (item.quantity * item.price), 0),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        shipping: {
            method: formData.shipping,
            address: formData.address
        },
        payment: {
            method: formData.payment,
            creditCard: formData.creditCard,
            ccName: formData.ccName,
            ccCVC: formData.ccCVC,
            ccExp: formData.ccExp
        },
        status: "new"
    }


    const handleChangeInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCheckout = (e) => {
        e.preventDefault()
        if (data.cart.itemsQty === 0) {
            return history.push('/carrito')
        }
        db.collection('orders')
            .add(newOrder)
            .then(({ id }) => {
                setOrderId(id)
                setConfirmed(true)
                setFormData(initialFormState)
                setData({
                    ...data,
                    cart: {
                        ...data.cart,
                        total: 0,
                        itemsQty: 0,
                        items: []
                    }
                })
            })
            .catch(e => console.log(e))

    }


    return (
        <div className="checkout-container">

            { !confirmed ?
                (
                    <div>

                        <h1>Checkout</h1>
                        <div className="checkout-details">
                            <div className="checkout-form">
                                <form className="checkout-form" onSubmit={handleCheckout}>
                                    <h3>Información de contacto:</h3>
                                    <input name="name" type="text" value={formData.name} onChange={handleChangeInput} placeholder="Nombre" required />
                                    <input name="lastName" type="text" value={formData.lastName} onChange={handleChangeInput} placeholder="Apellido" required />
                                    <input name="email" type="email" value={formData.email} onChange={handleChangeInput} placeholder="Email" required />
                                    <input name="phone" type="text" value={formData.phone} onChange={handleChangeInput} placeholder="Teléfono" required />
                                    <h3>Forma de Entrega:</h3>
                                    <select name="shipping" onChange={handleChangeInput} required>
                                        <option value="" de>Seleccione forma de Entrega</option>
                                        <option value="retiro" >Retiro</option>
                                        <option value="envio">Envío a Domicilio</option>
                                    </select>
                                    {formData.shipping === "envio" ?
                                        (
                                            <>
                                                <input name="address" type="text" value={formData.address} onChange={handleChangeInput} placeholder="Dirección" required={formData.shipping === "envio" ? true : false} />
                                            </>
                                        ) :
                                        ("")}
                                    <h3>Método de Pago:</h3>
                                    <select name="payment" onChange={handleChangeInput} required>
                                        <option value="">Seleccione forma de Pago</option>
                                        <option value="efectivo">Efectivo</option>
                                        <option value="tarjeta">Tarjeta de Crédito</option>
                                    </select>
                                    {formData.payment === "tarjeta" ?
                                        (
                                            <>
                                                <label>Ingrese los 16 dígitos de la tarjeta:</label>
                                                <input name="creditCard" type="text" inputmode="numeric" pattern="[0-9\s]{13,19}" value={formData.creditCard} onChange={handleChangeInput} required={formData.payment === "tarjeta" ? true : false} placeholder="Número de la tarjeta" />
                                                <label>Ingrese el Nombre tal cual se encuentra en la tarjeta:</label>
                                                <input name="ccName" type="text" value={formData.ccName} onChange={handleChangeInput} required={formData.payment === "tarjeta" ? true : false} placeholder="Nombre y Apellido" />
                                                <label>Ingrese los 3 digitos del reverso de su tarjeta:</label>
                                                <input name="ccCVC" type="password" value={formData.ccCVC} inputmode="numeric" pattern="[0-9\s]{3}" onChange={handleChangeInput} required={formData.payment === "tarjeta" ? true : false} placeholder="Código" />
                                                <label>Ingrese fecha de vencimiento con el formato MM/AA:</label>
                                                <input name="ccExp" type="text" pattern="([0-9]{2}[/]?){2}" value={formData.ccExp} onChange={handleChangeInput} required={formData.payment === "tarjeta" ? true : false} placeholder="Vencimiento" />

                                            </>
                                        ) :
                                        ("")
                                    }
                                    <CustomButton buttontxt="FINALIZAR COMPRA" />
                                </form>
                            </div>
                            <div className="checkout-items">
                                <h3>Detalle de la orden:</h3>
                                {data.cart.items.map(item => <p key={item.id}>{item.quantity} x {item.name}: $ {item.quantity * item.price}</p>)}
                                <h1>TOTAL: ${data.cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</h1>
                            </div>
                        </div>

                    </div>
                )
                :
                (
                    <div className="checkout-confirmed">
                        <h1>¡Orden CONFIRMADA!</h1>
                        <p> Tu código de pedido es:</p>
                        <h2>{orderId}</h2>
                        <CustomButton buttontxt="CONSULTAR ESTADO" handleClick={() => history.push(`/orden/${orderId}`)} />
                    </div>
                )
            }
        </div>
    )
}


export default CheckoutPage