import React, { useRef, useState } from 'react'
import { Box, Avatar, Button, Grid, Paper, TextField, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Checkbox }
  from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import styles from './Signup.module.css'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const SignupPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = async () => {
    const auth = getAuth()
    const result = await createUserWithEmailAndPassword(auth, email, password)
    console.log(result)
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
        <form className={styles.form}
          onSubmit={(e)=>e.preventDefault()}
        >
          <TextField
            variant="standard"
            fullWidth label='Name' />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            variant="standard"
            type='password'
            fullWidth label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            required
            variant="standard"
            type='password'
            fullWidth label='Confirm password' />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions"
          />
          <Button
            className={styles.signupBtn}
            type='submit' variant='contained' color='primary'
            onClick={signUp}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default SignupPage