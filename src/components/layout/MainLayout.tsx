import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div className="flex">
      <main className="flex-1">
        <Outlet /> {/* child routes here */}
      </main>
    </div>
  )
}

export default MainLayout