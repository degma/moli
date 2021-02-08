
import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/moli.png'
import CartWidget from '../../components/CartWidget'
import { Link } from 'react-router-dom'
import MENU_ITEMS from '../../utils/main-menu'
import './Navbar.css'
import { Store } from '../../store'
import Topbar from '../../components/Topbar/'

function Navbar() {
    const [data] = useContext(Store)
    const [menu, setMenu] = useState([])
    const location = useLocation()


    useEffect(() => {
        const getMenu = new Promise((resolve, reject) => {
            setTimeout(() => resolve(MENU_ITEMS))
        })
        getMenu.then(res => setMenu(res))
    }, [])

    return (
        <header className="sticky">
            <Topbar />
            <div className="navbar">
                <div className="menu">
                    <ul >
                        {
                            menu.map((item) => <li key={item.name}><Link className={`menu-item ${item.url === location.pathname ? 'active' : ''}`} to={item.url} >{item.name}</Link></li>)
                        }
                    </ul>
                </div>
                <Link to="/"><img className="logo" src={logo} alt="MOLI SÁNDWICHES DE MIGA Y TORTAS" /></Link>
                <div className="navbar-cart-icon">
                    <CartWidget value={data.cart.itemsQty} total={data.cart.total} />
                </div>
            </div>
        </header>
    )
}

export default Navbar