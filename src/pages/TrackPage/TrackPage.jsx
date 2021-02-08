import { useState } from "react";
import { useHistory } from "react-router-dom"
import CustomButton from "../../components/CustomButton"
import "./TrackPage.css"

const TrackPage = () => {
    const [order, setOrder] = useState("")
    const history = useHistory();

    const handleOrderChange = (e) => {
        let id = e.target.value;
        setOrder(id)
    }

    const handleTrack = (e) => {
        e.preventDefault();
        history.push(`/orden/${order}`)
    }

    return (
        <div className="tracking-container">
            <h1>SEGUIMIENTO DEL PEDIDO</h1>
            <form className="tracking-form" onSubmit={handleTrack}>
                <input type="text" className="tracking-input" placeholder="Código del pedido" onChange={handleOrderChange} />
                <CustomButton buttontxt="ENVIAR" />
            </form>

        </div>
    )
}

export default TrackPage