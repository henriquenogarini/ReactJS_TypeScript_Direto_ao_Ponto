import { useContext } from "react"
import { TemaContext } from "../contexts/TemaContext"

const BarraFerramentas = () => {

    // Usa o hook useContext para acessar o valor do TemaContext
    const contextoTema = useContext(TemaContext)

    // Verifica se o contextoTema está disponível. Se não estiver, retorna null, evitando a renderização do componente.
    if(!contextoTema){
        return null
    }

  return (
    <div
     // Define o estilo inline para a div, com base no tema atual
     style={{
        background: contextoTema.tema === "claro" ? "#FFF" : "#000", 
        color: contextoTema.tema === "claro" ? "#000" : "#FFF"
        }}
        >
      <button onClick={contextoTema.alternarTema}>Alterar tema</button>
    </div>
  )
}

export default BarraFerramentas
