import * as firebase from 'firebase/app'
import 'firebase/auth'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebaseConfig from '../services/firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}
providers.googleProvider.setCustomParameters({ hd: 'itesm.mx' })
providers.googleProvider.setCustomParameters({ hd: 'tec.mx' })

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})