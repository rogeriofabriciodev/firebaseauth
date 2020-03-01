import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import Dashboard from './components/dashboard/Dashboard'
import MenuSignIn from './components/nav/MenuSignIn'
import MenuSignOut from './components/nav/MenuSignOut'


firebase.initializeApp({
  apiKey: "AIzaSyCfeRvvRf6-Hw7eeamdvzpEbhnO8Vm_rso",
  authDomain: "zapp-ac004.firebaseapp.com",
  databaseURL: "https://zapp-ac004.firebaseio.com",
  projectId: "zapp-ac004",
  storageBucket: "zapp-ac004.appspot.com",
  messagingSenderId: "1077277342809",
  appId: "1:1077277342809:web:86287ba9a7547b01ca4548",
  measurementId: "G-3B145FECWE"
})

class App extends Component {
  state = { signInSuccessWithAuthResult: false }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

componentDidMount = () => {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({isSignedIn:!!user})
  })
}

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <div>
            <MenuSignIn />
            <Dashboard />
          </div>
        ) : (
          <div>
            <MenuSignOut />
            <h1 className="mb-3">Faça Login</h1>
            <StyledFirebaseAuth
              uiConfig = { this.uiConfig }
              firebaseAuth = { firebase.auth() }
            />
          </div>
        )}
      </div>
    )
  }
}
  

export default App