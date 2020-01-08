import React from 'react'
import { Link } from 'react-router-dom'
import { LinearProgress, Button } from '@material-ui/core'

const Status = ({ values, onCancel }) => (
  <main>
    {values ? <>
      PG: {values.pg}
      <LinearProgress variant="determinate" value={50} />
      VG: {values.vg}
      <LinearProgress variant="determinate" value={20} />
      Nic: {values.nic}
      <LinearProgress variant="determinate" value={70} />
      <br />
      <Button type="submit" onClick={onCancel} variant="contained">Cancel</Button>
    </> : <Link to="/mix">Enter values first</Link>}
  </main>
)

export default Status
