import React from 'react'
import { UserButton } from "@clerk/nextjs"

const Dashboard = () => {
  return (
    <div>
      Dashboard (protected)
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Dashboard