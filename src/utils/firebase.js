// Could be slow as we don't need everything from firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBfSvfjxv1YymKUixfE6D2K-H6klFmvcXU',
  authDomain: 'tencontrols2023.firebaseapp.com',
  projectId: 'tencontrols2023',
  storageBucket: 'tencontrols2023.appspot.com',
  messagingSenderId: '424505285535',
  appId: '1:424505285535:web:5420e8f041e976fe707baa',
  measurementId: 'G-5L2LXQS960'
}

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const auth = getAuth(app)
