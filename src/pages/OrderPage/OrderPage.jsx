import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase'
import Stepper from 'react-stepper-horizontal'
import OrderItems from "../../components/OrderItems";

import "./OrderPage.css"


const steps = {
    "new": 0,
    "in_progress": 1,
    "in_delivery": 2,
    "delivered": 3
}

const OrderPage = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        const db = getFirestore()
        db.collection("orders")
            .doc(orderId)
            .onSnapshot((doc) => {
                setOrder(doc.data())
                setIsLoading(false)
            })


    }, []);

    if (isLoading) {
        return <p>Cargando...</p>
    }

    return (
        <div>

            {
                order ?
                    (
                        <div className="order-main-container">
                            <h2>Detalle del Pedido <span>{orderId}</span></h2>
                            <Stepper steps={[{ title: 'Recibido' }, { title: 'En preparación' }, { title: 'En camino' }, { title: 'Entregado' }]} activeStep={steps[order.status]} />
                            <hr />
                            <div className="order-container">
                                <div className="order-customer">
                                    <h3>Cliente</h3>
                                    <p>{order.customer.lastName}, {order.customer.name}</p>
                                    {order.shipping === 'envio' ?
                                        (
                                            <>
                                                <h3>Dirección</h3>
                                                <p>{order.address}</p>
                                            </>
                                        ) :
                                        (
                                            ""
                                        )}
                                    <h3>Método de Pago</h3>
                                    <p>{order.payment.method}</p>
                                    <h3>Forma de Envío</h3>
                                    <p>{order.shipping.method}</p>
                                    <h2>Total: <span>${order.total}</span></h2>
                                </div>
                                <div className="order-details">
                                    <h3>Productos</h3>
                                    <OrderItems items={order.items} />
                                </div>

                            </div>
                        </div>
                    ) :
                    (
                        <h1>¡ORDEN INEXISTENTE!</h1>
                    )
            }


        </div>
    )
}

export default OrderPage