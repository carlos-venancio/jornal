import { useEffect, useState } from "react";
// o useHistory foi trocado por useNavigate na versão 6 do react-router-dom
import { useParams, useNavigate } from "react-router-dom";
import MontarCard from "../../components/montarCard";
import './categoria.css'

export default function Categoria(){

    const [loading,setLoading] = useState(true)
    const { categoria } = useParams();
    const pagina = useNavigate();
  
    useEffect(() => {

        // verifica se a categoria é uma possibilidade dentro do sistema, senão for, retorna para home
        if(sessionStorage.getItem(categoria) === null){
            pagina('/',{replace: true})
        }
    
        setLoading(false)
    },[])

    if(loading){
        return (
            <div className="container">
                <div className="carregamento"></div>
            </div>
        )
    }

    return (
        // conjuntos de cards completos 
        <div className="container">
            <h1 className="titulo"> {categoria} </h1>
            <section>
                <div className="row">
                    <div className="column">
                        <MontarCard qtd={2} categoria={categoria} cartao={2} />
                    </div>
                    <div className="column">
                        <MontarCard qtd={2} categoria={categoria} cartao={2} inicio={3} />
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="column">
                        <MontarCard qtd={2} categoria={categoria} cartao={2} />
                    </div>
                    <div className="column">
                        <MontarCard qtd={2} categoria={categoria} cartao={2} inicio={3} />
                    </div>
                </div>
            </section>
            
            <section>
                <div className="row">
                    <div className="column">
                        <MontarCard qtd={2} categoria={categoria} cartao={2} />
                    </div>
                    <div className="column">
                        <MontarCard qtd={2} categoria={categoria} cartao={2} inicio={3} />
                    </div>
                </div>
            </section>
        </div>
    )

}