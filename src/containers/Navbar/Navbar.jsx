
import { useState, useEffect, useContext } from 'react'
import logo from '../../assets/moli.svg'
import CartWidget from '../../components/CartWidget'
import { Link } from 'react-router-dom'
import MENU_ITEMS from '../../utils/main-menu'
import './Navbar.css'
import { Store } from '../../store'

function Navbar() {
    const [data, setData] = useContext(Store)
    const [menu, setMenu] = useState([])

    const getMenu = new Promise((resolve, reject) => {
        setTimeout(() => resolve(MENU_ITEMS))
    })

    useEffect(() => {
        getMenu.then(res => setMenu(res))
    }, [])

    return (
        <div className="navbar">
            <Link to="/"><img className="logo" src={logo} alt="Logo MOLI SÁNDWICHES DE MIGA Y TORTAS" /></Link>
            <div className="menu">
                <ul >
                    {
                        menu.map((item)=> <li><Link key={item.name} className="menu-item" to={item.url} >{item.name}</Link></li> )
                    }
                </ul>
            </div>
            <CartWidget value={data.cart.itemsQty} total={data.cart.total} />
        </div>
    )
}

export default Navbar