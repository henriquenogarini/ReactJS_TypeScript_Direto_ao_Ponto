import {useState} from 'react'

const Counter02 = () => {

    const [count, setCount] = useState(0)

  return <div>
    <p>Você clicou {count} vezes no botão</p>
    <button onClick={() => setCount(count + 1)}>Clique aqui para incrementar</button>
    <button onClick={() => setCount(count - 1)}>Clique aqui para decrementar</button>
  </div>

}

export default Counter02
