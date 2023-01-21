import { Button } from 'react-bootstrap';
import './style.css';
import { useCartContext } from '../../../../context/CartContext';
import Contador from './Contador';
import { useState } from 'react';

function ItemDetail ({item}){
    const {addProduct} = useCartContext()
    const [quantity, setQuatity]=useState(1)


    const handleAdd = (cantidad)=>{
        setQuatity(cantidad)
    }


    const onAdd = ()=>{
        addProduct(item,quantity)
    }

    return(
        <div className="containerDetail">
            <div className='detailImg'>
                <img src={item.logo} alt="" />
            </div>
            <div className='detailInfo'>
                <h1>{item.nombre}</h1>
                <p>{item.nombre}</p>
                <span>${item.precio}</span>
                <Contador handleAdd={handleAdd}/>

                <Button className='agregarCarrito' onClick={onAdd}>Agregar al carrito</Button>
                
            </div>
            
        </div>
    )
}

export default ItemDetail