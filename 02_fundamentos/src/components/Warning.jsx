import React from 'react'

//Costuma ser mais utilizado que as expressões ternárias padrão.

const Warning = ({warning}) => {

    if(!warning){
        return null
    }

  return <div>Aviso!</div>
}

export default Warning
