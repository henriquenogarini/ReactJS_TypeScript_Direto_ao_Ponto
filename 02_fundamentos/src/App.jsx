import './App.css'
import Welcome from './components/Welcome'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import PaiFunction from './components/PaiFunction'
import Form from './components/Form'
import RenderCondicional from './components/RenderCondicional'
import LoginButton from './components/LoginButton'
import Warning from './components/Warning'
import NumberList from './components/NumberList'
import BotaoEstilizado from './components/BotaoEstilizado'
import BotaoAzul from './components/BotaoAzul'
import Greeting from './components/Greeting'
import Counter02 from './components/Counter02'
import TaskList from './components/TaskList'

function App() {

  return (
    <>{/* 6.1 - Crição de componente */}
      <Welcome />   
      {/* 6.2 - Expressões do Jsx */}
      <BomDia />   
      {/* 6.3 - Componenente dentro de componente */}
      <Pai />
      {/* 6.4 - Props */}
      <Descricao nome="Henrique" anos={25}/>
      {/* 6.5 - Desestruturaçã0 de props */}
      <Cachorro nome="Maya" raca="Schienauzer"/>
      {/* 6.6 - useState -> hook */}
      <Counter />
      {/* 6.7 - Múltiplos estados */}
      <UserInfoForm />
      {/* 6.8 - Eventos */} 
      <Button />
      {/* 6.9 - Passando funções de manipulação de eventos como props */} 
      <PaiFunction />
      {/* 6.10 - Eventos de form */} 
      <Form />
      {/* 6.11 - Renderização condicional */} 
      <RenderCondicional user="Henrique" />
      {/* 6.12 - Expressão ternária */} 
      <LoginButton loggedIn={false}/>
      <LoginButton loggedIn={true}/>
      {/* 6.13 - Render nulo */} 
      <Warning warning={null}/>
      <Warning warning="Temos um warning"/>
      {/* 6.14 - Listas e Chaves */} 
      <NumberList numbers={[1,2,3,4,5]} />
      {/* 6.15 - Estilos por atributo */} 
      <BotaoEstilizado />
      {/* 6.16 - Estilos Globais */} 
      <BotaoAzul />
      {/* 6.17 - Exercícios */}
      <Greeting name={"Henrique"}/>
      <Counter02 />
      <TaskList tasks={[]} />
     </>
  )
}

export default App
