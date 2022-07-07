import React from 'react'
import { Box, Avatar, Button, Grid, Paper, TextField, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Checkbox }
  from '@mui/material'
import styles from './Login.module.css'

const Login = () => {
  return (
    <Grid>
      <Paper className={styles.paper} elevation={20}>
        <Grid align='center'>
          <Avatar style={{ backgroundColor: '#1bbd72' }}>

          </Avatar>
          <h2>Log In</h2>
        </Grid>
        <form className={styles.form}>
          <TextField variant="standard" fullWidth label='Email' />
          <TextField variant="standard" fullWidth label='Password' />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Remember me"
          />
          <Button className={styles.loginBtn} type='submit' variant='contained' color='primary'>
            Log In
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Login