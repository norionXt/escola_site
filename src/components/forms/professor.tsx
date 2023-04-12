

export default function FormProfessor({setDados}: any) {
    return (
        <>
            <div className="col-12 col-sm-6 mb-4">
                <input  type="text" placeholder='nome' onChange={setDados} name="nome" className='input p-1  '/>
            </div>
            <div className="col-12 col-sm-6 mb-4">
                <input  type="text" placeholder='sobrenome' name="sobrenome" onChange={setDados}  className='input p-1 '/>
            </div>
            <div className="col-12 col-sm-6 mb-4">
                <input  type="text" placeholder='cpf' name="cpf" onChange={setDados}  className='input p-1 '/>
            </div>
            <div className="col-12 col-sm-6 mb-4">
                <input  type="text" placeholder='matrícula' name="matricula" onChange={setDados}  className='input p-1 '/>
            </div>
            <div className="col-12 col-sm-6 mb-4">
                <input  type="text" placeholder='Whatsapp' name="whastapp" onChange={setDados}  className='input p-1 '/>
            </div>         
           <div className="col-12 col-sm-6 mb-3">
                <input type="date" id='date'  placeholder='data de nascimento' onChange={setDados}  name="nascimento" className='p-1 '/>
                <label htmlFor="date" className='font-size5 m-0 p-1'>Data de nascimento</label>                                
            </div>

        </>
    )
}