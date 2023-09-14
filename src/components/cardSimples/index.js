import { Link } from "react-router-dom"
import './cardSimples.css'

// o card mais simples do projeto, contendo um titulo e uma imagem
export default function CardSimples(props) {
    return (
        <div className="container-card-cs">
            <img src={`${props.image}`} alt={`${props.title}`} className="card-img-cs"/>

            <Link to={`/categoria/${props.category}/${props.id}`} className="card-link-cs">
                <h2> {props.title} </h2>
            </Link>
        </div>
    )
}