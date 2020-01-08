import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => <nav className="app-top-bar">
  <Link to="/">
    <h1>Liquid-o-mat 3000</h1>
  </Link>
  <Link to="/mix" class="button fancy-button"><i class="material-icons">colorize</i>Mix</Link>
  <Link to="/status" class="button fancy-button"><i class="material-icons">check_circle</i>Status</Link>
  <Link to="/statistics" class="button fancy-button"><i class="material-icons">insert_chart</i>Statistics</Link>
</nav>

export default TopBar
