//import { initializeApp, firebase } from 'firebase/';
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { firebaseConfig } from './firebase.config';

const firebaseConfig = {
  apiKey: 'AIzaSyC9MuHLZ_p0aoBJ_vcLMnm0UGGTBzXGBEI',
  authDomain: 'slackclone-dev.firebaseapp.com',
  projectId: 'slackclone-dev',
  storageBucket: 'slackclone-dev.appspot.com',
  messagingSenderId: '105754588908',
  appId: '1:105754588908:web:61f4c3bf5d2226f21357c9',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
