



export default function FormDiretor({ setDados  }: any) {

    return (
        <>
            <div className="col-12 col-sm-6 mb-4">
                <input  type="text" placeholder='nome' onChange={setDados} name="nome" className='input p-1  '/>
            </div>
            <div className="col-12 col-sm-6 mb-4">
                <input  type="text" placeholder='sobrenome' name="sobrenome" onChange={setDados}  className='input p-1 '/>
            </div>

            <div className="col-12 col-sm-6 mb-4">
                <input  id="cpf" type="text" placeholder='cpf' name="cpf" onChange={setDados}  className='input p-1' pattern="[0-9]{11}"/>
                <label htmlFor="cpf" className="font-size5">Só números</label>
            </div>
           <div className="col-12 col-sm-6 mb-3">
                <input type="date" id='date'  placeholder='data de nascimento' onChange={setDados}  name="nascimento" className='p-1 '/>
                <label htmlFor="date" className='font-size5 m-0 p-1'>Data de nascimento</label>                                
            </div>

        </>
    )
}