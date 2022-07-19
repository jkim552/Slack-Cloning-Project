import React, { useRef, useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox, Alert }
  from '@mui/material'
import styles from './Login.module.css'
import { useAuth } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, currentUser } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('in handle submit function')
    try {
      setError('')
      setLoading(true)
      await signIn(emailRef.current.value, passwordRef.current.value)  
      alert("Signin successful")       
      
    } catch {
      setError('Failed to Login')
    }
    setLoading(false)
  }

  return (
    <Grid>
      <Paper className={styles.paper} elevation={20}>
        <Grid align='center'>
          <Avatar style={{ backgroundColor: '#1bbd72' }}>
          </Avatar>
          <h2>Log In</h2>
        </Grid>
        {currentUser && currentUser.email}

        {error && <Alert severity="error">{error}</Alert>}
        <form className={styles.form}
          onSubmit={handleSubmit}
        >
          <TextField
            variant="standard"
            fullWidth label='Email'
            ref={emailRef}
          />
          <TextField 
          variant="standard" 
          fullWidth label='Password' 
          ref={passwordRef} />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Remember me"
          />
          <Button
            disabled={loading}
            className={styles.loginBtn}
            type='submit' variant='contained' color='primary'
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default LoginPage