import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import SignupPage from './ui/SignupPage/SignupPage';

class App extends React.Component {
  constructor(props) {
    super(props)

  }


  render () {
    return (
      <div className="App">
       <Route exact path='/signup' render={() => <SignupPage />} />
      </div>
    )
  }
}

export default App;
