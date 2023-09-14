import { useState, useEffect } from "react"
import MontarCard from "../../components/montarCard"
import Btn from "../../components/btn/index.js"

import ConsultarArtigos from "../../components/consultaArtigos"

export default function Home() {
    
    // faz um carregamento de página enquanto está pesquisando os dados
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        // representa as categorias que seram precarregadas
        const categorias = [ "business", "entertainment","politics" , "sports", "science", "technology" ]

        // executa todas as buscas 
        categorias.map((categoria) => {
            ConsultarArtigos(categoria)
        })

        // garante que todas as buscar foram feitas
        const buscasFeitas = categorias.slice(0,3).every((categoria) => {
            console.log(sessionStorage.getItem(categoria))

            // verifica se a categoria já foi consultada
            const teste = JSON.parse(sessionStorage.getItem(categoria)) !== null
            console.log(teste) 
            return teste
        }) 

        console.log(buscasFeitas)
        
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
            <MontarCard qtd={1} categoria={'entertainment'} cartao={3} />
            <h1> Politica </h1>
            {/* coloca na tela as categorias selecionadas  */}
            {/* IMPLEMENTAR: pré-carregar todos os tópicos e coloca-los na página */}
            <MontarCard qtd={3} categoria={'politics'} cartao={1}/>
            <Btn categoria={'politics'}> Leia Mais </Btn>

            <h1> Negócios </h1>
            <MontarCard qtd={3} categoria={'business'} cartao={2} />
            
            <MontarCard qtd={3} categoria={'entertainment'} cartao={1} />
        </div>
    )
}