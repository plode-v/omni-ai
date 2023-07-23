import React from 'react'
import { UserButton } from "@clerk/nextjs"

const Dashboard = () => {
  return (
    <div>
      dashboard (protected route)
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Dashboard