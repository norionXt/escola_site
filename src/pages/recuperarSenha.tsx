import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/avisos/alert";
import Success from "../components/avisos/success";
import '../css/recuperarSenha.css';
import Autenticacao from "../modules/autenticacao/antenticacao";




export default function RecuperarSenha() {

    const [ email, setEmail ] = useState('');
    const [ mensagemError, setMensagemError] = useState('');
    const [ mensagemSucesso, setMensagemSucesso] = useState('');

    const enviarRecuperarSenha = async (event: any) => {
        event.preventDefault();
        Autenticacao
        .resetPassword(email)
        .success((successo: any) => {
            setMensagemSucesso('Email enviado, confira a caixa de email');
            setMensagemError('');
        })
        .error((error: any)=> {
            setMensagemError(error);
            setMensagemSucesso('');
        })
    }


    return (<>
            <div id="autenticacao">
                <div className="login recuperarSenha">
                    <form onSubmit={enviarRecuperarSenha}>
                        <legend className="h6">Recuperar senha</legend>
                        <Alert show={mensagemError.length}>{ mensagemError }</Alert>
                        <Success show={mensagemSucesso.length}>{mensagemSucesso}</Success>
                        <input onChange={e => setEmail(e.target.value)} type="text" id="email" placeholder="Email" className="p-2 mt-4" />
                        <div className="links mt-4 d-flex justify-content-between">
                            <Link to="/login">Faça login</Link>
                            <button >Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
    </>)
}