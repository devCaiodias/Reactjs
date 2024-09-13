function Pessoa({foto, nome, idade, profissao}) {
    return (<div>
        <img src={foto} alt="Pessoa" width="200" />
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
    </div>)
}

export default Pessoa