const Descricao = (props) => {
  return (
    
    //props = {}
    //propriedades -> chaves dos valores
    //props.nome = "Henrique"

    <div>
        <p>Seu nome é: {props.nome}</p>
        <p>Você tem: {props.anos} de idade.</p>
    </div>
  )
}

export default Descricao
