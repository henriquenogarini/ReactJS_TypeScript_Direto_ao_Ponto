import { CounterAction } from "../types/actions"

// Função reducer para gerenciar o estado do contador
export const counterReducer = (state: number, action: CounterAction):number => {
    // O switch case é usado para determinar como o estado deve ser atualizado com base no tipo de ação
    switch(action.type){
        // Se a ação for do tipo "increment", o estado é incrementado em 1
        case "increment":
            return state +1
        // Se a ação for do tipo "decrement", o estado é decrementado em 1
        case "decrement":
            return state - 1   
        // Para qualquer outro tipo de ação, retorna o estado atual sem alterações
        default:
            return state
    }
}