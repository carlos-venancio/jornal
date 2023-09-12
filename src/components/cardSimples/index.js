
export default function cardSimples(props) {
    return (
        <div className="container-card">
            <img src={`${props.image}`} alt={`${props.title}`}/>
            <p> {props.title} </p>
        </div>
    )
}