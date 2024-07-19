import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PostLoader = () => {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [sucessMessage, setSucessMessage] = useState("")
    const {postId} = useParams() //Aqui nós pegamos o postId da URL.

    useEffect(() => {

        const fetchPost = async () => {
            setLoading(true)
            setError("")
            setSucessMessage("")

            try {

                if(postId > 500){ //Se o número do post for maior que 500, o react ativará o erro na página
                    setPost(null)
                    throw new Error("Não Existe") //Maneira de enviar a mensagem de erro que quero para o catch, sem ser algo puro da API
                }

                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`
                )
                setPost(response.data)
                setSucessMessage("Post carregado com sucesso !")
            } catch (error) {
                setError("Falha ao carregar post: " + error.message)
            } finally{
              setLoading(false)
            }
        }

            fetchPost()
    }, [postId])
    

  return (
    <div>
        <h1>Post: {postId}</h1>
        {loading && <p>Carregando...</p>}
        {error && <p style={{color:'red'}}>{error}</p>}
        {sucessMessage && <p style={{color:'green'}}>{sucessMessage}</p>}
        {post && (
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        )}
    </div>
  )
}

export default PostLoader
