import React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, InputAdornment, TextField } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Header.module.css';

const MyTextField = styled(TextField)({
  borderRadius: '50px',
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    color: 'white',
    backgroundColor: '#3f0f40',
  },
});

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Avatar className={styles.profile}>H</Avatar>
      </div>
      <div className={styles.middle}>
        <AccessAlarmIcon className={styles.alarm} />
        <MyTextField
          variant={'outlined'}
          size={'small'}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon className={styles.searchSvgIcon} />
              </InputAdornment>
            ),
          }}
          placeholder={' Search: '}
        ></MyTextField>
      </div>
      <div className={styles.right}>3</div>
    </div>
  );
};

export default Header;
