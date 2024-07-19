import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AxiosPosts from './components/AxiosPosts'
import FetchPosts from './components/FetchPosts'
import PostManager from './components/PostManager'
import PostLoader from './components/PostLoader'
import PostViewer from './components/PostViewer'

function App() {


  return (
    <BrowserRouter>
    {/* BrowserRouter é um componente do pacote react-router-dom que é usado para gerenciar o roteamento 
        em uma aplicação React usando a API de History do HTML5. Ele permite que você navegue entre diferentes componentes
        e URLs dentro da sua aplicação sem recarregar a página inteira, proporcionando uma experiência de usuário mais fluida. */}
      {/* 01 - GET com Fetch e Axios */}
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">Fetch Posts</Link>
        <Link to="/axios-posts">Axios Posts</Link>
      </div>
      {/* 02 - Continuando requisições - POST e UPDATE/PUT */}
      <div>
        <Link to="/posts">Gerenciar Posts</Link>
      </div>
      {/* 03 - Tratamento de erros */}
      <div>
        <Link to="/post/1">Carregar Post 1</Link>
      </div>
      <div>
        <Link to="/post/999">Carregar Post 999</Link>
      </div>
      {/* 04 - Custom hook com API */}
      <div>
      <Link to="/post/2">Carregar Post 2</Link>
      </div>
      <Routes>
        {/* 01 - GET com Fetch e Axios */}
        <Route path="/fetch-posts" element={<FetchPosts/>}/>
        <Route path="/axios-posts" element={<AxiosPosts/>}/>
        {/* 02 - Continuando requisições - POST e UPDATE/PUT */}
        <Route path="/posts" element={<PostManager />} />
        {/* 03 - Tratamento de erros */}
        <Route path="/post/:postId" element={<PostLoader />} />
        {/* 04 - Custom hook com API */}
        <Route path="/post/view/:postId" element={<PostViewer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
