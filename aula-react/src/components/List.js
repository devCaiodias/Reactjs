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
                <Item marca={marca} lancamento={2006} />
                <Item marca='Adidas' lancamento={2005} />
                <Item marca='pai' lancamento={2002} />
                <Item marca='lloo' lancamento={2889} />
                <Item marca='piracanjuba' lancamento={255} />
                <Item />
            </ul>
        </>
    )
}

export default List;