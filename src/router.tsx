import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import RecuperarSenha from './pages/recuperarSenha';
import Dashboard from './pages/dashboard';
import Autenticacao from './modules/autenticacao/antenticacao';
import { useState } from 'react';

export default function Routes () {

    function logado() {
      return Autenticacao.logado() ? null : redirect('/login'); 
    }

    const router =  createBrowserRouter([
      {
        path: '/dashboard',
        element: <Dashboard />,
        loader: logado
      },
      {
        path: '/login',
        element: <Login />,
        children: [
          {
            path: 'teste',
            element: <></>
          }
        ]
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      },
      {
        path: '/resetPassword',
        element: <RecuperarSenha />
      }
    ])

    return (
      <RouterProvider router={router} />
    );

}