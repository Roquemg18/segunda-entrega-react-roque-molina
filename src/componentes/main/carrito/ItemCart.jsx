import React from 'react'
import { useCartContext } from '../../../context/CartContext'
import './carrito.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ItemCart = ({products}) => {

    const {removeProduct}=useCartContext()
    
    return (
        products.map((product)=>{
            return(
            <div className='container-cart-card'>
                <div className='container-img'>
                    <img src={product.logo} alt={product.nombre} />
                </div>
                <div className='info-card'>
                    <div className='container-nombre'>
                        <h3>{product.nombre}</h3>
                    </div>
                    <h3 className='cantidad'>{product.quantity}</h3>
                    <h3 className='precio'> ${product.precio * product.quantity}</h3>
                    <button onClick={()=>removeProduct()}><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></button>
                </div>
            </div>
            )
            
        })
            

    )
}
export default ItemCart