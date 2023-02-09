import { useForm } from 'react-hook-form'
import edadValidator from './validators';
import './register.css'
import { Link } from 'react-router-dom';
function Register(props) {

    const {register,formState:{errors}, handleSubmit} = useForm()

    const onSubmit = (data)=>{
        
        props.setUsuario(true)
    } 

    return(
        <main className='container-register'>
            <div className='container-form'>
                <div className='container-buttons'> 
                    <Link>Registro</Link>
                    <Link to="/login">Iniciar secion</Link>
                </div>
                <form className='form-register' onSubmit={ handleSubmit (onSubmit) }>
                <div className='container-inputs'>
                    <div>
                        <label>Nombre</label>
                        <input type="text" {...register('nombre',{
                            required:true,
                            maxLength:10
                        })} />
                        {errors.nombre?.type==='required' && <p>el campo nombre es requerido</p>}
                        {errors.nombre?.type==='maxLength' && <p>el campo nombre debe tener menos de 10 caracteres</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" {...register('email',{
                            required:true,
                            pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                        })} />
                        {errors.email?.type==='pattern' && <p>el formato del email ingresado es incorrecto</p>}
                        {errors.email?.type==='required' && <p>el campo de email es necesario</p>}
                    </div>
                    <div>
                        <label>Direccion</label>
                        <input type="text" {...register('direccion',{
                            required:true
                        })} />
                        {errors.direccion?.type==='require' && <p>el campo direccion es requerido</p>}
                    </div>
                    <div>
                        <label>Edad</label>
                        <input type="text" {...register('edad',{
                            validate:edadValidator
                        })}/>
                        {errors.edad && <p>La edad debe ser entre 18 y 65</p>}
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" {...register('password',{
                            required:true
                            /* pattern: /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/ */
                        })}/>
{/*                         {errors.password?.type==='pattern' && <ul> 
                            <li>La contraseña no cumple con los siguientes requisitos:</li>
                            <li>Minimo 8 caracteres</li>
                            <li>Maximo 15</li>
                            <li>Al menos una letra mayúscula</li>
                            <li>Al menos una letra minucula</li>
                            <li>Al menos un dígito</li>
                            <li>No espacios en blanco</li>
                            <li>Al menos 1 caracter especial</li>
                        </ul>} */}
                        {errors.password?.type==='required' && <p>el campo de contraseña es necesario</p>}
                    </div>
                    <div>
                        <label>Pais</label>
                        <select >
                            <option>Argentina</option>
                            <option>Chile</option>
                            <option>Uruguay</option>
                        </select>
                    </div>
                </div>
                <input className='enviar' type="submit" />
                </form>
            </div>
        </main>
    )
}

export default Register