import './carrito.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function Carrito() {
    return(

        <div container-carrito>
            <header>
                <h1>Carrito</h1>
                <button><FontAwesomeIcon icon={faTrash}/></button>
            </header>
            <div className='container-productos'>
                {/* productos */}
            </div>
            <div className='container-info-compra'>
                <div className='container-total'>
                    <h1>TOTAL:</h1>
                    <span>$100</span>
                </div>
                <div className='container-comprar'>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito