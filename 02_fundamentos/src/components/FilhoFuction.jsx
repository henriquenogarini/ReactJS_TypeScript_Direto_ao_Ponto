import React from 'react'

//Recebe a function onChildClick como props do componente pai.

const FilhoFuction = ({onChildClick}) => {
  return (
    <button onClick={onChildClick}>Botão filho</button>
  )
}

export default FilhoFuction
