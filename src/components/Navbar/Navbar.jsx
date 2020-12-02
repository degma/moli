import React from 'react'
import logo from '../../assets/moli.svg'
import './NavBar.css'

function NavBar() { 

    return (
    <div className="navbar">
        <img className="logo" src={logo} alt="Logo MOLI SÁNDWICHES DE MIGA Y TORTAS"/>
        <ul className="menu">
            <li><a href="home">INICIO</a></li>
            <li><a href="productos">PRODUCTOS</a></li>
            <li><a href="catering">CATERING</a></li>
            <li><a href="contacto">CONTACTO</a></li>
        </ul>
    </div>
)}

export default NavBar