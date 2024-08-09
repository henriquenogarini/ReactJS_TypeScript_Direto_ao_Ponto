import './App.css'
import ContadorInvervalo from './components/ContadorInvervalo'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import TextInput from './components/TextInput'

function App() {
  return (
    <>
    <h1>React com TS</h1>
    {/* 01 - Componente funcional com TS */}
    <Greeting name="Henrique"/>
    {/* 02 - Hooks com tipos */}
    <Counter />
    {/* 03 - Manipulação de eventos com tipos */}
    <TextInput />
    {/* 04 - Custom hooks com TS */}
    <ContadorInvervalo />
    </>
  )
}

export default App
