// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBC2WTgg4d3O6c54mJVAegUkjDLVWLmnDw',
  authDomain: 'thevillagelibrary-5be4a.firebaseapp.com',
  projectId: 'thevillagelibrary-5be4a',
  storageBucket: 'thevillagelibrary-5be4a.appspot.com',
  messagingSenderId: '287508363077',
  appId: '1:287508363077:web:fe8c89617fb946fd40f02c',
  measurementId: 'G-SL9XRME9Y6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
