import { useState } from 'react'

//Nesta parte, utilizamos o hook useState, mas o que são ?
//O useState é um dos hooks mais fundamentais e utilizados no React. Ele permite que você adicione e gerencie o estado em componentes funcionais.
//Como funciona ?
//O useState retorna um array com duas posições : 1 - O estado atual e 2 - Uma função para atualizar esse estado.
//O estado pode ser de qualquer tipo (número, string, array, objeto, etc...).
//Atualizar o estado com a função de atualização causa a re-renderização do componente com o novo estado.

const Counter = () => {
    //[consultar, alterar]
    const [count, setCount] = useState(0)  //Aqui "count" é o valor atual do estrado, inicializando 0.
                                           //setCount é a função que você usa para atualizar o valor de "count"
                                           // Variáveis não renderizam o componente.
                                           // let x = 10

    return <div>
        <p>Você clicou {count} vezes.</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>  
    </div>
    //Quando o botão é clicado, setCount(count+1) é chamado, o que incrementa o valor de count em 1. O componente é então re-renderizado com o novo valor de count.

}

export default Counter
