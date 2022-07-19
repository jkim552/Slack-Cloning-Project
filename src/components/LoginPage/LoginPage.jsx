import React, { useRef, useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox, Alert }
  from '@mui/material'
import styles from './Login.module.css'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const LoginPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await signIn(emailRef.current.value, passwordRef.current.value)
      navigate('/home')
    } catch {
      setError('Failed to Login')
    }
    setLoading(false)
  }

  return (
    <div>
      <Navbar />
      <Grid>
        <Paper className={styles.paper} elevation={20}>
          <Grid align='center'>
            <Avatar style={{ backgroundColor: '#1bbd72' }}>
            </Avatar>
            <h2>Log In</h2>
          </Grid>
          {error && <Alert severity="error">{error}</Alert>}
          <form className={styles.form}
            onSubmit={handleSubmit}
          >
            <TextField
              required
              variant="standard"
              type='email'
              fullWidth label='Email'
              inputRef={emailRef}
            />
            <TextField
              required
              variant="standard"
              type='password'
              fullWidth label='Password'
              inputRef={passwordRef} />
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
    </div>
  )
}

export default LoginPage