import './carrito.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ItemCart from './ItemCart'
import { useCartContext } from '../../../context/CartContext';



function Carrito() {

    const {cart,totalPrice,clearCart} = useCartContext()
    
    return(

        <div container-carrito>
            <header>
                <h1>Carrito</h1>
                <button onClick={clearCart}><FontAwesomeIcon icon={faTrash}/></button>
            </header>
            <div className='container-productos'>
                <div className='container-detail-cart'>
                    <h1>item </h1>
                    <h1>Cantidad</h1>
                    <h1>Precio</h1>
                </div>
                <ItemCart products={cart}/>
            </div>
            <div className='container-info-compra'>
                <div className='container-total'>
                    <h1>TOTAL:</h1>
                    <span>{totalPrice(cart)}</span>
                </div>
                <div className='container-comprar'>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito