import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <main className='w-screen h-screen'>
      {/* <h1>Admin</h1> */}
      <Outlet />
    </main>
  )
}
export default Admin
