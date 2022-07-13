import { initializeApp, firebase } from 'firebase/app';
import 'firebase/auth';

/*const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  rojectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});*/
const firebaseConfig = {
  apiKey: 'AIzaSyC9MuHLZ_p0aoBJ_vcLMnm0UGGTBzXGBEI',
  authDomain: 'slackclone-dev.firebaseapp.com',
  projectId: 'slackclone-dev',
  storageBucket: 'slackclone-dev.appspot.com',
  messagingSenderId: '105754588908',
  appId: '1:105754588908:web:61f4c3bf5d2226f21357c9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
