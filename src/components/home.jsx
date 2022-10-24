import '../css/home.css'
import {Link} from 'react-router-dom';

const Home =()=>{
    return(
        <div className="contenedor">
            <div className="cita">
                <div className='ol'>
                    <q>La justicia es Reina y Señora de Todas las virtudes</q><br />
                    <i>- Ciceron</i>
                </div>
            </div>
            <div className='guia'>
                <h2 className='p-1'>Como hacer tu solicitud</h2>

                <div className='steps'>
                    <div className='step'>
                        <h3 className='p-1'>Paso 1</h3>
                        <img src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png" alt="registro.png" />
                        <p>Primero debes registrarte</p>
                        <Link className='btn btn-primary my-3' to={'/registro'}>Registrate</Link>
                    </div>
                    <div className='step'>
                        <h3 className='p-1'>Paso 2</h3>
                        <img src="https://cdn-icons-png.flaticon.com/512/5655/5655237.png" alt="registro.png" />
                        <p>A continuacion inicia sesion</p>
                        <Link className='btn btn-primary my-3' to={'/login'}>Login</Link>
                    </div>
                    <div className='step'>
                        <h3 className='p-1'>Paso 3</h3>
                        <img src="https://cdn-icons-png.flaticon.com/512/2343/2343731.png" alt="registro.png" />
                        <p>Luego llene el formulario de solicitud con los datos correspondientes</p>
                        <Link className='btn btn-primary my-3' to={'/formulario'}>Formulario</Link>
                    </div>
                    <div className='step'>
                        <h3 className='p-1'>Paso 4</h3>
                        <img src="https://cdn-icons-png.flaticon.com/512/1584/1584892.png" alt="registro.png" />
                        <p>Ahora debe esperar que su solicitud sea aprobada</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export{
    Home
}