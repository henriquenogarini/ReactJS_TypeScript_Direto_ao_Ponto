import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

//Componente voltado para a construção de um form para o adição de um post.
//A const PostForm recebe onSucess de prop, direto do componente PostManager
const PostForm = ({post, onSucess}) => {
    
    const [title, setTitle] = useState(post?.title || "")
    const [body, setBody] = useState(post?.body || "")
    
    useEffect(() => { //Faz com que ao clicar editar, o input receba os valores das props.

        if(post){
        setTitle(post.title)
        setBody(post.body)
    }
    }, [post])


    //Para criar um novo post na lista
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {title, body, userId: 1}

        try {
            if(post) {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, newPost) //Put
                                                                                                                   //Utilizado para atualização
                onSucess(response.data, "update")
            }else {
                const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost)

            //adicionar post na lista
            onSucess(response.data, "add")
            }

          setTitle("")
          setBody("")
        } catch (error) {
            console.log("Erro ao enviar postagem :", error)
        }
    }

    const handleDelete = async() => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`) //Delete
                                                                                        //Está deletando o post selecionado
         onSucess(post, "delete")                                                       //Esta ação é bem mais simples, não precisa
                                                                                        //de argumentos para a API entender o DELETE.
           setTitle("")
           setBody("")
         } catch (error) {                                                   
            console.log("Erro ao deletar postagem :", error)
        }
    }

  return <form onSubmit={handleSubmit}>
    <div>
    <input 
    type="text" 
    value={title} 
    placeholder="Digite um título" 
    onChange={(e) => setTitle(e.target.value)}
    />
    </div>
    <div>
        <textarea 
        value={body} 
        onChange={(e) => setBody(e.target.value)} 
        placeholder="Digite o conteúdo...">
        </textarea>
    </div>
    <button type="submit">Enviar Formulário</button>
    {post && (
        <button type="button" onClick={handleDelete}>Excluir</button>
    )}
  </form>

}

export default PostForm
