import React, { useRef, useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography,  FormControlLabel, Checkbox, Alert }
  from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import styles from './Signup.module.css'
import { useAuth } from '../../contexts/AuthContext'

const SignupPage = (props) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value)
      alert("Signup successful")      
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <Grid>
      <Paper className={styles.paper} elevation={20}>
        <Grid align='center'>
          <Avatar style={{ backgroundColor: '#1bbd72' }}>
            <AddIcon />
          </Avatar>
          <h2>Sign up</h2>
          <Typography variant='caption'>Please fill this form to create account</Typography>
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
            placeholder='example123@xxx.com'
            inputRef={emailRef}
          />
          <TextField
            required
            variant="standard"
            type='password'
            fullWidth label='Password'
            inputRef={passwordRef}
          />
          <TextField
            required
            variant="standard"
            type='password'
            fullWidth label='Confirm password'
            inputRef={confirmPasswordRef}
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions"
          />
          <Button
            disabled={loading}
            className={styles.signupBtn}
            type='submit' variant='contained' color='primary'
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default SignupPage