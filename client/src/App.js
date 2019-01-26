import React, { Component } from 'react';
import logo from './logo.png'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'


const logoStyle = {
  width:300,
  display:'block',
  margin: 'auto'
}

const containerStyle = {
  width:1000,
  display:'block',
  margin: 'auto'
}

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container" style={{...containerStyle}}>
            <img src={logo} alt="SpaceX" style={logoStyle}/>
            <Route exact path='/' component={Launches}/>
            <Route exact path='/launch/:flight_number' component={Launch}/>


          </div>
        </Router>
      </ApolloProvider>

    )
  }
}

export default App;
