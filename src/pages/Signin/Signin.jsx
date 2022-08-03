import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signInWithEmailAndPassword } from 'firebase/auth';
import slackLogo from '../../assets/slack.svg';
import { useNavigate } from 'react-router-dom';
import styles from './Signin.module.css';
import { auth } from '../../firebase';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

const Copyright = props => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright @ '}
      <Link color='inherit' href='https://www.github.com/jkim552'>
        {' '}
        My Github Page
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    let response;
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      handleRedirectToSlack();
      // console.log(result);
    } catch (e) {
      console.log('failed!');
      response = e;
      alert('Bad credentials, please try again');
    }
    return response;
  };

  let navigate = useNavigate();
  async function handleRedirectToSignUp() {
    navigate('/signup', { replace: true });
  }

  async function handleRedirectToSlack() {
    navigate('/slack', { replace: true });
  }

  return (
    <Container component='main' maxWidth='xs'>
      <div className={styles.box}>
        <img className={styles.slackLogo} src={slackLogo} alt={'logo'} />

        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box
          component='form'
          onSubmit={e => e.preventDefault()}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            onClick={submit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='' variant='body2' onClick={handleRedirectToSignUp}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
export default Signin;
