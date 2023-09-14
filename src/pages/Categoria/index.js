import { useEffect, useState } from "react";
// o useHistory foi trocado por useNavigate na versão 6 do react-router-dom
import { useParams, useNavigate } from "react-router-dom";
import MontarCard from "../../components/montarCard";

export default function Categoria(){

    const [loading,setLoading] = useState(true)
    const { categoria } = useParams();
    const pagina = useNavigate();
  
    useEffect(() => {

        // verifica se a categoria é uma possibilidade dentro do sistema
        if(sessionStorage.getItem(categoria) === null){
            pagina('/',{replace: true})
        }
    
        setLoading(false)
    },[])

    if(loading){
        return (
            <div className="container">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1> {categoria} </h1>
            <MontarCard categoria={categoria} cartao={2}/>
        </div>
    )

}