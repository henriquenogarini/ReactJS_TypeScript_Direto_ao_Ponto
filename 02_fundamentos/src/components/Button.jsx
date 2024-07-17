const Button = () => {
    const handleClick = () => {
        console.log("Clicou")
    }
  return <button onClick={handleClick}>Clique em mim</button>
}

export default Button


//Quando precisamos de passar um argumento, usamos uma função anônima (arrow function)
//Quando não temos argumento, utilizamos a função padrão javascript.