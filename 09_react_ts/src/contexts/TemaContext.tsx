import { createContext, ReactNode, useState } from "react"

// Define um tipo para o tema, que pode ser "claro" ou "escuro"
type Tema = "claro" | "escuro"

// Define a interface para o contexto do tema, com o valor atual do tema e uma função para alterná-lo
interface TemaContexto {
    tema: Tema,
    alternarTema: () => void
}

// Cria o contexto com um valor inicial nulo
export const TemaContext = createContext<TemaContexto | null>(null)

// Define a interface para as props do TemaProvider, que espera receber elementos filhos
interface TemaProviderProps {
    children: ReactNode
}

// Cria o provedor de contexto do tema
export const TemaProvider = ({children}: TemaProviderProps) => {

    // Define o estado inicial do tema como "claro"
    const [tema, setTema] = useState<Tema>("claro")

    // Define a função que alterna o tema entre "claro" e "escuro"
    const alternarTema = () => {
        setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"))
    }

    // Retorna o TemaContext.Provider com o valor atual do tema e a função para alterná-lo
    return (
        <TemaContext.Provider value={{tema, alternarTema }}>
            {children}
        </TemaContext.Provider>
    )
}