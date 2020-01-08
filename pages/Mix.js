import React, { createRef } from 'react'
import { useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  FormControl,
  InputAdornment
} from '@material-ui/core'

const Mix = ({ values, onSetValues, onSubmit }) => {
  const history = useHistory()

  const vgRef = createRef()
  const pgRef = createRef()
  const nicRef = createRef()

  function onClickSubmit(e) {
    e.preventDefault()
    onSubmit()
    history.push('/status')
  }

  const handleChange = event => {
    onSetValues({
      vg: vgRef.current.value,
      pg: pgRef.current.value,
      nic: nicRef.current.value,
    })
  }

  return (
    <form className="form">
      <TextField
        InputProps={{ endAdornment: <InputAdornment position="end">mg</InputAdornment> }}
        type="number" inputRef={vgRef} label="VG"
        value={values.vg} onChange={handleChange} />
      <TextField
        InputProps={{ endAdornment: <InputAdornment position="end">mg</InputAdornment> }}
        type="number" inputRef={pgRef} label="PG"
        value={values.pg} onChange={handleChange} />
      <TextField
        InputProps={{ endAdornment: <InputAdornment position="end">mg</InputAdornment> }}
        type="number" inputRef={nicRef} label="Nic"
        value={values.nic} onChange={handleChange} />
      <br />
      <Button type="submit" onClick={onClickSubmit} variant="contained">Submit</Button>
    </form>
  )
}

export default Mix
