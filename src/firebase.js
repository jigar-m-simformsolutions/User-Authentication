import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCOwmlGX8cBRrJsaz7S760BmtgM9jZHpCo",
  authDomain: "e-commerce-web-f1dae.firebaseapp.com",
  projectId: "e-commerce-web-f1dae",
  storageBucket: "e-commerce-web-f1dae.appspot.com",
  messagingSenderId: "7244974853",
  appId: "1:7244974853:web:9ad90a42c9a040dd25456c",
  measurementId: "G-560JK0P59R"
})

export const auth = app.auth()
export default app
