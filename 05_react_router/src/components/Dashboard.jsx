import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <li>
        <Link to="profile">Perfil</Link>
        </li>
        <li>
        <Link to="settings">Configurações</Link>
        </li>
      </nav>
      <div>
        {/*Componente que vai informar onde os componentes aninhados estão no componente pai, pode ser considerado um "alvo"*/}
        <Outlet /> 
      </div>
    </div>
  )
}

export default Dashboard
