import { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router";
import './artigo.css'

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
            <div className="info">

                <h1 className="titulo"> {artigo.title} </h1>
                <div className="row-between">
                    <p>Fonte: {artigo.source_id}</p>
                    <p>{new Date(artigo.pubDate).toLocaleDateString()}</p>
                </div>
                <img src={artigo.image_url} className="img"/>

                {/* aplica um recorte e fragameta o texto separando por . */}
                {artigo.content.split('.').map((item) => {
                    return (
                        <p className="texto">{item}.</p>
                    )
                })}

                <div className="container-btn">
                    <a href={artigo.link} target="_blank" className="btn"> Leia a matéria completa</a>
                </div>
                {/* consulta a materia completa no site de origem */}
            </div>
        </div>
    )
}