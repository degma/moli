import Typewriter from 'typewriter-effect';
import "./Topbar.css"
const Topbar = () => {


    return (
        <div className="top-bar">
            <Typewriter
                options={{
                    strings: ['¡Armá tu pedido ahora y recibilo en tu casa!', 'Los mejores Sandwiches de miga de Zona Norte!'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}

export default Topbar