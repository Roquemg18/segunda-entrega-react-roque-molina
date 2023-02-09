import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Login = () => {
return (
    <div className='containerLogin'>
        <div className='subContainerLogin'>
            <div className='container-buttons'> 
                <Link to='/register'>Registro</Link>
                <Link to="/login">Iniciar secion</Link>
            </div>
            <div className='container-inputs-login'>
                <label>Email</label>
                <input type="email" id="" />
                <label>Contraseña</label>
                <input type="password" name="" id="" />
                <button>iniciar secion</button>
            </div>
            
        </div>
    </div>
    )
}
export default Login