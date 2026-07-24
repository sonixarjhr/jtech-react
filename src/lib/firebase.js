import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAg7zx5j8O8OLDGXkGvklcI9tqLnPjm6WI",
  authDomain: "jtech-fd8dc.firebaseapp.com",
  projectId: "jtech-fd8dc",
  storageBucket: "jtech-fd8dc.firebasestorage.app",
  messagingSenderId: "12979692454",
  appId: "1:12979692454:web:b9a9982a9fded5d6592567",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)