import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import { Routes, Route, Link, NavLink } from 'react-router-dom' //Componentes do React Router
import Settings from './components/Settings'
import TaskDetails from './components/TaskDetails'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      {/* 01 - Setup e configuração inicial */}
      <nav>
        <ul>
          <li>
            {/* Se usa o componente link(que já é pré renderizado, para realizar tipo um href nas palavras.) */}
            <Link to="/">Início</Link>
            </li>
          <li>
          <Link to="/about">Sobre</Link>
            </li>
          <li>
          <Link to="/contact">Contato</Link>
          </li>
           {/* 02 - NavLink */}
           {/* A NavLink funciona parecido com o Link, mas ela possui a possibilidade de fazer testes e programar coisas dentro dela 
               geralmente é utilizada com navBar.*/}
           <li>
              <NavLink 
              className={({isActive}) => (isActive ? "active-link" : "")} 
              to="/contact">
              Contato 
              </NavLink>                                                                                                   
           </li>
            {/* 03 - useNavigate */}
            {/* Lida com a navegação */}
            <li>
                <Link to="/login" element={<Login />}>Login</Link>
            </li>
            {/* 04 - Rotas Dinâmicas */}
            {/* Aqui as rotas são criadas, com seus respectivos Ids, e na parte dos Routes, elas são chamadas e impressas */}
            <div>
              <h2>Tarefas</h2>
              <Link to="/tasks/1">Tarefa 1</Link>
              <Link to="/tasks/2">Tarefa 2</Link>
              <Link to="/tasks/3">Tarefa 3</Link>
            </div>
            {/* 05 - Rotas Aninhadas */}
            {/* Aqui a idéia é de que a dashboard possua vários links dentro de um único elemento, deixando a estrutura melhor */}
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {/* 06 - Rota 404*/}
            {/* 0Já que a página abaixo não existe, ele não leva a nada, porém com react router conseguimos guiar para a página 404 */}
            <Link to="items/1">Item 1</Link>
        </ul>
      </nav>
      {/* Routes engloba várias rotas */}
      <Routes> 
        {/* Ele recebe um path, que é para onde a route levará, e o element é a pagina */}
        <Route path="/" element={<Home/>} />
        {/* Enviar para a pagina de about */}
        <Route path="/about" element={<About />}/>
        {/* Enviar para a pagina de contato */}
        <Route path="/contact" element={<Contact />}/>
        {/* Enviar para a pagina de login */}
        <Route path="/login" element={<Login />} />
        {/* Rota dinâmica */}
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        {/* Rota utilizada para enviar para aninhar outros routes */}
          <Route path="/dashboard" element={<Dashboard/>}>
          {/* Rota utilizada para enviar a profile, usando o Dashboard */}
          <Route path="profile" element={<Profile/>} />
          {/* Rota utilizada para enviar as settings, usando o Dashboard */}
          <Route path="settings" element={<Settings/>} /> 
          </Route>
          {/* 06 - Rota 404 */}
          <Route path="*" element={<NotFound />}/>
      </Routes>
      <p>Rodapé</p>
    </>
  )
}

export default App
