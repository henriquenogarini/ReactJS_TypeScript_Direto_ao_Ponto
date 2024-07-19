import {useState, useEffect} from 'react'

const FetchPosts = () => {
    //O Fetch API é nativo do JavaScript
    //JSON placholder
    //id, title, body

    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts") //Constante que armazenará os dados da API.
                const data = await response.json() //Transforma as respostas da API, em um array de objetos

                setPosts(data)
            } catch (error) {
                setError(error.message) //Caso algo dê errado, é acionado esta parte de erro
            }
        }

        fetchPosts() //Chamada da função criada dentro do useEffect
    }, [])


  return <div> 
    <h1>Posts (Fetch API)</h1> 
    {error ? (<p>Erro : {error}</p>) : ( //Catch de erro para verificar se a variável foi preenchida
        posts.map((post) => (            //Se preenchida, irá rodar um map dos posts.
            <div key={post.id}>          {/*Pega cada Id, deixando o post único Pega o title do posts Pega o conteúdo do body do posts */}
                <p>{post.body}</p>       
                <h2>{post.title}</h2>    
                </div>
        ))
    )}
  </div>
}

export default FetchPosts
