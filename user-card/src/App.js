import React from 'react';
import axios from 'axios';
import {Router} from 'react-router-dom';
import './App.css';
import User from './User';
import Followers from './followers';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      followers: []
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

    axios.get('https://api.github.com/users/Damilolawumi/followers')
      .then((response) => {
        this.setState({
          followers: response.data,
        })
        console.log(response);
      })
  }



  render() {
    return (
      <div>
        <User myUser={this.state.user} />
        <Followers myFollowers={this.state.followers}/>
      </div>
    );
  }
}

export default App;


