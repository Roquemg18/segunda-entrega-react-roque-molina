import React from 'react'
import { Button } from 'react-bootstrap';
import './style.css';

function ItemDetail ({item}){
    return(
        <div className="containerDetail">
            <div className='detailImg'>
                <img src={item.logo} alt="" />
            </div>
            <div className='detailInfo'>
                <h1>{item.nombre}</h1>
                <p>{item.nombre}</p>
                <span>${item.precio}</span>
                <div className='containerCantidad'>
                    <button>-</button><h3>1</h3><button>+</button>
                </div>
                
                <Button className='agregarCarrito'>Agregar al carrito</Button>
                
            </div>
            
        </div>
    )
}

export default ItemDetail