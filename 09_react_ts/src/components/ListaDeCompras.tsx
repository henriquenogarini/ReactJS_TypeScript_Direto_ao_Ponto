import { useState } from "react"

const ListaDeCompras = () => {

  type Item = {
    id: number,
    name: string
  }

  //Criando a const com o tipo Item, com array vazio, que armazenará os novos itens.
  const [itens, setItens] = useState<Item[]>([])
  //Criando a const para criar um novo item em si, que serão adicionados na array.
  const [newItem, setNewItem] = useState<string>("")

  //Função para adicionar um novo item
  const addItem = () => {

    //Cria o novo item
    const item: Item = {
    id: itens.length + 1,
    name: newItem
   } 

   //Adiciona o novo item no array.
   setItens([...itens, item])

   //Reseta a string de criar item, para o campo ficar limpo e poder criar um novo item.
   setNewItem("")

 }

  return (
    <div>
      <input 
      type="text" 
      value={newItem} 
      onChange={(e) => setNewItem(e.target.value)} 
      />
      <button onClick={addItem}>Adicionar</button>
      <ul>
        {itens.map((item) =>(
            <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaDeCompras
