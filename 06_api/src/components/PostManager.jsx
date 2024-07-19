import { useState, useEffect } from "react"
import axios from "axios"
import PostForm from "./PostForm"

const PostManager = () => {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")

    const [selectedPost, setSelectedPost] = useState(null) //Para saber qual post estou editando no momento
    const [isEditing, setIsEditing] = useState(false) //Para saber quando começa o ato de edição e quando termina.

    //Função que recebe um post e a operação que realizará. Seu papel é refletir o que tem na API na lista.
    const handleSucess = (post, operation) => {
        if(operation === "add") {
            setPosts((currentPosts) => [post, ...currentPosts]) //Pega os posts atuais, adiciona o novo post.
        }else if (operation === "update"){
            setPosts((currentPosts) => currentPosts.map((p) => (p.id === post.id ? post : p)) //Identifico o post que quero alterar com map
        )                                                                                     //e altero, senão retorna como ele estava antes                                                                     
      } else if (operation === "delete"){
        setPosts((currentPosts) => currentPosts.filter((p) => p.id !== post.id)) 
        setSelectedPost(null)                                                                            
      }
      setIsEditing(false) //Comando para encerrar a edição foi acabou.
    }

    useEffect(() => {
        const axiosPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts") //Constante que armazenará os dados da API.

                setPosts(response.data.slice(0,5)) //O Axios já transforma os dados em objetos automaticamente
            } catch (error) {
                setError(error.message) //Caso algo dê errado, é acionado esta parte de erro
            }
        }

        axiosPosts() //Chamada da função criada dentro do useEffect
    }, [])

    //Função para editar um post
    const handleEdit = (post) => {
        setSelectedPost(post)
        setIsEditing(true)
    }

     //Função para cancelar a edição já realizada
     const handleCancelEdit = () => {
        setSelectedPost(null)
        setIsEditing(false)
    }
  
    return (
        <div>
            <h1>Gerenciar Posts</h1>
            <PostForm post={isEditing ? selectedPost : null} 
            onSucess={handleSucess} 
            />
            {isEditing && <button onClick={handleCancelEdit}>Cancelar Edição</button>}
            <h2>Postagens</h2>
            {posts.map((post) => (
                <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => handleEdit(post)}>Editar</button>
        </div>
      ))}
        </div>
    )
}

export default PostManager
