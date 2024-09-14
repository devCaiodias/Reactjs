import PropTypes from 'prop-types'

function Item({marca, lancamento}) {
    return (
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: "havai",
    lancamento: 2556
}

export default Item;