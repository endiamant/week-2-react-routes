import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/7db94c19-07d8-4b07-82e3-dbb9e1fb3f31">Go To Profile</Link>
      <Link to="/dashboard">Go To Root</Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
