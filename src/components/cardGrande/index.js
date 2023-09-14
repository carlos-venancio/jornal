import { Link } from "react-router-dom"
import './cardGrande.css'

export default function CardGrande(props){

    return (
        <div className="container-image">
            <img src={props.image} alt={props.title} className="card-img"/>
            <Link to={`/categoria/${props.category}/${props.id}`} className="card-title">
                <h2 > {props.title} </h2>
            </Link>
        </div>
    )
}