import { useForm } from 'react-hook-form'
import edadValidator from './validators';
import './register.css'

function Register() {

    const {register,formState:{errors}, handleSubmit} = useForm()

    const onSubmit = (data)=>{
        console.log(data);
    }

    return(
        <>
        <main className='container'>
            <div className='container-form'>
                <h2>Registro</h2>
                <form onSubmit={ handleSubmit (onSubmit) }>
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
                    <label>Pais</label>
                    <select >
                        <option>Argentina</option>
                        <option>Chile</option>
                        <option>Uruguay</option>
                    </select>
                </div>
                <input className='enviar' type="submit" />
                </form>
            </div>
        </main>
        </>
    )
}

export default Register