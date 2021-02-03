import { useState, useContext } from 'react'
import AddCartButton from '../../components/AddCartButton'
import { getFirestore } from '../../firebase'
import firebase from 'firebase/app'
import { Store } from '../../store'
import './Checkout.css'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    const db = getFirestore()
    const [data, setData] = useContext(Store)
    const [confirmed, setConfirmed] = useState(false)
    const [orderId, setOrderId] = useState("")
    const initialFormState = {
        name: "",
        lastName: "",
        email: "",
        phone: "",

    }
    const [formData, setFormData] = useState(initialFormState)

    const orders = db.collection("orders")

    let newOrder = {
        customer: formData,
        items: data.cart.items,
        total: data.cart.items.reduce((acc, item) => acc + (item.quantity * item.price), 0),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        shipping: formData.shipping,
        payment: formData.payment,
        status: "new"
    }


    const handleChangeInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleCheckout = (e) => {

        e.preventDefault()
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
                                    <input name="name" type="text" value={formData.name} onChange={handleChangeInput} placeholder="Nombre" />
                                    <input name="lastName" type="text" value={formData.lastName} onChange={handleChangeInput} placeholder="Apellido" />
                                    <input name="email" type="text" value={formData.email} onChange={handleChangeInput} placeholder="Email" />
                                    <input name="phone" type="text" value={formData.phone} onChange={handleChangeInput} placeholder="Teléfono" />
                                    <h3>Forma de Entrega:</h3>
                                    <select name="shipping" onChange={handleChangeInput}>
                                        <option value="" de>Seleccione forma de Entrega</option>
                                        <option value="retiro" >Retiro</option>
                                        <option value="envio">Envío a Domicilio</option>
                                    </select>
                                    {formData.shipping === "envio" ?
                                        (
                                            <>
                                            <input name="address" type="text" value={formData.address} onChange={handleChangeInput} placeholder="Dirección" />
                                            </>
                                        ) :
                                        ("")}
                                    <h3>Método de Pago:</h3>
                                    <select name="payment" onChange={handleChangeInput}>
                                        <option value="">Seleccione forma de Pago</option>
                                        <option value="efectivo">Efectivo</option>
                                        <option value="tarjeta">Tarjeta de Crédito</option>
                                    </select>
                                    <AddCartButton buttontxt="FINALIZAR COMPRA" />
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

                    </div>
                )
            }
        </div>
    )
}


export default CheckoutPage