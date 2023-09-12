import { useState, useEffect } from "react"
import api from '../../services/api.js'
import MontarCard from "../../components/montarCard"

export default function Home() {
    
    // faz um carregamento de página enquanto está pesquisando os dados
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        async function consultarArtigos(categoria){

            if (sessionStorage.getItem(`${categoria}`) == null){
                // pegar os artigos na api
                const resposta = await api.get(`api/1/news?apikey=pub_291299d118ab7284974c4d4015ef2dcea8f92&country=br&image=1&full_content=1&category=${categoria}`)
                
                if (resposta.data.length != 0) {
                    // é necessario converter em json para armazenar na sessão
                    const resposta_json = JSON.stringify(resposta.data.results)
    
                    // armazena os artigos de determinado tópico em uma sessão local
                    sessionStorage.setItem(`${categoria}`,resposta_json)
                    console.log(resposta.data)
                }

            }
            setLoading(false)
            
        }
        
        // carregar algumas categorias por padrão
        consultarArtigos('entertainment')
        consultarArtigos('politics')
        consultarArtigos('business')
    },[])

    if (loading){
        return (
            <div className="home">
                <div className="icone-carregamento">Carregando...</div>
            </div>
        )
    } 

    return (
        <div className="home">
            <h1> Politica </h1>
            {/* coloca na tela as categorias selecionadas  */}
            {/* IMPLEMENTAR: pré-carregar todos os tópicos e coloca-los na página */}
            <MontarCard qtd={3} categoria={'politics'} cartao={1}/>

            <h1> Negócios </h1>
            <MontarCard qtd={3} categoria={'business'} cartao={2} />
           
        </div>
    )
}