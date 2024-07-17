import React from 'react'
import FilhoFuction from './FilhoFuction'

//Neste arquivo jsx, utilizamos o conceito de passar props como funções.
//Passar funções como props em React permite que você envie uma função de um componente pai para um componente filho
//Permitindo que o filho chame essa função e envie dados ou ações de volta para o pai.
//Isso é útil para comunicação entre componentes e para manejar eventos de componentes filhos no pai.

const PaiFunction = () => {

    const handleChildClick = () => {
        console.log("Clicou no botão do elemento filho!")
    }

  return (
    <div>
        <FilhoFuction onChildClick={handleChildClick}/>
    </div>
  )
}

export default PaiFunction
