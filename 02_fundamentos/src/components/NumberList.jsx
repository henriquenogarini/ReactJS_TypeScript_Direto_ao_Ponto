import React from 'react'

const NumberList = ({numbers}) => {
    //Poderia ser utilizado em estruturas de loop, porém em react não utilizamos elas.
    //Em react utilizamos métodos array - filter, map, reduce, ...
    //Para esta situação o map é mais utilizado.

    //chaves - key
    //um identificado único para cada elemento
  return <ul>
    {numbers.map((number, index) => (
        <li key={index}>{number}</li>
    ))}
   </ul>
}

export default NumberList
