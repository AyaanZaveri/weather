import { initializeApp, getApps } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAe8VJFOWcsm6ddMwLG3rAUlPY-zh7ZdFU',
  authDomain: 'weat-2e150.firebaseapp.com',
  projectId: 'weat-2e150',
  storageBucket: 'weat-2e150.appspot.com',
  messagingSenderId: '891103333711',
  appId: '1:891103333711:web:58a9f5c76b954d62b2893a',
  measurementId: 'G-RC8SKHCBM7',
}

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0]
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
const db = getFirestore(firebaseApp)

export { auth, provider, db }
