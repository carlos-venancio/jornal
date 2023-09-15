import { Link } from "react-router-dom"
import './btn.css'

export default function Btn(props){
    return (
        <div className="container-btn">
            <Link to={`/categoria/${props.categoria}`} className="btn">{props.children}</Link>
        </div>
    )
}