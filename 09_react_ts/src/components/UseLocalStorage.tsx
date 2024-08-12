import { useState, useEffect } from "react"

// Hook personalizado para usar localStorage
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Inicializa o estado com o valor do localStorage, se existir, ou o valor inicial
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Tenta obter o item do localStorage
      const item = localStorage.getItem(key)
      // Se o item existir, parseia o JSON e retorna o valor, caso contrário, retorna o valor inicial
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue // Retorna o valor inicial em caso de erro
    }
  });

  // Atualiza o localStorage sempre que o storedValue mudar
  useEffect(() => {
    try {
      // Armazena o valor atualizado no localStorage
      localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      // Em caso de erro, imprime no console
      console.log(error)
    }
  }, [key, storedValue])// Reexecuta o efeito sempre que `key` ou `storedValue` muda

  // Retorna o valor armazenado e a função para atualizar o valor
  return [storedValue, setStoredValue]
}

const UseLocalStorage: React.FC = () => {
  // Usa o hook personalizado para obter e atualizar o valor do nome armazenado
  const [name, setName] = useLocalStorage("name", "")

  return (
    <div>
      <input 
      type="text"
      value={name} 
      onChange={(e) => setName(e.target.value)} />
      <p>O Nome armazenado é: {name}</p>
    </div>
  )
}

export default UseLocalStorage
