const LoginButton = ({loggedIn}) => {
    //Exibir um botão de Entrar caso esteja deslogado
    //Exibir um botão de Sair caso esteja logado.
  return(
    <div>{loggedIn ? <button>Sair</button> : <button>Entrar</button>}</div>
  )
  
}

export default LoginButton
