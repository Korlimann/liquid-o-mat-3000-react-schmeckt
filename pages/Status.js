import React from 'react'
import { Link } from 'react-router-dom'
import { LinearProgress, Button } from '@material-ui/core'

const Status = ({ values, onCancel }) => (
  <main>
    {values ? <>
      <h2>PG: 0.0/{values.pg}mg</h2>
      <LinearProgress variant="determinate" value={0/values.pg} />
      <h2>VG: 0.0/{values.vg}mg</h2>
      <LinearProgress variant="determinate" value={0/values.vg} />
      <h2>NIC: 0.0/{values.nic}mg</h2>
      <LinearProgress variant="determinate" value={0/values.nic} />
      <br />
      <Button type="submit" onClick={onCancel} variant="contained">Cancel</Button>
    </> : <Link to="/mix">Enter values first</Link>}
  </main>
)

export default Status
