import icon from '../../assets/icon-notfound.png'
import './notfound.css'

export default function NotFound(){
    return (
        <div className="container">
            <img src={icon} alt="icon" className="icon-notfound"/>
            <h1 className="codigo">404</h1>
            <h2 className="notfound-title">Página não encontrada</h2>
            <p className="notfound-text"> Não conseguimos encontrar o conteúdo que você solicitou. Tente retorna à pagina anterior. </p>
        </div>
    )
}