import '../css/registro.css';
import {Link} from 'react-router-dom';

const Registro =()=>{

    return(
        <div className='form'>
            <div className='overlay'>
                <form className="card p-4">
                    <h1>Registro</h1>
                    <p>Nombre</p>
                    <input className="input" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" type={"text"} name="nombre" title="El nombre es obligatorio" required></input>
                    <p>Apellido</p>
                    <input className="input" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" type={"text"}name="apellido" title="El apellido es obligatorio" required></input>
                    <p>Correo electronico</p>
                    <input className="input" type={"email"}name="email" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"  title="El correo es obligatorio" required></input>
                    <p>Contraseña</p>
                    <input className="input" type={"password"}name="password" title="La contraseña es obligatoria" required></input>
                
                    <input className='btn btn-primary btn-registro my-5' type={"submit"}></input>

                    <span>¿Ya tienes cuenta? <Link to={"/login"}>Inicir sesion</Link></span>
                </form>
            </div>
        </div>
    )
}

export {
    Registro
}