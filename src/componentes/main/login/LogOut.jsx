import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Register from './Register'

const LogOut = () => {
    const [usuario, setUsuario]= useState(false)
    return (
    <div>
        {usuario 
        ?<div className='containerLogout'>
            <Button>cerrar secion</Button>
        </div> 
        : <Register/>}
    </div>
    )
}

export default LogOut