import { useState, useEffect } from "react"
import api from '../../services/api.js'
import cardSimples from "../../components/cardSimples"

export default function Home() {
    
    // armazenará todos os artigos, independente da categoria
    const [artigos,setArtigos] = useState([])

    useEffect(() => {
        async function getArticle(){
            const resposta = await api.get(`api/1/news?apikey=pub_291299d118ab7284974c4d4015ef2dcea8f92&country=br&image=1&full_content=1`)
            setArtigos(resposta)
        }

        getArticle()
        console.log(artigos)
    })
}