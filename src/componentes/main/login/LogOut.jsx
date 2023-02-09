import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Register from './Register'

const LogOut = () => {
    const [usuario, setUsuario]= useState(false)

    const logOut = ()=>{
        setUsuario(false)
    }
    return (
    <div>
        {usuario 
        ?<div className='containerLogout'>
            <Button onClick={()=>logOut()}>cerrar secion</Button>
        </div> 
        : <Register setUsuario={setUsuario}/>}
    </div>
    )
}

export default LogOut