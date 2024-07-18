import { useParams } from "react-router-dom" //Hook que deixa extrair um taskId da URL.

const TaskDetails = () => {
    const {taskId} = useParams()


  return (
    <div>
       <h2>Detalhes da tarefa</h2>
       <p>vENDO A TAREFA: {tasId}</p>
    </div>
  )
}

export default TaskDetails
