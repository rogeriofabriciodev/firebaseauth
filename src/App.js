import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import MenuSignIn from './components/nav/MenuSignIn'
import MenuSignOut from './components/nav/MenuSignOut'
import PageOne from './components/pages/PageOne'


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
      <BrowserRouter>
        <div className="App">
          {this.state.isSignedIn ? (
            <Switch>
              <div>
                <MenuSignIn />
                <Route exact path='/' component={Dashboard} />
                <Route path='/pageone' component={PageOne} />
              </div>
            </Switch>
          ) : (
              <div>
                <MenuSignOut />
                <h1 className="mb-3">Faça Login</h1>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            )}
        </div>
      </BrowserRouter>
    )
  }
}
  

export default App