const Cachorro = ({nome, raca}) => {
    //Neste caso, nome e raca são props, mas o que são props ?
    //Props(abreviação de propperties) são mecanismos que permitem transmitir dados de um componente pai para um componente filho.
    //Então, é possível dizer que elas são uma maneira eficiente de conectar componentes entre si.
    //Funções das props :
    //Passar Dados: Props permitem que você envie dados de um componente pai para um componente filho.
    //Configurar Componentes: Você pode usar props para configurar como um componente deve se comportar ou que deve exibir.
    //Comunicação entre Componentes: Props ajudam na comunicação entre componentes, especialmente quando você precisa enviar informações
    //de um componente pai para um filho.
    //props.nome => nome
    //destructuring => {}, []
  return (
    <div>
        <p>
            O cachorro se chama {nome} e é da raça {raca}
        </p>
    </div>
  )
}

export default Cachorro
