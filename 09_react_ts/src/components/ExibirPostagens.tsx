import { useEffect, useState } from 'react'
import axios from 'axios'
// Importa o tipo Post para tipar os dados das postagens.
import { Post } from '../types/post'

const ExibirPostagens = () => {

    // Define o estado "posts" para armazenar um array de objetos do tipo Post.
    // O estado inicial é um array vazio.
    const [posts, setPosts] = useState<Post[]>([])

    // Define o estado "carregando" para indicar se os dados ainda estão sendo carregados.
    // O estado inicial é true, pois assumimos que a requisição ainda não foi feita.
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {

        // Função assíncrona para buscar as postagens da API.
        const buscarPostagens = async () => {
            try {
                // Faz uma requisição GET para a API e espera pela resposta.
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

                // Define o estado "posts" com os primeiros 5 itens da resposta.
                setPosts(response.data.slice(0, 5))
            } catch (error) {
                console.log(error)
            }finally{
                // Após a tentativa de buscar os dados (seja bem-sucedida ou com erro),
                // define o estado "carregando" como false, indicando que o carregamento terminou.
                setCarregando(false)
            }
        }

        buscarPostagens()
    }, [])


  return (
    <div>
      <h2>Lista de postagens</h2>
      {carregando ? (<p>Carregando posts...</p>) : (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default ExibirPostagens
