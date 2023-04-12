



export default function FormEscola({setDados}: any) {

    const campos = [
        {
            name: 'nome',
            placeholder: 'nome da escola',
            type: 'text'
        },
        {
            name: 'cep',
            placeholder: 'Cep',
            id: 'cep',
            type: 'number'
        },        
        {
            name: 'estado',
            placeholder: 'Estado',
            id: 'estado',
            type: 'text'
        },
        {
            name: 'bairro',
            placeholder: 'Bairro'
        },
        {
            name: 'rua',
            placeholder: 'rua'
        }, 
        {
            name: 'numero',
            placeholder: 'número',
            type: 'text',
            max: 8,
            label: 'só números'
        }, 
        {
            name: 'telefone',
            placeholder: 'telefone',
            type: 'number'
        }, 
        {
            name: 'whatsapp',
            placeholder: 'whatsapp',
            type: 'number'
        }
    ]

    return (
        <>
                {campos.map((campo: any, index: number) => 
                    <div className="col-12 col-sm-6 mb-3" key={index}>
                        <input type={campo.type} pattern={campo.pattern} maxLength={!!campo.max ? campo.max: 999} id={campo.id}  placeholder={campo.placeholder} onChange={setDados}  name={campo.name} className='p-1 '/>
                        { !!campo.label ?
                            <label htmlFor={campo.id} className='font-size5 m-0 p-1'>{campo.label}</label>:''
                        }
                    </div>  
                )}
        </>
    );
}