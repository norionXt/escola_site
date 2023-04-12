import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "react-router-dom";
import config from "../../config";
import mensagemErrors  from "./mensagensError.json";

class Autenticacao {

    private auth = getAuth(initializeApp(config.configs.firebase))
    private send: any;



    logar(email: string, password: string) {
        this.send =  signInWithEmailAndPassword(this.auth, email, password)
        .then((user: any) => {
            if(user) {
                localStorage.setItem('id', user.uid);
                window.location.pathname = '/dashboard';
            }
        })


        return this;
    }

    logado() {

        if(localStorage.getItem('id')) {
            return localStorage.getItem('id');
        }

        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                localStorage.setItem('id',user.uid);
            } else {
                window.location.pathname = '/login';
            }
        });
    }

    resetPassword(email: string) {
        this.send = sendPasswordResetEmail(this.auth, email);
        return this;
    }

    success(exec: Function) {
        this.send.then((sucesso: any) => {
            exec(sucesso)
        });
        return this;
    }    

    error(funcao: Function) {
        this.send.catch((e: any) => {
            funcao((mensagemErrors as any)[e.code]);
        });
        
    }

}


export default new Autenticacao();