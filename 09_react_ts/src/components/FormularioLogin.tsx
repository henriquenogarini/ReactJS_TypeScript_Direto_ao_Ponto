import { useState} from 'react'

const FormularioLogin = () => {

  //Criando as consts que armazenaram o usuário e senha inseridos.
  const [user, setUser] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  //Função que rodará ao enviar o formulário pelo botão, mostrando o usuário e senha digitados nas inputs.
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    alert(`Login efetuado, para ${user} e ${password}`)
}

//OBS : O e.target.value é importante, pois ele pega o valor que está no input e salva ao submitar as informações dele.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="User">User</label>
        <input type="text" 
        value={user} 
        onChange={(e) => setUser(e.target.value)} />
        <label htmlFor="User">Password</label>
        <input type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormularioLogin
