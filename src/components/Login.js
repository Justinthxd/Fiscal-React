import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='cover'>
            <h1>Login</h1>
            <input type="text" placeholder='user' />
            <input type="password" placeholder='password' />
            <div className="login-btn">Login</div>
            <p className='text'>Or</p>
            <div className="registrer-btn">Registrer</div>
        </div>
    );
}

export default Login;
