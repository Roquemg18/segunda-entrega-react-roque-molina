import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "./style.css"

function CartWidget (){
    return(
        <div className=' containerCarrito'>
            <Link to="/carrito" className='iconCarrito'>< FontAwesomeIcon icon={faCartShopping} style={{fontSize:"28px",marginTop:"10px",color:"white"}} /> </Link>
            <Nav.Link style={{fontSize:"25px",backgroundColor:"grey",borderRadius:"50%"}}>1</Nav.Link>
        </div>
    )
}
export default CartWidget