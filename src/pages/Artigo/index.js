import { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function Artigo(){
    
    // armazena os dados do artigo para pegar os valores do artigo mais facilmente
    const [artigo,setArtigo] = useState({})
    const pagina = useNavigate()
    const [loading,setLoading] = useState(true)
    const { categoria, id } = useParams()

    useEffect(() => {
    
        // pega o artigo clicado
        let art = JSON.parse(sessionStorage.getItem(categoria)).filter((item) => {
            return item.article_id === id
        })
    
        // valida se o artigo existe
        if (art.length === 0){
            pagina('/',{replace: true})
        }

        setArtigo(art[0])
        setLoading(false)

    },[])

    if(loading){
        return (
            <div className="container">
                <p>Carregando...</p>
            </div>
        )
    }

    return(
        <div className="container">

            <p> Home &gt; {categoria}</p>

            <h1> {artigo.title} </h1>
            <div>
                <p>Fonte: {artigo.source_id}{artigo.creator}</p>
                <p>{artigo.pub_date}</p>
            </div>
            <img src={artigo.image_url}/>
            <p>{artigo.description}</p>

            {/* consulta a materia completa no site de origem */}
            <a href={artigo.link} target="_blank"> Leia mais</a>
        </div>
    )
}