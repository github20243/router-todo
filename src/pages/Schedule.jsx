import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Schedule = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Schedule</h1>
      <Button onClick={() => navigate("/notification")} variant="contained">
				Go to Student Page
			</Button>
    </div>
  )
}

export default Schedule
