import './carrito.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ItemCart from './ItemCart'
import { useCartContext } from '../../../context/CartContext';
import { serverTimestamp,addDoc } from 'firebase/firestore';
import {comprasCollection} from '../../../firebaseConfig'
import { toast } from "react-toastify";


function Carrito() {

    const {cart,totalPrice,clearCart,} = useCartContext()
    

    const handlCompra = () => {

        const compra = {
            usuario : {
                nombre:"cliente1",
                email:"cliente1@gmail.com"
            },
            carrito: cart,
            fecha: serverTimestamp(),
            ticket : Math.random(100)
        }
        
        const pedido = addDoc(comprasCollection, compra)

        pedido
            .then((res)=>{
                toast.success("Compra realizada")
            })
            .catch((error)=>{
                toast.error("A ocurrido un error, vuelva a intentarlo")
            })
            clearCart()
    }
 
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
                    <button  onClick={()=>{handlCompra()}}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito