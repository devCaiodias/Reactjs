function Form({}) {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("foi cadastrado!")
    }

    return (
        <>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Seu Nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar!" />
                </div>
            </form>
        </>
    )
}

export default Form;