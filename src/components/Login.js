import React from 'react';
import '../css/Login.css';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className='contain'>
            <div className='overlayL'>
                <form className='cover'>
                    <h1>Login</h1>
                    <input type="text" placeholder='user' name="nombre" title="El usuario es obligatorio" required/>
                    <input type="password" placeholder='password' name="password" title="La contraseña es obligatoria" required/>
                    <input className="btn login-btn" type={"submit"} value="Login"></input>
                    <p className='text'>Or</p>
                    <Link className='btn registrer-btn' to={"/registro"}>Registro</Link>
                </form>
            </div>
        </div>  
    );
}

export default Login;
