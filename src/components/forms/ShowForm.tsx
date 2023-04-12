import { Link } from 'react-router-dom';

export default function ShowForm({Form, getDadosForm}: any)  {

    if(typeof Form === 'undefined') {
        return <></>
    } 



    return ( 
        <>
            <span className='text-black  col-12 col-sm-12 mb-3 font-raleway bold'>Dados para cadastro</span>
            {Form}
            
             <div className="col-12 col-sm-12 mb-4">
                <input type="email"  placeholder='email' onChange={getDadosForm}  name="email" className='p-1 '/>
            </div>

            <div className="col-12 col-sm-6 mb-4">
                <input type="password" placeholder='senha'  onChange={getDadosForm}  name="password" className='p-1 '/>
            </div>    

            <div className="col-12 col-sm-6 mb-4">
                <input type="password"  placeholder='confirmar senha' onChange={getDadosForm} name="confirmarPassword" className='p-1 '/>
            </div>            
            <div className="col-12 justify-content-between d-flex mt-4">
                <Link to="/login"><span className='bold text-blue'>Faça login</span></Link>
                <button className='btn text-white'>Cadastrar</button>
            </div>
        </> 
    )

}