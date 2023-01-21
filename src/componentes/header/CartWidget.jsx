import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import "./style.css"

function CartWidget (){

    const{totalProducts,cart} = useCartContext()

    return(
        <div className=' containerCarrito'>
            <Link to="/carrito" className='iconCarrito'>< FontAwesomeIcon icon={faCartShopping} style={{fontSize:"28px",marginTop:"10px",color:"white"}} /> </Link>
            <Nav.Link style={{fontSize:"25px",backgroundColor:"grey",borderRadius:"50%"}}>{totalProducts(cart)}</Nav.Link>
        </div>
    )
}
export default CartWidget