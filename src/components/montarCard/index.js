import CardCompleto from "../cardCompleto"
import CardSimples from "../cardSimples"
import CardGrande from "../cardGrande"

// uma função que monta um conjunto de cards dependendo do modelo escolhido
// recebe a quantidade deseja, nome da categoria e tipo do cartão
export default function MontarCard({qtd,categoria,cartao,inicio}){

    const recorteCategoria = JSON.parse(sessionStorage.getItem(categoria))

    // evita que a quantidade seja undefined
    qtd = qtd === undefined ?  recorteCategoria.length : qtd 

    // possibilita pega diferentes dados para fazer o card
    inicio = inicio === undefined ?  0 : inicio

    qtd += inicio
    // cartão simples é o modelo 1
    if (cartao === 1){

        return (
            recorteCategoria.slice(inicio,qtd).map((item) => {
                    return (
                        <CardSimples key={item.article_id} 
                                     id={item.article_id}
                                     image={item.image_url} 
                                     title={item.title}
                                     category={categoria}
                            />
                    )
            })
        )
    }

    // o cartão com mais dados é a opção 2
    else if (cartao === 2){
        return (
            recorteCategoria.slice(inicio,qtd).map((item) => {
                return (
                    <CardCompleto 
                            key={item.article_id}
                            id={item.article_id}
                            font={item.source_id}
                            title={item.title}
                            image={item.image_url}
                            desc={item.description}
                            date={item.pubDate}
                            category={categoria}

                    />
                )
            })
        )        
    }

    // o cartão maior é a opção 3
    else if (cartao === 3){
        return (
            recorteCategoria.slice(inicio,qtd).map((item) => {
                return (
                    <CardGrande 
                            key={item.article_id}
                            id={item.article_id}
                            title={item.title}
                            image={item.image_url}
                            desc={item.description}
                            category={categoria}
                    />
                )
            })
        )
    }
    
}