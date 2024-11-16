import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlKY45VvBJAXeFlJIiYeYsmIJanjQTZVU",
  authDomain: "anarollanpf.firebaseapp.com",
  projectId: "anarollanpf",
  storageBucket: "anarollanpf.firebasestorage.app",
  messagingSenderId: "938330617350",
  appId: "1:938330617350:web:1eb81dda671c7ad9173587"
}

initializeApp(firebaseConfig)

const db = getFirestore()

export default db 