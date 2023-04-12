

export default function FormAlunos ({ setDados }: any) {

    const campos = [
        {
            name: 'nome',
            placeholder: 'nome'
        },
        {
            name: 'sobrenome',
            placeholder: 'sobrenome'
        },
        {
            name: 'nascimento',
            type: 'date',
            label: 'data de nascimento'
        },
        {
            name: 'whatsapp',
            placeholder: 'whatsapp'
        }
    ]

    return (
        <>
            {campos.map((campo: any, index: number) => 
                    <div className="col-12 col-sm-6 mb-3" key={index}>
                        <input type={campo.type} id={campo.id}  placeholder={campo.placeholder} onChange={setDados}  name={campo.name} className='p-1 '/>
                        { !!campo.label ?
                            <label htmlFor={campo.id} className='font-size5 m-0 p-1'>{campo.label}</label>:''
                        }
                    </div>  
                )}
        </>
    )
}