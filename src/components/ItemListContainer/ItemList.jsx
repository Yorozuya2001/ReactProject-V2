import Item from "./Item"

const itemList = ({ id }) => {
    return (
        <div className="container mb-5">
            <div className="row justify-content-evenly">
                {
                    id.map(
                        producto => <Item key={producto.id} producto={producto} />
                    )
                }
            </div>
        </div>
    )
}

export default itemList