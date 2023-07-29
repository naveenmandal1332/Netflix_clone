import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCovMUmsS28oew3uVbvj0seL0lIsKeoQWQ',
  authDomain: 'netflix-clone-12e46.firebaseapp.com',
  projectId: 'netflix-clone-12e46',
  storageBucket: 'netflix-clone-12e46.appspot.com',
  messagingSenderId: '85990651036',
  appId: '1:85990651036:web:eb338ca570d33fb8f5a959',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
