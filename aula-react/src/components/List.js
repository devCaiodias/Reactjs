import Item from "./Item";

function List() {
    const marca = 'Nike'

    return (
        <>
            <h1>Minha List</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <Item marca={marca}/>
            </ul>
        </>
    )
}

export default List;