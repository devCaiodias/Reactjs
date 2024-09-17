function OutraLista({ item }) {

    return (
        <>
            <h3>Lista de coisas massas:</h3>
            {
                item.length > 0 ? (
                item.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <p>Não há itens na Lista!</p>
                )
            }
        </>
    )
}

export default OutraLista;