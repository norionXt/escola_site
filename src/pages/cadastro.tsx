import { useState } from 'react';

import '../css/cadastro.css';
import config from '../config';
import ShowForm from '../components/forms/ShowForm';
import CadastroUsuarios from '../modules/cadastro/CadastroUsuarios';
import Alert from '../components/avisos/alert';
import Success from '../components/avisos/success';
import { Link } from 'react-router-dom';

var dadosCadastro:any = {};
var dadosLogin: any = {};
var tipoConta: string = '';

export default function Cadastro() {
    const [useForm, setForm] = useState();
    const [showAlert, setShowAlert] = useState(<></>);
    const [hidden, setHidden ] = useState('');


    async function getForm(tipoForm: string) {
        const Modulo = await import(`../components/forms/${tipoForm}`)
        setForm(<Modulo.default setDados={getDadosForm} /> as any);
        setHidden('d-none');
    }



    async function cadastrar (event: any)  {
        event.preventDefault();        
        
        if ( dadosCadastro.password !== dadosCadastro.confirmarPassword) {
            setShowAlert(<Alert> As senhas, não são iguais.</Alert>)
        }

        await (new CadastroUsuarios())
            .setUsuario(tipoConta)
            .setDados({...dadosCadastro, ...dadosLogin})
            .cadastrar()
            .success(() => setShowAlert(<Success> Parabéns!!! agora você pode logar na {config.nomePlatorma}.</Success>) )
            .error(() => setShowAlert(<Alert> Houve um problema no cadastro, {config.nomePlatorma} tentará registrar mais tarde. Você receberá email.</Alert>))

    }

    function getDadosFormLogin(event:any) {
        dadosLogin[event.target.name] = event.target.value;
    }

    function getDadosForm(event:any) {
        dadosCadastro[event.target.name] = event.target.value;
    }

    return (
        <div className="usuario d-block">
            <form action="" method="post" onSubmit={cadastrar}>
                <h1 className="h3 color-lilas">{config.nomePlatorma}</h1>
                <legend className='h3 mb-4 mt-3 font-raleway'>Crie sua conta agora. </legend>
                {showAlert}
                <div className="row">
                    <div className="ml-1 col-12">
                        <label htmlFor="tipoconta">Escolha o tipo da conta</label>
                        <select id="tipoconta"
                            onChange={async (e) => { tipoConta = e.target.value; getForm(e.target.value) }}
                            name="" className='p-2 bg-white border border-2  mt-2 mb-4'>
                            <option value="escola">Escola</option>
                            <option value="diretor">Diretor</option>
                            <option value="professor">Professor</option>
                            <option value="pais">Pais</option>
                            <option value="aluno">aluno</option>
                        </select>
                    </div>
                    <ShowForm Form={useForm} getDadosForm={getDadosForm}/>
                    <div className={"ml-2 col-12 "+hidden}>
                        <Link to={"/login"} className="bold text-blue">Faça login</Link>
                    </div>
                </div>
            </form>
        </div>

    )
}