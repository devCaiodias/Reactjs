import { useState} from 'react';

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`O nome do Usuario: ${name} e a senha do Usuario: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
 
    return (
        <>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input type="password" id="senha" name="name" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar!" />
                </div>
            </form>
        </>
    )
}

export default Form;