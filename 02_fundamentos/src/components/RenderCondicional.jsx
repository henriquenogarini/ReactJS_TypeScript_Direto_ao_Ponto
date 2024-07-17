const RenderCondicional = ({user}) => {
    //Se houver usuário, exiba uma mensagem de boas vindas
    //É um componente usado de forma condicional, ou seja, a mensagem só aparecerá
    //caso a props usuário possuir um valor.
  return <div>{user && <h1>Bem-vindo de volta, {user}</h1>}</div>
}

export default RenderCondicional
