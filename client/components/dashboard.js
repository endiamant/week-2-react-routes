import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard </div>
      <Link to="/dashboard/profile/7db94c19-07d8-4b07-82e3-dbb9e1fb3f31">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
