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
                </div>
            </div>
        </div>
        
    )
}

export{
    Home
}