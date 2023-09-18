import { Link } from "react-router-dom";
import './header.css';
import logo from '../../assets/logo.png'

function Header(){
     
    return(
        <div className="menu"> 
            <div className="header">
                <div>
                    <Link to="/">
                        <img className='icon' src={logo} alt='logo'/>
                    </Link>
                </div>
            </div>
            <div className="catalogo">
                <Link className="link-home"   to="/categoria/business">Negócios</Link>
                <Link className="link-home"   to="/categoria/politics">Política</Link>
                <Link className="link-home"   to="/categoria/sports">Esporte</Link>
                <Link className="link-home"   to="/categoria/technology">Tecnologia</Link>
                <Link className="link-home"   to="/categoria/entertainment">Entretenimento</Link>
                <Link className="link-home"   to="/categoria/science">Ciência</Link>
            </div>
         </div>   
     )
 }

 export default Header;