import { Link } from "react-router-dom";
import './cardCompleto.css'

export default function CardCompleto(props){
    return (
        <div className="card-row-cc">
            <div>
                <img src={props.image} alt={props.title} className="card-img-cc" />
            </div>
            <div className="card-dialog">
                <Link to={`/categoria/${props.category}/${props.id}`} className="card-title-cc">
                    <h3> {props.title} </h3>
                </Link>
            </div>
            <div className="card-info-cc">
                <p className="card-font"> {props.font} </p>
                {/* pega apenas o ano,mês e dia da data */}
                <p className="card-horario"> {new Date(props.date).toLocaleDateString()} </p>
            </div>
        </div>
    )
}