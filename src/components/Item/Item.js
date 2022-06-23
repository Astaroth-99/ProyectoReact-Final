
import { Link } from "react-router-dom"

const Item = ({producto})=> {
    const {id, name, img, description} = producto

    return (
        <>
        <div className="card col-lg-3 col-sm-5 col-10 bg-white bg-gradient m-1 px-3">
            <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-dark">{name}</h5>
                    <p className="card-text text-dark">{description}</p>
                    <Link to={`/item/${id}`} className="text-black text-decoration-none">Detalles</Link>
                </div>
        </div>
        </>
    )
}

export default Item


