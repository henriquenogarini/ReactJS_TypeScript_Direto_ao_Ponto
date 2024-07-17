import React from 'react'

//Não é muito utilizado

const BotaoEstilizado = () => {

// Em react algumas coisas mudam de nome como class que vira className
//for que vira htmlFor


  const estiloDoBotao = {
    //Quando mexemos no React, utilizamos apenas camelCase, ou seja, background-color se torna backgroundColor
    backgroundColor: "red",
    color: "white",
    padding: "15px 32px",
    curso: "pointer"
  }

  return (
    <button style={estiloDoBotao}>Clique em mim</button>
  )
}

export default BotaoEstilizado
