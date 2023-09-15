import { useState, useEffect } from "react"
import MontarCard from "../../components/montarCard"
import Btn from "../../components/btn/index.js"
import './index.css'

import ConsultarArtigos from "../../components/consultaArtigos"

export default function Home() {
    
    // faz um carregamento de página enquanto está pesquisando os dados
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        // representa as categorias que seram precarregadas
        const categorias = [ "business", "entertainment","politics" , "sports", "science", "technology" ]

        // executa todas as buscas 
        categorias.map(async (categoria) => {
            await ConsultarArtigos(categoria)
        })

        // garante que todas as buscar foram feitas
        const buscasFeitas = categorias.slice(0,3).every((categoria) => {

            // verifica se a categoria já foi consultada
            const teste = sessionStorage.getItem(categoria) !== null
            return teste
        })
        
        // caso todos as categorias estejam carregadas (true) para de exibir o loop (muda para false)
        setLoading(!buscasFeitas)
    },[])

    if (loading){
        return (
            <div className="container">
                <div className="icone-carregamento">Carregando...</div>
            </div>
        )
    } 

    return (
        <div className="container">

            <section>
                <div className="capa-row">
                    <MontarCard qtd={1} categoria={'entertainment'} cartao={3} />
                    <div className="column">
                        <MontarCard qtd={2} categoria={'politics'} cartao={2} />
                    </div>
                </div>
                <hr className="line"/>
            </section>

            <section>
                <h1 className="titulo"> Politica </h1>
                {/* coloca na tela as categorias selecionadas  */}
                {/* IMPLEMENTAR: pré-carregar todos os tópicos e coloca-los na página */}
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