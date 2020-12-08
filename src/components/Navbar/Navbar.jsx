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
                    <li><a href="home">INICIO</a></li>
                    <li><a href="productos">PRODUCTOS</a></li>
                    <li><a href="catering">CATERING</a></li>
                    <li><a href="contacto">CONTACTO</a></li>
                </ul>
            </div>
            <CartWidget value="2" />
        </div>
    )
}

export default Navbar