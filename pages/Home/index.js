import { useState, useEffect } from "react"
import MontarCard from "../../components/montarCard"
import Btn from "../../components/btn/index.js"
import './index.css'

import ConsultarArtigos from "../../components/consultaArtigos"

export default function Home() {
    
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
        
    // representa as categorias que seram pre-carregadas
        const categorias = [ "business", "entertainment","politics" , "sports", "science", "technology" ]
        
        // executa todas as buscas
        categorias.map(async (categoria) => {

            // realiza uma busca para cada artigo
            await ConsultarArtigos(categoria)
            console.log(JSON.parse(sessionStorage.getItem(categoria)))
        })


        // verifica se já buscou todas as categorias a cada 1s
        const contador = setInterval(() => {
            
            // compara a quantidade no sessionStorage com a quantidade de categorias desejadas
            if (sessionStorage.length === categorias.length){
                setLoading(false)

                // para o loop quando a tela for renderizada
                clearInterval(contador)
            }

        },1000) 
        
    },[loading])
    
    console.log(loading)
    
    if (loading){
        return (
            <div className="container">
                <div className="carregamento"></div>
            </div>
        )
    } 

    return (
        <div className="container">

            <section>
                <div className="capa-row">
                    <MontarCard qtd={1} categoria={'entertainment'} cartao={3} />
                    {/* monta um conjunto de cards de acordo com a categoria selecionada  */}
                    <div className="column">
                        <MontarCard qtd={2} categoria={'politics'} cartao={2} />
                    </div>
                </div>
                <hr className="line"/>
            </section>

            <section>
                <h1 className="titulo"> Politica </h1>
                 <div className="row">
                    <MontarCard qtd={3} categoria={'politics'} cartao={1}/>
                </div>
                <Btn categoria={'politics'}> Mais dessa categoria </Btn>
                <hr className="line"/>
            </section>

            <section>
                <h1 className="titulo"> Negócio </h1>
                <div className="row">
                    <div className="column">
                        <MontarCard qtd={2} categoria={'business'} cartao={2} />
                    </div>
                    <div className="column">
                        <MontarCard qtd={2} categoria={'business'} cartao={2} inicio={3} />
                    </div>
                </div>

                <Btn categoria={'politics'}> Mais dessa categoria </Btn>
                <hr className="line"/>
            </section>
            
            <section>
                <h1 className="titulo"> Entretenimento </h1>
                <div className="row">
                    <MontarCard qtd={3} categoria={'entertainment'} cartao={1} inicio={1}/>
                </div>
                <Btn categoria={'politics'}> Mais dessa categoria </Btn>
            </section>

        </div>
    )
}