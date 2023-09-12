import { useEffect } from "react"
import api from '../../services/api.js'
import { Link } from "react-router-dom"
import cardSimples from "../../components/cardSimples"

export default function Home() {
    
    useEffect(() => {

        async function consultarArtigos(categoria){

            if (sessionStorage.getItem(`${categoria}`) == null){
                // pegar os artigos na api
                const resposta = await api.get(`api/1/news?apikey=pub_291299d118ab7284974c4d4015ef2dcea8f92&country=br&image=1&full_content=1&category=${categoria}`)
                
                if (resposta.data.length != 0) {
                    // é necessario converter em json para armazenar na sessão
                    const resposta_json = JSON.stringify(resposta.data.results)
    
                    // armazena os artigos de determinado topico em uma sessão local
                    sessionStorage.setItem(`${categoria}`,resposta_json)
                    console.log(resposta.data)
                }

            }
            
        }
        
        // carregar algumas categorias por padrão
        consultarArtigos('entertainment')
        consultarArtigos('politics')
        consultarArtigos('business')
    },[])

    return (
        <div className="home">
            {
                // renderiza as categorias colocadas na sessão
                JSON.parse(sessionStorage.getItem('politics')).map((item) => {
                    return (
                        <cardSimples image={`${item.image_url}`} title={`${item.title}`}/>
                    )
                })
            }
        </div>
    )
}