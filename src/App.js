import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


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
  state = { isSignedIn: false }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
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
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
            <h1>Bem-Vindo { firebase.auth().currentUser.displayName }</h1>
            <img alt="profile picture" src={ firebase.auth().currentUser.photoURL } />
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig = { this.uiConfig }
            firebaseAuth = { firebase.auth() }
          />
        )}
      </div>
    )
  }
}
  

export default App
