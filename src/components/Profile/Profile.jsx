import React, { useState } from 'react'
import { Avatar, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  return (
    <Grid sx={{ margin: 10 }}>
      <Paper elevation={20} sx={{ padding: 5 }}>
        <IconButton onClick={() => navigate('/home')}>
          <ArrowBackIcon />
        </IconButton>
        <Grid align='center'>
          <Avatar style={{ backgroundColor: '#1bbd72' }} />
          <h2>Profile</h2>
        </Grid>
        <Typography variant='h5' sx={{ padding: 3 }}>Email: {currentUser.email}</Typography>
        <Button 
          type='submit' variant='contained' color='primary'
        >
          Modify
        </Button>
      </Paper>
    </Grid>
  )
}

export default Profile