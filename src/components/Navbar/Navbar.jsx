import React from 'react'
import logo from '../../assets/moli.svg'
import CartWidget from '../CartWidget'
import './Navbar.css'

function Navbar() {

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo MOLI SÁNDWICHES DE MIGA Y TORTAS" />
            <div className="menu">
                <ul >
                    <li><a href="productos">Productos</a></li>
                    <li><a href="catering">Catering</a></li>
                    <li><a href="contacto">Zonas de Envío</a></li>
                </ul>
            </div>
            <CartWidget value="2" total="980.00"/>
        </div>
    )
}

export default Navbar