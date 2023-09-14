import { Link } from "react-router-dom"

// o card mais simples do projeto, contendo um titulo e uma imagem
export default function CardSimples(props) {
    return (
        <div className="container-card">
            <img src={`${props.image}`} alt={`${props.title}`}/>

            <Link to={`/categoria/${props.category}/${props.id}`}>
                <p> {props.title} </p>
            </Link>
        </div>
    )
}