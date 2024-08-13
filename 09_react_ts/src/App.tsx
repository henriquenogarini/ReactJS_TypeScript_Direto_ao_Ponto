import './App.css'
import ContadorInvervalo from './components/ContadorInvervalo'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import TextInput from './components/TextInput'
import FormularioLogin from './components/FormularioLogin'
import ListaDeCompras from './components/ListaDeCompras'
import Contador from './components/Contador'
import UseLocalStorage from './components/UseLocalStorage'
import { TemaProvider } from './contexts/TemaContext'
import BarraFerramentas from './components/BarraFerramentas'
import ExibirPostagens from './components/ExibirPostagens'

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
    {/* 07 - Context API com TS */}
    <TemaProvider>
      <BarraFerramentas />
    </TemaProvider>
    {/* 08 - Requisições de APIs com Axios e TS */}
    <ExibirPostagens />
    </>
  )
}

export default App
