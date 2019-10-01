import React from 'react';
import axios from 'axios';

import './App.css';
import User from './User';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  componentDidMount() {

    axios.get(`https://api.github.com/users/Damilolawumi`)
      .then((response) => {
        //set user state to reponse from backend
        this.setState({
          user: response.data,
        })
        console.log(response);
      })
  }

  render() {
    return (
      <div>
        <User myUser={this.state.user}/>
      </div>
        );
      }
    }
    
    export default App;
    
    
