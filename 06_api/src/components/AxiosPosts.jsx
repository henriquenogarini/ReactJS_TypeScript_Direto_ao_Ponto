import {useState, useEffect} from 'react'
import axios from "axios"

const AxiosPosts = () => {
    //O Axios não é nativo do JavaScript, e deixa o Fetch mais simples
    //JSON placholder
    //id, title, body

    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const axiosPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts") //Constante que armazenará os dados da API.

                setPosts(response.data) //O Axios já transforma os dados em objetos automaticamente
            } catch (error) {
                setError(error.message) //Caso algo dê errado, é acionado esta parte de erro
            }
        }

        axiosPosts() //Chamada da função criada dentro do useEffect
    }, [])


  return <div> 
    <h1>Posts (Axios API)</h1> 
    {error ? (
        <p>Erro : {error}</p>) : (       //Catch de erro para verificar se a variável foi preenchida
        posts.map((post) => (            //Se preenchida, irá rodar um map dos posts.
            <div key={post.id}>          {/*Pega cada Id, deixando o post único Pega o title do posts Pega o conteúdo do body do posts */}
                <h2>{post.title}</h2>    
                <p>{post.body}</p>          
                </div>
        ))
    )}
  </div>
}

export default AxiosPosts
