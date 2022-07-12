import React, { useState } from 'react'
import { Box, Avatar, Button, Grid, Paper, TextField, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Checkbox }
  from '@mui/material'
import styles from './Login.module.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async () => {
    const auth = getAuth()
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log(result)
  }

  return (
    <Grid>
      <Paper className={styles.paper} elevation={20}>
        <Grid align='center'>
          <Avatar style={{ backgroundColor: '#1bbd72' }}>

          </Avatar>
          <h2>Log In</h2>
        </Grid>
        <form className={styles.form}
          onSubmit={(e)=>e.preventDefault()}
        >
          <TextField
            variant="standard"
            fullWidth label='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
          variant="standard" 
          fullWidth label='Password' 
          onChange={(e) => setPassword(e.target.value)} />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Remember me"
          />
          <Button
            className={styles.loginBtn} type='submit'
            variant='contained'
            color='primary'
            onClick={signIn}>
            Log In
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Login