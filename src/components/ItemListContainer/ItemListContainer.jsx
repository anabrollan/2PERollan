const ItemListContainer = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.inicio}</h2>
            <h2>{props.sobreMi}</h2>
        </div>
    )
}

export default ItemListContainer