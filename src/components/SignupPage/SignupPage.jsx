import React, { useRef, useState } from 'react'
import { Box, Avatar, Button, Grid, Paper, TextField, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Checkbox, Alert }
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
  const { signUp, currentUser } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value)      
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
        {currentUser && currentUser.email}
        {error && <Alert severity="error">{error}</Alert>}
        <form className={styles.form}
          onSubmit={handleSubmit}
        >
          {/* <TextField
            variant="standard"
            fullWidth label='Name' /> */}
          {/* <FormControl style={{ marginTop: 10 }}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              style={{ display: 'initial' }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl> */}
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