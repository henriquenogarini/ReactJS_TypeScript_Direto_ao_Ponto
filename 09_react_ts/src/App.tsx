import './App.css'
import ContadorInvervalo from './components/ContadorInvervalo'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import TextInput from './components/TextInput'
import FormularioLogin from './components/FormularioLogin'
import ListaDeCompras from './components/ListaDeCompras'
import Contador from './components/Contador'
import UseLocalStorage from './components/UseLocalStorage'

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
    {/* 05 - Exercícios TS */}
    <FormularioLogin />
    <ListaDeCompras />
    <UseLocalStorage />
    {/* 06 - useReducer com TS */}
    <Contador />
    </>
  )
}

export default App
