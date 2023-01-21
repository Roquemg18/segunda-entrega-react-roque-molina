import React, { useState } from 'react'

function Contador({handleAdd}) {
    const[cantidad,setCantidad]=useState(1)
   
    handleAdd(cantidad)
    return (
    <div className='containerCantidad'>
        <button onClick={()=>setCantidad(cantidad - 1)}>-</button><h3>{cantidad}</h3><button onClick={()=>setCantidad(cantidad + 1)}>+</button>
    </div>
  )
  
}

export default Contador