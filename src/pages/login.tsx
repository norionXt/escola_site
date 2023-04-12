import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Alert from '../components/avisos/alert';
import '../css/login.css';
import Autenticacao from '../modules/autenticacao/antenticacao';



export default function Login() {


    let email: string;
    let password: string;
    

    const [ mensagemError, setMensagemError] = useState('');    

    function logar(event:any) {
        event.preventDefault();

        Autenticacao
        .logar(email,password)
        .error((code:any) => setMensagemError(code));

        
    }




    return (
        <div id="autenticacao">
            <div className="login">

                <form action="" method="post" onSubmit={logar}>
                    <legend>Login</legend>
                        <Alert  show={mensagemError.length > 0}> { mensagemError }</Alert>
                    <input placeholder='Email' onChange={e=> email = e.target.value} className='mt-5' type="text" />
                    <br />
                    <input placeholder='Password' onChange={e=> password = e.target.value} type="password" />
                    <br />
                    <div className='d-flex justify-content-between '>
                      <span>
                            <Link to="/cadastro">
                                Cadastrar
                            </Link>
                        </span>
                        <button className='d-block pl-4 pr-4'>Login</button>                                            
                    </div>
                </form>
                
                <div className='mt-5 links'>
                    <span className='mt-2 d-block'>
                        <Link to='/resetPassword'>
                            Recuperar senha
                        </Link>
                    </span>                    
                </div>
            </div>
        </div>
    )
}