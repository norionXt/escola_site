import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, Auth, signInWithEmailAndPassword } from 'firebase/auth';
import config from '../../config';


export default class CadastroUsuarios {

    private auth:Auth;
    private registro: any;
    private usuario: string = '';
    private dados: any = {};

    constructor() {
        this.auth = getAuth(initializeApp(config.configs.firebase))
    }


    cadastrar() {
        this.registro = createUserWithEmailAndPassword(
            this.auth, this.dados.email, this.dados.password
        );

        return this;
    }

    autenticar(email: string, password: string) {
        signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    setDados(dados: object) {
        this.dados = dados;
        return this;
    }

    setUsuario(usuario: string) {
        this.usuario = usuario;
        return this;
    }

    success(success: Function) {
        this
        .registro
        .then( async (userCredential:any) => {
            // Signed in
            const user = userCredential.user;
            const module:any = await import(`../../database/${this.usuario}`);
            const usuarioModel =  new module.default();
            usuarioModel.insert(this.dados);
            success();            
        })
        return this;
    }

    error(tratamento: Function) {
        this
        .registro
        .catch((error:any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            tratamento(errorCode, errorMessage)
        })
        return this;
    }
}               